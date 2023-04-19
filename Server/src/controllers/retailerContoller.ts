import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';

import Chapa from './payment/chapa.js';
import { Approval, Auth, Role } from '../entity/autentication/auth.entity';
import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../data-source';
import { Products } from '../entity/Products';
import { Feedback } from '../entity/feedback';
import { Like } from 'typeorm';
const productsRepository = AppDataSource.getRepository(Products);
const feedbackRepository = AppDataSource.getRepository(Feedback);
const authRepository = AppDataSource.getRepository(Auth);

//Making payment
export const makePayment = async (req, res) => {
  try {
    const id = req.params.id;

    const foundProduct = await productsRepository.findOneBy({ id: id });
    if (!foundProduct)
      return res.status(404).json({
        status: 'Fail',
        message: 'Invalid ID',
      });

    if (foundProduct.secret_key == null) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Key not found!',
      });
    }

    let myChapa = new Chapa(foundProduct.secret_key);

    const customerInfo = {
      amount: req.body.amount,
      currency: req.body.currency,
      email: 'abc@email.com',
      first_name: 'ff',
      last_name: 'ff',
      // tx_ref: 'tx-x12345',
      callback_url: 'https://chapa.co', // your callback URL
      subaccounts: [
        {
          id: '80a510ea-7497-4499-8b49-ac13a3ab7d07',
        },
      ],
    };

    myChapa
      .initialize(customerInfo, { autoRef: true })
      .then((response) => {
        /*
              response:
                  {
                  message: 'Hosted Link',
                  status: 'success' || 'failed',
                  data: {
                      checkout_url: 'https://checkout.chapa.co/checkout/payment/:token'
                  },
                  tx_ref: 'generated-token' // this will be the auto generated reference
                  }
              */
        //console.log(response)
        // saveReference(response.tx_ref)
        res.status(200).json(response);
      })
      .catch((e) => console.log(e)); // catch errors
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//issue feedback
export const issueFeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const sid = req.params.sid;
    const foundProduct = await productsRepository.findOneBy({ id: id });

    if (!foundProduct)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });

    const foundSupplier = await authRepository.findOneBy({ id: sid });
    if (!foundSupplier)
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
    let feedback = new Feedback();
    if (req.body.providedFeedback && req.body.feedBackType === '') {
      return res.status(404).json({
        status: 'Error',
        message: 'No data',
      });
    }
    feedback.providedFeedback = req.body.providedFeedback;
    feedback.feedBackType = req.body.feedBackType;
    feedback.product = foundProduct;
    feedback.supplier = foundSupplier;

    await feedbackRepository.save(feedback);
    console.log(foundProduct);
    console.log(foundSupplier);
    res.status(200).json({
      status: 'Success',
      message: 'Thank you for the feedback!',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const searchProducts = async (req, res) => {
  try {
    const name = req.params.name;

    const foundProduct = await productsRepository.find({
      where: {
        title: Like(`%${name}%`),
      },
    });

    if (!foundProduct)
      return res.status(404).json({
        status: 'Fail',
        message: 'Invalid ID',
      });
    if (foundProduct.length === 0) {
      return res.status(202).json({
        status: 'success',
        message: 'No such product!',
      });
    }

    foundProduct.forEach(async (element) => {
      for (let x = 0; x < element.productImage1.length; x++) {
        element.productImage1[
          x
        ] = `http://localhost:${process.env.NODE_PORT}/product_images/${element.productImage1[x]}`;
      }
    });
    res.status(200).json({
      status: 'SUCCESS!',
      message: 'Product found successfully!',
      foundProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const searchProductsByCategory = async (req, res) => {
  try {
    const name = req.params.name;

    const foundProduct = await productsRepository.find({
      where: {
        productCategory: Like(`%${name}%`),
      },
    });

    if (!foundProduct)
      return res.status(404).json({
        status: 'Fail',
        message: 'Invalid ID',
      });
    if (foundProduct.length === 0) {
      return res.status(202).json({
        status: 'success',
        message: 'No such product!',
      });
    }

    foundProduct.forEach(async (element) => {
      for (let x = 0; x < element.productImage1.length; x++) {
        element.productImage1[
          x
        ] = `http://localhost:${process.env.NODE_PORT}/product_images/${element.productImage1[x]}`;
      }
    });
    res.status(200).json({
      status: 'SUCCESS!',
      message: 'Product found successfully!',
      foundProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
