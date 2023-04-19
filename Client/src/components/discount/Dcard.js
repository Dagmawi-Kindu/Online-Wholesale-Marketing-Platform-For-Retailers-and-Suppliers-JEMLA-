import React, { useContext } from 'react'
import ProductContext from '../../Admin/ProductContext'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//import Ddata from './Ddata'
// import "../newarrivals/style.css"

const Dcard = () => {
  const { allProducts } = useContext(ProductContext)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  console.log('ETHIOPIAAA', allProducts)
  return (
    <>
      <Slider {...settings}>
        {allProducts.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={value.productImage1[0]} alt="" width="100%" />
                </div>
                <h4>{value.title}</h4>
                <span>{value.costPerItem} Birr Per Item</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
