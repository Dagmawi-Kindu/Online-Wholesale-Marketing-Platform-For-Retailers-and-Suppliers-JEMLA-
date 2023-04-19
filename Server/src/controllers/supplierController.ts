import "reflect-metadata";
import multer from 'multer';
import sharp from 'sharp';
import { Request,Response,NextFunction } from "express";
import { AppDataSource } from "../data-source"
import { Company } from '../entity/CompanyInformation';
import { Products } from "../entity/Products";
import { Feedback, feedBackType } from "../entity/feedback";
import {Auth} from "../entity/autentication/auth.entity"

const companyInfoRepository = AppDataSource.getRepository(Company)
const feedbackRepository = AppDataSource.getRepository(Feedback)
const productsRepository = AppDataSource.getRepository(Products);
const supplierRepository=AppDataSource.getRepository(Auth)

const getCurrentCustomTime=():string=>{
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours()+'-'+today.getMinutes()+'-'+today.getSeconds()+'-'+today.getMilliseconds()
    return date+"_"+time
}
// export const getFullLocation=async(certificates:string)=>{
//     return `http://localhost:${process.env.PORT_NUMBER}/images/certificates/${certificates}`
// }
    
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    }
    else {
        cb((res) => {
           return res.status(400).json({
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
    { name: 'certificates',  maxCount: 2 },
    { name: 'productImage1', maxCount: 2 },
    { name: 'productImage2', maxCount: 2 },
    { name: 'productImage3', maxCount: 2 },
    { name: 'productImage4', maxCount: 2 },
    { name: 'companyLogo', maxCount: 2},
   
]);
// export const uploadUserPhoto = upload.
export const resizePhoto1 = async (req, res, next) => {
    // console.log(req.files['certificates'])
    
   // if (!req.files['certificates'] || !req.files['productImage']) return next();
   
   //certificates
    req.body.certificates = [];  
    await Promise.all(
        req.files['certificates'].map(async (file, i) => {
            const filename = `certificates-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                .resize(500, 500)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/certificates/${filename}`);
            req.body.certificates.push(filename);
            
        })
    );   

    //companyLogo
    req.body.companyLogo = [];  
    await Promise.all(
        req.files['companyLogo'].map(async (file, i) => {
            const filename = `companyLogo-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                .resize(500, 500)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/company_logo/${filename}`);
            req.body.companyLogo.push(filename);
            
        })
    );

    next();
};

export const resizePhoto2 = async (req, res, next) => {
  //productImages    
    //productImage1
    req.body.productImage1 = [];  
    await Promise.all(
        req.files['productImage1'].map(async (file, i) => {
            const filename = `productImage1-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                .resize(500, 500)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/product_images/${filename}`);
            req.body.productImage1.push(filename);
            
        })
    );
    //productImage2
    req.body.productImage2 = [];  
    await Promise.all(
        req.files['productImage2'].map(async (file, i) => {
            const filename = `productImage2-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                .resize(500, 500)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/product_images/${filename}`);
            req.body.productImage2.push(filename);
            
        })
    );
    //productImage3
    req.body.productImage3 = [];  
    await Promise.all(
        req.files['productImage3'].map(async (file, i) => {
            const filename = `productImage3-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                .resize(500, 500)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/product_images/${filename}`);
            req.body.productImage3.push(filename);
            
        })
    );
    //productImage4
    req.body.productImage4 = [];  
    await Promise.all(
        req.files['productImage4'].map(async (file, i) => {
            const filename = `productImage4-${Date.now()}-${i + 1}.jpeg`;
            await sharp(file.buffer)
                .resize(500, 500)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/images/product_images/${filename}`);
            req.body.productImage4.push(filename);
            
        })
    );    
 
    next();
};

export const checkCompany = async (req, res) => {
    try {
        const id = req.params.id;
       
        const companyInformation = await companyInfoRepository.findOneBy({ supplierID: id });
    
        //console.log(companyInformation)
        if (companyInformation === null)
            return res.status(202).json({
                status: 'sucess',
                message: 'Info not found'
            })       
        
        res.status(200).json({
            status: 'Success',
            companyInformation
        });
        
    } catch(err) {
        res.status(500).json({
            "message": err.message
        })
    }
}

//Inserting the company information
export const addCompanyInformation = async (req, res) => {
    
    try {       
        
        let company = new Company()
        company.companyName = req.body.companyName;
        company.region = req.body.region;
        company.city = req.body.city;
        company.mainCategory = req.body.mainCategory;
        company.mainProducts1 = req.body.mainProducts1;
        company.mainProducts2 = req.body.mainProducts2;
        company.mainProducts3 = req.body.mainProducts3;
        company.otherProducts1 = req.body.otherProducts1;
        company.otherProducts2 = req.body.otherProducts2;
        company.otherProducts3 = req.body.otherProducts3;
        company.yearCompanyRegistered = req.body.yearCompanyRegistered;
        company.numOfEmployees = req.body.numOfEmployees;
        company.websiteURL = req.body.websiteURL;
        company.legalOwner = req.body.legalOwner;
        company.companyIntroduction = req.body.companyIntroduction;
        company.certificates = req.body.certificates;  
        company.companyLogo = req.body.companyLogo;  
        company.supplierID = req.body.supplierID;
        
       await companyInfoRepository.save(company);
        res.status(200).json({
            status: 'Success',
            message: "COMPANY CREATED SUCESSFULLY!"
        });
    }
    catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
   
}

export const getCompanyInformation = async (req, res) => {
    try {
        const id = req.params.id;
       
        const companyInformation = await companyInfoRepository.findOneBy({ id: id });
    
        if (!companyInformation)
            return res.status(404).json({
                status: 'fail',
                message: 'Invalid ID'
            })
        for (let x = 0; x < companyInformation.certificates.length; x++) {
          
            companyInformation.certificates[x] = `http://localhost:${process.env.NODE_PORT}/certificates/${companyInformation.certificates[x]}`
           
        }  
        for (let x = 0; x < companyInformation.companyLogo.length; x++) {
          
            companyInformation.companyLogo[x] = `http://localhost:${process.env.NODE_PORT}/company_logo/${companyInformation.companyLogo[x]}`
           
        }  
    
        res.status(200).json({
            status: 'SUCESS!',
            companyInformation
        });
    }
    catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }

};

