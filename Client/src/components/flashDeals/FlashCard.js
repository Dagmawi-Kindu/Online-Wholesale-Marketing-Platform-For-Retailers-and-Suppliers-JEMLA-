import React, { useState, useContext } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductContext from '../../Admin/ProductContext'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const { setMyProducts } = useContext(ProductContext)
  // const [count, setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1)
  // }
  let history = useHistory()
  const searchProductsByCategory = async (myValue) => {
    try {
      const data = await axios.get(
        `http://localhost:7000/searchProductsByCategory/${myValue}`,
      )
      console.log(data)
      if (data.status === 200) {
        setMyProducts(data.data.foundProduct)
        history.push('/Listing')
      } else {
        Swal.fire('Sorry!', 'No product added for this category yet!', 'error')
      }
    } catch (e) {
      console.log(e)
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div
              className="box"
              onClick={() => {
                searchProductsByCategory(productItems.name)
              }}
            >
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <br />
                  <br />
                  <div className="product-details">
                    <h3>{productItems.name}</h3>
                    <div className="rate"></div>
                  </div>
                  <img src={productItems.cover} alt="" />
                  <div className="product-like">
                    {/* <label>{count}</label> <br /> */}
                    {/* <i className="fa-regular fa-heart" onClick={increment}></i> */}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
