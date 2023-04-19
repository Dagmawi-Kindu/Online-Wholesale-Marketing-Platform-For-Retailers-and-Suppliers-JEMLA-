import React, { useContext, useState, useEffect } from 'react'
import Sdata from './Sdata'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
// import AuthenticationContext from '../../Admin/AuthenticationContext'
import ProductContext from '../../Admin/ProductContext'

const SlideCard = () => {
  const { setMyProducts } = useContext(ProductContext)
  let history = useHistory()
  const getAllProducts = async () => {
    try {
      const data = await axios.get('http://localhost:7000/getAllProducts')
      console.log(data)
      if (data.status === 200) {
        setMyProducts(data.data.foundProduct)
        history.push('/Listing')
      } else {
        alert('NO PRODUCTS!')
      }
    } catch (e) {
      console.log(e)
    }
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: '0px' }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className="box d_flex top" key={index}>
                <div className="left">
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>

                  <button
                    className="btn-primary"
                    onClick={() => {
                      getAllProducts()
                    }}
                  >
                    View More
                  </button>
                </div>
                <div className="right">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