export const updateCompanyInformation = async (req, res) => {
    
    try {
        const id = req.params.id;

        const companyInformation = await companyInfoRepository.findOneBy({ id: id })
        
        if (!companyInformation)
            return res.status(404).json({
                status: 'fail',
                message: 'Invalid ID'
            })      
        
        companyInformation.region = req.body.region != '' ? req.body.region : companyInformation.region;
        companyInformation.city = req.body.city != '' ? req.body.city : companyInformation.city;
        companyInformation.mainCategory = req.body.mainCategory != '' ? req.body.mainCategory : companyInformation.mainCategory;
        companyInformation.mainProducts1 = req.body.mainProducts1 != '' ? req.body.mainProducts1 : companyInformation.mainProducts1;
        companyInformation.mainProducts2 = req.body.mainProducts2 != '' ? req.body.mainProducts2 : companyInformation.mainProducts2;
        companyInformation.mainProducts3 = req.body.mainProducts3 != '' ? req.body.mainProducts3 : companyInformation.mainProducts3;
        companyInformation.otherProducts1 = req.body.otherProducts1 != '' ? req.body.otherProducts1 : companyInformation.otherProducts1;
        companyInformation.otherProducts2 = req.body.otherProducts2 != '' ? req.body.otherProducts2 : companyInformation.otherProducts2;
        companyInformation.otherProducts3 = req.body.otherProducts3 != '' ? req.body.otherProducts3 : companyInformation.otherProducts3;
        companyInformation.numOfEmployees = req.body.numOfEmployees != '' ? req.body.numOfEmployees : companyInformation.numOfEmployees;
        companyInformation.websiteURL = req.body.websiteURL != '' ? req.body.websiteURL : companyInformation.websiteURL;
        companyInformation.certificates = req.body.certificates != '' ? req.body.certificates : companyInformation.certificates;
        companyInformation.companyLogo = req.body.companyLogo != '' ? req.body.companyLogo : companyInformation.companyLogo;
        companyInformation.supplierID = req.body.supplierID != '' ? req.body.supplierID : companyInformation.supplierID;    
        await companyInfoRepository.save(companyInformation)

        res.status(200).json({
            status: 'SUCCESS!',
            message: companyInformation
        });

    }
    catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
};

