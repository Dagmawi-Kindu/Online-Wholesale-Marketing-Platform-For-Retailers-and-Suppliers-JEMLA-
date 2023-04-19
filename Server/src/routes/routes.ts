import { AppDataSource } from '../data-source';
import { Auth } from '../entity/autentication/auth.entity';
import express from 'express';

import {
  verifyToken,
  verifyRetailer,
  verifySupplier,
  verifyAdmin,
} from '../middlewares/tokenValidation.middleware';
import * as admin from '../controllers/adminController';
import {
  addCompanyInformation,
  addProducts,
  checkCompany,
  feedbackCount,
  feedbackCountAll,
  findProductSuppliers,
  getAllProducts,
  getCompanyInformation,
  getCountProducts,
  getFeedbacks,
  getProducts,
  getProductsInfo,
  productCount,
  removeProducts,
  resizePhoto1,
  resizePhoto2,
  updateCompanyInformation,
  updateProducts,
  uploadUserPhoto,
} from '../controllers/supplierController';
import {
  issueFeedback,
  makePayment,
  searchProducts,
  searchProductsByCategory,
} from '../controllers/retailerContoller';
const router = express.Router();

//ADMIN
router.get('/getRetailers', verifyToken, verifyAdmin, admin.getRetailer);
router.get('/getSuppliers', verifyToken, verifyAdmin, admin.getSupplier);
router.get(
  '/getApprovedSupplier',
  verifyToken,
  verifyAdmin,
  admin.getApprovedSupplier
);
router.get(
  '/getDeclinedSupplier',
  verifyToken,
  verifyAdmin,
  admin.getDeclinedSupplier
);
router.get(
  '/getDisabledSupplier',
  verifyToken,
  verifyAdmin,
  admin.getDisabledSupplier
);
router.get(
  '/getEnabledSupplier',
  verifyToken,
  verifyAdmin,
  admin.getEnabledSupplier
);
router.get(
  '/getPendingSupplier',
  verifyToken,
  verifyAdmin,
  admin.getPendingSupplier
);
router.get(
  '/getApprovedRetailer',
  verifyToken,
  verifyAdmin,
  admin.getApprovedRetailer
);
router.get(
  '/getDeclinedRetailer',
  verifyToken,
  verifyAdmin,
  admin.getDeclinedRetailer
);
router.get(
  '/getDisabledRetailer',
  verifyToken,
  verifyAdmin,
  admin.getDisabledRetailer
);
router.get(
  '/getEnabledRetailer',
  verifyToken,
  verifyAdmin,
  admin.getEnabledRetailer
);
router.get(
  '/getPendingRetailer',
  verifyToken,
  verifyAdmin,
  admin.getPendingRetailer
);
router.put('/approveUser/:id', verifyToken, verifyAdmin, admin.approveUser);
router.put('/declineUser/:id', verifyToken, verifyAdmin, admin.declineUser);
router.put('/pendingUser/:id', verifyToken, verifyAdmin, admin.pendingUser);
router.put(
  '/enableUserAccount/:id',
  verifyToken,
  verifyAdmin,
  admin.enableUserAccount
);
router.put(
  '/disableUserAccount/:id',
  verifyToken,
  verifyAdmin,
  admin.disableUserAccount
);
router.delete(
  '/removeDeclinedUsers',
  verifyToken,
  verifyAdmin,
  admin.removeDeclinedUsers
);
router.delete('/removeUsers/:id', verifyToken, verifyAdmin, admin.removeUsers);
router.get(
  '/getAllCompanyInformation',
  verifyToken,
  verifyAdmin,
  admin.getAllCompanyInformation
);
router.get('/getCountRetailer', admin.getCountRetailer);
router.get('/getCountSupplier', admin.getCountSupplier);
router.get('/getCountRetailerStats', admin.getCountRetailerStats);
router.get('/getCountSupplierStats', admin.getCountSupplierStats);
router.put(
  '/updateUserProfileInformations/:id',
  admin.updateUserProfileInformations
);
router.put(
  '/updateUserProfilePicture/:id',
  admin.uploadUserPhoto11,
  admin.resizeUserPhoto22,
  admin.updateUserProfilePicture
);
router.get('/checkIfUserExists/:f/:m/:l/:p', admin.checkIfUserExists);
router.put('/removeUserAccount/:id', admin.removeUserAccount);

//SUPPLIER
router.post(
  '/addCompanyInformation',
  verifyToken,
  verifySupplier,
  uploadUserPhoto,
  resizePhoto1,
  addCompanyInformation
);
// router.put('/updateCompanyInformation/:id', verifyToken, verifySupplier, uploadUserPhoto, resizePhoto1, updateCompanyInformation);
router.put(
  '/updateCompanyInformation/:id',
  verifyToken,
  verifySupplier,
  updateCompanyInformation
);
router.post(
  '/addProducts',
  verifyToken,
  verifySupplier,
  uploadUserPhoto,
  resizePhoto2,
  addProducts
);
// router.put('/updateProducts/:id', verifyToken, verifySupplier, updateProducts);
router.put('/updateProducts/:id', verifyToken, verifySupplier, updateProducts);
// router.put('/updateProducts/:id', verifyToken, verifySupplier, uploadUserPhoto, resizePhoto2, updateProducts);
router.delete('/removeProducts/:id', removeProducts);
router.get('/getProductsInfo/:id', getProductsInfo);
router.get('/checkCompany/:id', checkCompany);
router.get('/getFeedbacks/:id', getFeedbacks);
router.get('/getCountProducts/:id', getCountProducts);
router.get('/feedbackCount/:id', feedbackCount);
router.get('/feedbackCountAll/:id', feedbackCountAll);
router.get('/productCount/:id', productCount);
router.get('/findProductSuppliers/:id', findProductSuppliers);

//RETAILER
router.get(
  '/getCompanyInformation/:id',
  verifyToken,
  verifyRetailer,
  getCompanyInformation
);
router.get('/getAllProducts', getAllProducts);
router.get('/getProducts/:id', getProducts);
router.post('/makePayment/:id', makePayment);
router.post('/issueFeedback/:id/:sid', issueFeedback);
router.get('/searchProducts/:name', searchProducts);
router.get('/searchProductsByCategory/:name', searchProductsByCategory);

export { router as userRouter };
