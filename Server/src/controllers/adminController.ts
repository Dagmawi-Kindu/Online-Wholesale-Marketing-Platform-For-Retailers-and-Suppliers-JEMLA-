import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import {
  accountStatus,
  Approval,
  Auth,
  Role,
} from '../entity/autentication/auth.entity';
import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../data-source';
import multer from 'multer';
import sharp from 'sharp';
import { Company } from '../entity/CompanyInformation';
const authRepository = AppDataSource.getRepository(Auth);
const companyInfoRepository = AppDataSource.getRepository(Company);

export const approveUser = async (req, res) => {
  try {
    const id = req.params.id;

    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'Fail',
        message: 'Invalid ID',
      });

    foundUser.approval = Approval.Approved;

    await authRepository.save(foundUser);

    res.status(200).json({
      status: 'Success',
      message: 'Approval Successful!',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const pendingUser = async (req, res) => {
  try {
    const id = req.params.id;

    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });

    foundUser.approval = Approval.Pending;
    await authRepository.save(foundUser);

    res.status(200).json({
      status: 'Success',
      message: 'Account is being reviewed!',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const declineUser = async (req, res) => {
  try {
    const id = req.params.id;

    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });

    foundUser.approval = Approval.Declined;
    await authRepository.save(foundUser);

    res.status(200).json({
      status: 'Success',
      message: 'Account Declined!',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const removeDeclinedUsers = async (req, res) => {
  try {
    const foundUser = await authRepository.find({
      where: {
        approval: Approval.Declined,
      },
    });
    if (!foundUser)
      return res.status(200).json({
        status: 'Success',
        message: 'There are no declined users.',
      });
    console.log(foundUser);
    const uid = [];
    for (var i: number = 0; i < foundUser.length; i++) {
      uid.push(foundUser[i].id);
      authRepository.delete({ id: uid[i] });
    }
    res.status(200).json({
      status: 'Success',
      message: 'Deletion Sucessful!',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const removeUsers = async (req, res) => {
  try {
    let id = req.params.id;
    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'Failed',
        message: 'User ID Invalid',
      });

    authRepository.delete({ id });
    res.status(200).json({
      status: 'Success',
      message: 'Deletion Sucessful!',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const enableUserAccount = async (req, res) => {
  try {
    const id = req.params.id;

    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });

    foundUser.accountStatus = accountStatus.Enabled;

    await authRepository.save(foundUser);

    res.status(200).json({
      status: 'Success',
      message: `${foundUser.firstName} ${foundUser.middleName} ${foundUser.lastName} account is enabled successfully!`,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const disableUserAccount = async (req, res) => {
  try {
    const id = req.params.id;

    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
    console.log(foundUser);
    foundUser.accountStatus = accountStatus.Disabled;

    await authRepository.save(foundUser);

    res.status(200).json({
      status: 'Success',
      message: `${foundUser.firstName} ${foundUser.middleName} ${foundUser.lastName} account is disabled.`,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getRetailer = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Retailer,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getSupplier = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Supplier,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getApprovedSupplier = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Supplier,
      approval: Approval.Approved,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};
export const getDeclinedSupplier = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Supplier,
      approval: Approval.Declined,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getPendingSupplier = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Supplier,
      approval: Approval.Pending,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getEnabledSupplier = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Supplier,
      accountStatus: accountStatus.Enabled,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getDisabledSupplier = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Supplier,
      accountStatus: accountStatus.Disabled,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};
///////////////////////////////////////////////////////////////////////////////
///RETAILER////////////
export const getApprovedRetailer = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Retailer,
      approval: Approval.Approved,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};
export const getDeclinedRetailer = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Retailer,
      approval: Approval.Declined,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getPendingRetailer = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Retailer,
      approval: Approval.Pending,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getEnabledRetailer = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Retailer,
      accountStatus: accountStatus.Enabled,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getDisabledRetailer = async (req: Request, res: Response) => {
  const user = await authRepository.find({
    where: {
      role: Role.Retailer,
      accountStatus: accountStatus.Disabled,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};

export const getAllCompanyInformation = async (req, res) => {
  try {
    const companyInformation = await companyInfoRepository.find();
    companyInformation.forEach(async (element) => {
      for (let x = 0; x < element.certificates.length; x++) {
        element.certificates[
          x
        ] = `http://localhost:${process.env.NODE_PORT}/certificates/${element.certificates[x]}`;
      }
    });
    //u[0].certificates[0] = await getFullLocation(u[0].certificates[0])
    res.status(200).json({
      status: 'SUCESS!',
      companyInformation,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getCountRetailer = async (req: Request, res: Response) => {
  const user = await authRepository.findAndCount({
    where: {
      role: Role.Retailer,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};
export const getCountSupplier = async (req: Request, res: Response) => {
  const user = await authRepository.findAndCount({
    where: {
      role: Role.Supplier,
    },
  });
  res.status(200).json({
    status: 'Success',
    user,
  });
};
export const getCountRetailerStats = async (req: Request, res: Response) => {
  const user1 = await authRepository.findAndCount({
    where: {
      role: Role.Retailer,
      approval: Approval.Approved,
    },
  });
  const user2 = await authRepository.findAndCount({
    where: {
      role: Role.Retailer,
      approval: Approval.Pending,
    },
  });
  const user3 = await authRepository.findAndCount({
    where: {
      role: Role.Retailer,
      approval: Approval.Declined,
    },
  });
  res.status(200).json({
    status: 'Success',
    user1,
    user2,
    user3,
  });
};

export const getCountSupplierStats = async (req: Request, res: Response) => {
  const user1 = await authRepository.findAndCount({
    where: {
      role: Role.Supplier,
      approval: Approval.Approved,
    },
  });
  const user2 = await authRepository.findAndCount({
    where: {
      role: Role.Supplier,
      approval: Approval.Pending,
    },
  });
  const user3 = await authRepository.findAndCount({
    where: {
      role: Role.Supplier,
      approval: Approval.Declined,
    },
  });
  res.status(200).json({
    status: 'Success',
    user1,
    user2,
    user3,
  });
};

export const updateUserProfileInformations = async (req, res) => {
  try {
    const id = req.params.id;

    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });

    foundUser.email = req.body.email != '' ? req.body.email : foundUser.email;
    foundUser.phoneNumber =
      req.body.phoneNumber != '' ? req.body.phoneNumber : foundUser.phoneNumber;

    await authRepository.save(foundUser);

    res.status(200).json({
      status: 'Success',
      message: 'Account Declined!',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb((res: Response) => {
      res.status(400).json({
        message: 'Not an image!',
      });
    }),
      false;
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
export const uploadUserPhoto11 = upload.fields([
  { name: 'profilePicture', maxCount: 1 },
]);

export const resizeUserPhoto22 = async (req, res, next) => {
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
export const updateUserProfilePicture = async (req, res) => {
  try {
    const id = req.params.id;

    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });

    foundUser.profilePicture = req.body.profilePicture;

    await authRepository.save(foundUser);

    res.status(200).json({
      status: 'Success',
      data: foundUser.profilePicture[0],
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const checkIfUserExists = async (req, res) => {
  let f = req.params.f;
  let m = req.params.m;
  let l = req.params.l;
  let p = req.params.p;
  const foundUser = await authRepository.find({
    where: {
      firstName: f,
      middleName: m,
      lastName: l,
      phoneNumber: p,
    },
  });
  console.log(foundUser);
  if (foundUser.length === 0)
    return res.status(202).json({
      status: 'Fail',
      message: 'User does not exist!',
    });
  else {
    res.status(200).json({
      message: 'User is already Registered!',
    });
  }
};
export const removeUserAccount = async (req, res) => {
  try {
    const id = req.params.id;

    const foundUser = await authRepository.findOneBy({ id: id });
    if (!foundUser)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });

    foundUser.accountStatus = accountStatus.Disabled;

    await authRepository.save(foundUser);

    res.status(200).json({
      status: 'Success',
      message: `${foundUser.firstName} ${foundUser.middleName} ${foundUser.lastName} account is disabled.`,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