//Inserting products
export const addProducts = async (req:Request, res:Response) => {
    
    try {
                
      let products = new Products();
        
        products.title = req.body.title;
        products.productCategory = req.body.productCategory;
        products.productDescription = req.body.productDescription;       
        products.costPerItem = req.body.costPerItem;
        products.minimumOrder = req.body.minimumOrder;
        products.productImage1 = req.body.productImage1;
        products.productImage2 = req.body.productImage2;
        products.productImage3 = req.body.productImage3;
        products.productImage4 = req.body.productImage4;
        products.location = req.body.location;
        products.availability = req.body.availability;      
        products.companyID = req.body.companyID;
        products.secret_key = req.body.secret_key;
        products.supplierName = req.body.supplierName;
        products.supplierCredentials = req.body.supplierCredentials;
        products.supplier_ID = req.body.supplier_ID;

    
        await productsRepository.save(products)
        res.status(200).json({
            status: 'Success',
            message: "PRODUCTS CREATED SUCCESSFULLY!"
        });
    }
    catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
    
}


export const updateProducts = async (req, res) => {
    
    try {
        const id = req.params.id;

        const foundProduct = await productsRepository.findOneBy({ id : id})
        if (!foundProduct)
            return res.status(404).json({
                status: 'Fail',
                message: 'Invalid ID'
            })      
        
        foundProduct.title = req.body.title != '' ? req.body.title : foundProduct.title;
        foundProduct.productCategory = req.body.productCategory != '' ? req.body.productCategory : foundProduct.productCategory;
        foundProduct.productDescription = req.body.productDescription != '' ? req.body.productDescription : foundProduct.productDescription;
        foundProduct.costPerItem = req.body.costPerItem != '' ? req.body.costPerItem : foundProduct.costPerItem;
        foundProduct.minimumOrder = req.body.minimumOrder != '' ? req.body.minimumOrder : foundProduct.minimumOrder;
        foundProduct.productImage1 = req.body.productImage1 != '' ? req.body.productImage1 : foundProduct.productImage1;
        foundProduct.productImage2 = req.body.productImage2 != '' ? req.body.productImage2 : foundProduct.productImage2;
        foundProduct.productImage3 = req.body.productImage3 != '' ? req.body.productImage3 : foundProduct.productImage3;
        foundProduct.productImage4 = req.body.productImage4 != '' ? req.body.productImage4 : foundProduct.productImage4;
        foundProduct.location = req.body.location != '' ? req.body.location : foundProduct.location;
        foundProduct.companyID = req.body.companyID != '' ? req.body.companyID : foundProduct.companyID;
        foundProduct.secret_key = req.body.secret_key != '' ? req.body.secret_key : foundProduct.secret_key;
        foundProduct.supplierName = req.body.supplierName != '' ? req.body.supplierName : foundProduct.supplierName;
        foundProduct.supplierCredentials = req.body.supplierCredentials != '' ? req.body.supplierCredentials : foundProduct.supplierCredentials;
        foundProduct.supplier_ID = req.body.supplier_ID != '' ? req.body.supplier_ID : foundProduct.supplier_ID;  
        
        await productsRepository.save(foundProduct);

        res.status(200).json({
            status: 'SUCCESS!',
            data: foundProduct
        });

    }
    catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
};



