import axios from 'axios'
import React, { useContext } from 'react'
import ProductContext from '../../Admin/ProductContext'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

const Categories = () => {
  const { setMyProducts } = useContext(ProductContext)

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
  const data = [
    {
      cateImg: './images/category/manufacture.png',
      cateName: 'Manufacturing & processing Machinery',
    },
    {
      cateImg: './images/category/factory.png',
      cateName: 'Industrial Equipment & Components',
    },
    {
      cateImg: './images/category/hook.png',
      cateName: 'Construction & Decoration',
    },
    {
      cateImg: './images/category/agriculture.png',
      cateName: 'Agriculture & food beavrages',
    },
    {
      cateImg: './images/category/test.png',
      cateName: 'Chemicals & minerals',
    },
    {
      cateImg: './images/category/electronics.png',
      cateName: 'Electrical & Electronics',
    },
  ]

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div
              className="box f_flex"
              key={index}
              onClick={() => {
                searchProductsByCategory(value.cateName)
              }}
            >
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
