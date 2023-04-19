import express from 'express';
const authRouter = express.Router()
import {sign_in,sign_up,uploadUserPhoto,resizeUserPhoto} from "../controllers/auth.Controller"


authRouter.post("/signup", uploadUserPhoto, resizeUserPhoto, sign_up)
authRouter.post("/signin",sign_in)


export {
    authRouter
}