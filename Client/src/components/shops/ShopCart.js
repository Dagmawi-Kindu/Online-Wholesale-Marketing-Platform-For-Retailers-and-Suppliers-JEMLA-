import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import ProductContext from '../../Admin/ProductContext';
import { useHistory } from 'react-router-dom';

const ShopCart = ({ addToCart }) => {
  const [cartID, setCartID] = useState('');
  const { addToProdDescription } = useContext(ProductContext);
  const { allProducts } = useContext(ProductContext);

  return (
    <>
      {allProducts.map((e, index) => {
        return (
          <div
            className='box'
            onClick={() => {
              addToProdDescription(e.id);
              setCartID(e.id);
            }}>
            <div className='product mtop'>
              <div className='img'>
                {/* <span className="discount">{e.discount}% Off</span> */}
                <img src={e.productImage1[0]} alt='' />
                {/* <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div> */}
              </div>
              <div className='product-details'>
                <h3>{e.title}</h3>

                <div className='price'>
                  <h4>Birr {e.costPerItem}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(e.id)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