export const removeProducts = async (req, res) => {
    
    try {
        const id = req.params.id;

        const foundProduct = await productsRepository.findOneBy({id:id})
        if (!foundProduct)
            return res.status(404).json({
                status: 'Fail',
                message: 'Invalid ID'
            })    
        await productsRepository.delete(id)     

        res.status(200).json({
            status: 'SUCCESS!',
             message: 'Product deleted successfully!',
        });

    }
    catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
};


export const getAllProducts = async (req, res) => {
    try {
        const foundProduct = await productsRepository.find();
    foundProduct.forEach(async element => {
        for (let x = 0; x < element.productImage1.length; x++){
          
            element.productImage1[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${element.productImage1[x]}`;
           
        }
        for (let x = 0; x < element.productImage2.length; x++){
          
            element.productImage2[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${element.productImage2[x]}`;
           
        }
        for (let x = 0; x < element.productImage3.length; x++){
          
            element.productImage3[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${element.productImage3[x]}`;
           
        }
        for (let x = 0; x < element.productImage4.length; x++){
          
            element.productImage4[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${element.productImage4[x]}`;
           
        }
    })  
    //u[0].certificates[0] = await getFullLocation(u[0].certificates[0])
    res.status(200).json({
        status: 'SUCESS!',        
        foundProduct
    });
    }catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
};
export const getProducts = async (req, res) => {
    try {
         const id = req.params.id;    
        
        const foundProduct = await productsRepository.findOneBy({ id: id });
         if (!foundProduct)
            return res.status(404).json({
                status: 'fail',
                message: 'Invalid ID'
            })
    
       for (let x = 0; x < foundProduct.productImage1.length; x++){
          
            foundProduct.productImage1[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${foundProduct.productImage1[x]}`;
           
        }
        for (let x = 0; x < foundProduct.productImage2.length; x++){
          
            foundProduct.productImage2[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${foundProduct.productImage2[x]}`;
           
        }
        for (let x = 0; x < foundProduct.productImage3.length; x++){
          
            foundProduct.productImage3[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${foundProduct.productImage3[x]}`;
           
        }
        for (let x = 0; x < foundProduct.productImage4.length; x++){
          
            foundProduct.productImage4[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${foundProduct.productImage4[x]}`;
           
        }      
         
    //u[0].certificates[0] = await getFullLocation(u[0].certificates[0])
    res.status(200).json({
        status: 'SUCESS!',        
        foundProduct
    });
    }catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
};

export const getProductsInfo = async (req, res) => {
    try {
         const id = req.params.id;    
        //console.log(id)
        const foundProduct = await productsRepository.find({
        where: {            
          supplier_ID: id   
        }
    })  
        console.log(foundProduct)
         if (foundProduct === null)
            return res.status(202).json({
                status: 'Success',
                message: 'product not found'
            })   
    
    //    for (let x = 0; x < foundProduct.productImage1.length; x++){
          
    //         foundProduct.productImage1[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${foundProduct.productImage1[x]}`;
           
    //     }
    //     for (let x = 0; x < foundProduct.productImage2.length; x++){
          
    //         foundProduct.productImage2[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${foundProduct.productImage2[x]}`;
           
    //     }
    //     for (let x = 0; x < foundProduct.productImage3.length; x++){
          
    //         foundProduct.productImage3[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${foundProduct.productImage3[x]}`;
           
    //     }
    //     for (let x = 0; x < foundProduct.productImage4.length; x++){
          
    //         foundProduct.productImage4[x] = `http://localhost:${process.env.NODE_PORT}/product_images/${foundProduct.productImage4[x]}`;
           
    //     }      
         
    //u[0].certificates[0] = await getFullLocation(u[0].certificates[0])
    res.status(200).json({
        status: 'SUCESS!',        
        foundProduct
    });
    }catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
};
export const getCountProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const foundProduct1 = await productsRepository.findAndCount({
            where: {
                supplier_ID: id,
                productCategory: 'Manufacturing & Processing Machinery'
            }
        })
        const foundProduct2 = await productsRepository.findAndCount({
            where: {
                supplier_ID: id,
                productCategory: 'Industrial Equipment & Components'
            }
        })
        const foundProduct3 = await productsRepository.findAndCount({
            where: {
                supplier_ID: id,
                productCategory: 'Construction & Decoration'
            }
        })
        const foundProduct4 = await productsRepository.findAndCount({
            where: {
                supplier_ID: id,
                productCategory: 'Agriculture & food beavrages'
            }
        })
         const foundProduct5 = await productsRepository.findAndCount({
            where: {
                supplier_ID: id,
                productCategory: 'Chemicals & minerals'
            }
         })
         const foundProduct6 = await productsRepository.findAndCount({
            where: {
                supplier_ID: id,
                productCategory: 'Electrical & Electronics'
            }
        })
        console.log(foundProduct1)

        res.status(200).json({
            "status": 'success',
            foundProduct1,
            foundProduct2,
            foundProduct3,
            foundProduct4,
            foundProduct5,
            foundProduct6,    
            
        })
    }
    catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
}


export const getFeedbacks = async (req, res) => {
    try {
        const id = req.params.id; 
        console.log(id)
        const foundSupplier = await supplierRepository.findOne({
            relations: {
                feedbacks: {
                    product:true
                }
            },
            where: {
                id:id
            },
            select: {    
                feedbacks: {
                    id: true,
                    feedBackType: true,
                    providedFeedback: true,
                    product: {
                        id: true,
                        title:true
                    }
                }
            }
        })
           
        console.log(foundSupplier) 
        if (!foundSupplier)
            return res.status(404).json({
                status: 'fail',
                message: 'Invalid ID'
            })    
        
    res.status(200).json({
        status: 'SUCESS!',        
        foundSupplier
    });
    }catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
};
export const feedbackCount = async (req, res) => {
     try {
        const id = req.params.id;      
           
        const foundFeedback1 = await feedbackRepository.findAndCount({
             where: {
                 supplier: { id: id },
                 feedBackType: feedBackType.Compliment
            }
        })
        const foundFeedback2 = await feedbackRepository.findAndCount({
             where: {
                 supplier: { id: id },
                 feedBackType: feedBackType.SomethingIsNotRight
            }
        })
        const foundFeedback3 = await feedbackRepository.findAndCount({
             where: {
                 supplier: { id: id },
                 feedBackType: feedBackType.Suggestion
            }
        })            
        
    res.status(200).json({
        status: 'SUCESS!',        
        foundFeedback1,
        foundFeedback2,
        foundFeedback3
    });
    }catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
}
export const feedbackCountAll = async (req, res) => {
     try {
        const id = req.params.id;      
           
        const foundFeedback = await feedbackRepository.findAndCount({
             where: {
                 supplier: { id: id },
         }
        })
                   
        
    res.status(200).json({
        status: 'SUCESS!',        
        foundFeedback,
        
    });
    }catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
}
export const productCount = async (req, res) => {
     try {
        const id = req.params.id;      
           
        const foundProductCount = await productsRepository.findAndCount({
             where: {
                supplier_ID: id,              
            }
        })        
        
    res.status(200).json({
        status: 'SUCESS!', 
        foundProductCount        
  
    });
    }catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
}
export const findProductSuppliers = async (req, res) => {
     try {
        const id = req.params.id;      
           
        const foundProductSuppliers = await productsRepository.find({
             where: {
                supplier_ID: id
                 
            }
        })       
         
    res.status(200).json({
        status: 'SUCESS!', 
        foundProductSuppliers        
  
    });
    }catch (err) {
        res.status(500).json({
            "message": err.message
        })
    }
}









 
              