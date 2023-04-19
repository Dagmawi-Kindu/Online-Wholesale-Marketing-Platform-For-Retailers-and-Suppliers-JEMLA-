import dotenv from 'dotenv'
dotenv.config();
import "reflect-metadata";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import multer from 'multer';
import sharp from 'sharp';
import { Request, Response, NextFunction } from 'express';
import { accountStatus, Approval, Auth } from "../entity/autentication/auth.entity"
import { AppDataSource } from "../data-source"
import { Console } from 'console';


//sign-in
export const sign_in = async (req:Request, res:Response, next:NextFunction) => {
    const authRepository = AppDataSource.getRepository(Auth)
    
    //check if user exits and approved
    let foundAuth = await authRepository.findOne({
        where: {
            phoneNumber: req.body.phoneNumber            
        }
    })
    
    if(!foundAuth)
        return res.status(202).json({
          status: "success",
        message:"Sorry, the entered credential doesn't exist"
        })
    if(foundAuth.approval == Approval.Pending)
        return res.status(202).json({
            status: "success",
            message:"Sorry, the entered credential is not approved yet."
        })
    if (foundAuth.accountStatus == accountStatus.Disabled) {
        return res.status(202).json({
           status: "success",
            message: "Sorry your account is disabled."
        })
    }      
    if(foundAuth.approval == Approval.Declined)
        return res.status(202).json({
            status: "success",
            message:"Sorry, the entered credential is declined. Please try to create new account after 3 days."
        })
    //check if password is correct
    const isPasswordCorrect = await bcrypt.compare(req.body.password, foundAuth.password) 
    if (!isPasswordCorrect)        
        return res.status(202).json({
            message: "The entered password is not correct"
        })
    let token = jwt.sign({
        id: foundAuth.id,        
        role: foundAuth.role,
        approval: foundAuth.approval,
        accountStatus: foundAuth.accountStatus
    }, process.env.JWT_KEY)
    let { password, ...otherCredentials } = foundAuth
    res.status(200).json({
        userData: otherCredentials,
        access_token:token
    })
}

const multerStorage = multer.memoryStorage();

const multerFilter = (req:Request, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    }
    else {
        cb((res:Response ) => {
            res.status(400).json({
                "message": "Not an image!"
            })
        }),false
    }
}
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});
export const uploadUserPhoto = upload.fields([
    { name: 'tradeLiscence', maxCount: 1 },
    { name: 'kebeleID', maxCount: 1 },
    { name: 'profilePicture', maxCount: 1 },
    
]);

export const resizeUserPhoto = async (req, res, next) => {
   // if (!req.files.tradeLiscence || !req.files.kebeleID || !req.files.profilePicture) return next();
    // //Trade liscence photo
    // req.body.tradeLiscence = `user-${Date.now()}.jpeg`  
    // await sharp(req.files.tradeLiscence[0].buffer)
    //     .resize(500, 500)
    //     .toFormat('jpeg')
    //     .jpeg({ quality: 90 })        
    //     .toFile(`public/images/trade_liscences/${req.body.tradeLiscence}`);
    // // //Kebele ID photo
    // req.body.kebeleID = `user-${Date.now()}.jpeg`  
    // await sharp(req.files.kebeleID[0].buffer)
    //     .resize(500, 500)
    //     .toFormat('jpeg')
    //     .jpeg({ quality: 90 })        
    //     .toFile(`public/images/kebele_id/${req.body.kebeleID}`);
    // //Profile Picture
    // req.body.profilePicture = `user-${Date.now()}.jpeg`  
    // await sharp(req.files.profilePicture[0].buffer)
    //     .resize(500, 500)
    //     .toFormat('jpeg')
    //     .jpeg({ quality: 90 })        
    //     .toFile(`public/images/profile_pictures/${req.body.profilePicture}`);
   
    
     //Trade liscence
    req.body.tradeLiscence = [];  
    await Promise.all(
        req.files['tradeLiscence'].map(async (file, i) => {
            const filename = `tradeLiscence-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                //  .resize(800, 800)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/trade_liscences/${filename}`);
            req.body.tradeLiscence.push(filename);
            
        })
    ); 
    //Kebele ID
    req.body.kebeleID = [];  
    await Promise.all(
        req.files['kebeleID'].map(async (file, i) => {
            const filename = `kebeleID-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                // .resize(1000, 1000)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/kebele_id/${filename}`);
            req.body.kebeleID.push(filename);
            
        })
    ); 
    //Profile Picture
    req.body.profilePicture = [];  
    await Promise.all(
        req.files['profilePicture'].map(async (file, i) => {
            const filename = `profilePicture-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                .resize(500, 500)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/profile_pictures/${filename}`);
            req.body.profilePicture.push(filename);
            
        })
    ); 
    
    next();
};

//sign-up
export const sign_up = async (req:Request, res:Response) => {
    const authRepository = AppDataSource.getRepository(Auth)
   
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    let auth = new Auth()
    auth.firstName = req.body.firstName    
    auth.middleName = req.body.middleName   
    auth.lastName = req.body.lastName
    auth.email = req.body.email         
    auth.tradeLiscenceNumber = req.body.tradeLiscenceNumber
    auth.tradeLiscence = req.body.tradeLiscence
    auth.kebeleID = req.body.kebeleID
    auth.profilePicture = req.body.profilePicture
    auth.role = req.body.role
    auth.phoneNumber = req.body.phoneNumber  
    auth.password = hash

   
    
      
    await authRepository.save(auth)
    
        res.status(200).json({
        message:"Your entered information is being reviewed."
        })
    
}
    

   
   
    

