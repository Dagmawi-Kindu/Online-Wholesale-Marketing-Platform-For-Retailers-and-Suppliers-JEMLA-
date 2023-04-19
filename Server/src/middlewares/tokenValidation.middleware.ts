import { userInfo } from "os";
import {Request, Response, NextFunction} from 'express'

const jwt = require('jsonwebtoken')
export const verifyToken = (req: Request, res:Response, next:NextFunction)=> {
    //console.log(req.headers.authorization)
    const token = req.headers.authorization.split(" ")[1]
    
    if (!token) {
        return res.status(412).json({
            "message":"Token is not found"
        })
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err)  
        return res.status(412).json({
            "message":"Invalid token"
        })

        req.body.user = user;
        
        next();
    });
};

export const verifyRetailer = (req: Request, res:Response, next:NextFunction) => {
    if (req.body.user.role !== "retailer")
       return res.status(404).json({
        message:"You aren't authorized to use the functionality"
       })
    next();
};
export const verifySupplier = (req: Request, res:Response, next:NextFunction) => {
    if (req.body.user.role !== "supplier")
       return res.status(404).json({
        message:"You aren't authorized to use the functionality"
       })
    next();
};
export const verifyAdmin = async (req: Request, res:Response, next:NextFunction) => {
    if (req.body.user.role !== "admin")
        return res.status(404).json({
            message: "You aren't authorized to use the functionality"
        })
    next();
};

