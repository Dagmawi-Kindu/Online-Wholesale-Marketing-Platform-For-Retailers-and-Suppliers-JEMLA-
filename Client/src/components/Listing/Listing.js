/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopCate from '../top/TopCate';
import ProductContext from '../../Admin/ProductContext';
import Categories from '../MainPage/Categories';
import { Link, useHistory, generatePath } from 'react-router-dom';

import './Listing.css';

import { useContext } from 'react';

const Listing = () => {
  const { addToProdDescription } = useContext(ProductContext);
  const { myProducts } = useContext(ProductContext);
  //console.log(myProducts)

  // console.log('TTHHEESSEE PRRROODDUCCCTTSS', myProducts);
  return (
    <div>
      <h1>Categories</h1>
      <div className='listing-page'>
        <Categories />
        <div className='fetch-db'>
          <h1>Product List</h1>
          {myProducts.map((item, i) => {
            return (
              <Link
                to={{
                  pathname: '/Companyinfo',
                }}>
                <span
                  onClick={() => {
                    addToProdDescription(item.id);
                  }}>
                  <div className='listing-1'>
                    <div className='listing-2'>
                      <h1>
                        <img
                          className='img-list'
                          src={`${item.productImage1[0]}`}
                        />
                        <br />
                        <div className='listing-list'>
                          <div className='listing-list-desc'>
                            <h2 className='listing-title'>{item.title}</h2>
                            <div
                              class='featured-pro'
                              title='Recommended product from this supplier.'>
                              Featured Product
                            </div>
                            <strong>CIF Price:</strong> {item.costPerItem}{' '}
                            <span>Birr/ Piece</span>
                            <br />
                            <strong>Min. Order:</strong> {item.minimumOrder}{' '}
                            <span>Pieces</span>
                            <br />
                            <div
                              class='featured-memb'
                              title='Recommended product from this supplier.'>
                              Member
                            </div>
                            <strong>supplierName:</strong> {item.supplierName}
                          </div>
                          <div className='listing-right'>
                            <div className='listing-rtop'>
                              <strong>Category:</strong>{' '}
                              <h3>{item.productCategory}</h3>
                            </div>
                            <br />
                            <div className='listing-rmiddle'>
                              <strong>location:</strong>{' '}
                              <h3>{item.location}</h3>
                            </div>
                            <div className='listing-rbottom'>
                              <strong>Availability:</strong>{' '}
                              <h3>{item.availability}</h3>
                            </div>
                          </div>
                        </div>
                      </h1>
                    </div>
                  </div>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* <TopCate /> */}
    </div>
  );
};
export default Listing;
