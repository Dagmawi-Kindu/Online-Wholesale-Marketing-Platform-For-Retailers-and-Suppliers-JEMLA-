/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Companyinfo.css'
import CompanyDesc from './CompanyDesc'
import Discount from '../discount/Discount'
import ProductContext from '../../Admin/ProductContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
//import { Link, useParams } from 'react-router-dom'

const Companyinfo = () => {
  const { items } = useContext(ProductContext)

  //const a = 'ccfd28fe-2246-44eb-8d11-33bd12e38586'
  const url = `http://localhost:7000/getProducts/${items}`
  const [products, setProduct] = useState([])
  console.log(products)
  useEffect(() => {
    getProductData()
  }, [])
  const getProductData = async () => {
    try {
      const data = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      // var x = await Object.values(data.data.foundProduct)
      setProduct(data.data.foundProduct)
      // console.log(products[1].id)
    } catch (e) {
      //console.log(data.data)
      console.log(e)
    }
  }

  return (
    <div className="company-main">
      {
        <div>
          <div className="layout-detail">
            <h2>Product Description</h2>
            <div className="detail-content">
              <div className="layout-left">
                <div className="company-img">
                  <img className="img-list" src={`${products.productImage1}`} />
                </div>
                <div className="co-MainInfo">
                  <h2 className="co-Title">{products.title}</h2>
                  <div className="co-price">
                    <div class="title-div">
                      Reference FOB Price / Purchase Qty.
                    </div>
                    <div className="co-price-container">
                      <div className="co-price-sw">
                        <div className="co-price-swiper">
                          <div class="co-price-container-swiper">
                            {products.costPerItem} Birr
                          </div>
                          <div class="swiper-unit-container">
                            {products.minimumOrder}
                            <span class="unit">Pieces</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mini-disc">
                    <table className="table-desc">
                      <tbody className="tbody-desc">
                        <tr>
                          <th className="th-desc">Supplier Name:</th>
                          <td className="td-desc">{products.supplierName}</td>
                        </tr>
                        <tr>
                          <th className="th-desc">Product Category:</th>
                          <td className="td-desc">
                            {products.productCategory}
                          </td>
                        </tr>
                        <tr>
                          <th className="th-desc">Product Description:</th>
                          <td className="td-desc">
                            {products.productDescription}
                          </td>
                        </tr>
                        <tr>
                          <th className="th-desc">Location:</th>
                          <td className="td-desc">{products.location}</td>
                        </tr>
                        <tr>
                          <th className="th-desc">Availability:</th>
                          <td className="td-desc">{products.availability}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Link to="/payment">
                    <button class="btn-company">Buy Now</button>
                  </Link>
                </div>
              </div>
              <div className="contact-supplier">
                <div class="sr-txt-title">
                  <h2 class="sr-txt-h2">Contact Supplier</h2>
                  <div class="sr-side-contSupplier-info">
                    <div class="sr-side-contSupplier-pic">
                      <a href="javascript:void(0);">
                        <img
                          class="J-contact-img"
                          src="//www.micstatic.com/athena/img/avatar-male.jpg"
                          alt="Avatar"
                        />
                      </a>
                    </div>
                    <div class="sr-side-contSupplier-txt">
                      <div class="sr-side-contSupplier-name">
                        {products.supplierName}
                      </div>
                      <div class="sr-side-contSupplier-position">Manager</div>
                    </div>
                    <div
                      class="button-block"
                      onClick={() => {
                        window.open(
                          `https://t.me/${products.supplierCredentials}`,
                        )
                        // window.open(
                        //   `https://wa.me/${products.supplierCredentials}`,
                        // )
                      }}
                    >
                      <a
                        fun-inquiry-product=""
                        class="btns button-link-contact"
                        target="_blank"
                        rel="nofollow"
                        ads-data="st:5,pdid:NXPnelSGZvVf,pcid:BbvQPdpAaJUi"
                      >
                        <i class="ob-icon icon-mail"></i>Contact Now
                      </a>
                    </div>
                    <div
                      class="info-item info-businessType"
                      title="Manufacturer/Factory &amp; Trading Company"
                    >
                      {products.productCategory}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards-imgs">
              <div class="container-imgbox">
                <div class="card">
                  <div class="imgBx">
                    <img src={`${products.productImage2}`} />
                  </div>
                  <div class="contentBx">
                    <h2>Product 1</h2>
                  </div>
                </div>
              </div>
              <div class="container-imgbox">
                <div class="card">
                  <div class="imgBx">
                    <img src={`${products.productImage3}`} />
                  </div>
                  <div class="contentBx">
                    <h2>Product 2</h2>
                  </div>
                </div>
              </div>
              <div class="container-imgbox">
                <div class="card">
                  <div class="imgBx">
                    <img src={`${products.productImage4}`} />
                  </div>
                  <div class="contentBx">
                    <h2>Product 3</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CompanyDesc companyID={products.companyID} />
          <Discount />
        </div>
      }
    </div>
  )
}

export default Companyinfo
