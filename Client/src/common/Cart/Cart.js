import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import ProductContext from '../../Admin/ProductContext'

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const [tempOrder, setTempOrder] = useState(Number)
  //const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const { items } = useContext(ProductContext)
  useEffect(() => {
    setTempOrder(parseInt(CartItem.minimumOrder))
  }, [CartItem.minimumOrder])
  const addQnty = () => {
    var add = tempOrder

    add = add + 1
    setTempOrder(add)
  }
  const decQnty = () => {
    var sub = tempOrder
    var check = parseInt(CartItem.minimumOrder)
    if (tempOrder === check) {
      console.log('Reached the min limit')
    } else {
      sub = sub - 1
    }
    setTempOrder(sub)
  }

  console.log('AJFSIU', tempOrder)
  let totalPrice = CartItem.costPerItem * tempOrder

  //totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  // prodcut qty total
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {CartItem.length === 0 ? (
              <div>
                <h1 className="no-items product">No Items are add in Cart</h1>
                {console.log((totalPrice = 0))}
              </div>
            ) : (
              <div className="cart-list product d_flex" key={CartItem.id}>
                <div className="img">
                  <img src={CartItem.productImage1[0]} alt="" />
                </div>
                <div className="cart-details">
                  <h3>
                    {CartItem.title}
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{' '}
                    {CartItem.productCategory}
                  </h3>
                  <h3>{CartItem.location}</h3>
                  <h4>
                    Birr {CartItem.costPerItem}.00 * {tempOrder} =
                    <span>Birr {totalPrice.toLocaleString('en-US')}.00</span>
                  </h4>
                </div>
                <div className="cart-items-function">
                  <div className="removeCart">
                    <button className="removeCart">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <div className="cartControl d_flex">
                    <button className="incCart" onClick={addQnty}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <button className="desCart" onClick={decQnty}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>

                <div className="cart-item-price"></div>
              </div>
            )}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>Birr {totalPrice.toLocaleString('en-US')}.00</h3>
            </div>
          </div>
        </div>
        <Link to="/payment">
          <button class="btn-cart">Buy Now</button>
        </Link>
      </section>
    </>
  )
}

export default Cart
