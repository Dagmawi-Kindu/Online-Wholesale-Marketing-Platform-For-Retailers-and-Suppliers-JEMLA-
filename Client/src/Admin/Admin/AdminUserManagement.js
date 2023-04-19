/* eslint-disable react-hooks/exhaustive-deps */
//import { Table } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './ListUser.css'
import './Sidebar.css'
import './style.css'
import { Link } from 'react-router-dom'
import AuthenticationContext from '../AuthenticationContext'
import retailerImage from './adminPanel/retailerr.jpg'
import suppliersImage from './adminPanel/supplierr.jpg'
import logiImage from './adminPanel/logi.jpg'
import './AdminUserManagement.css'

const AdminUserManagement = () => {
  const { setRetailers, setSuppliers } = useContext(AuthenticationContext)
  useEffect(() => {
    getRetailers()
    getSuppliers()
  }, [])

  const getRetailers = async () => {
    try {
      const data = await axios.get('http://localhost:7000/getRetailers', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      //console.log(data.data.user)
      setRetailers(data.data.user)
      // setUsers(retailers)
    } catch (e) {
      console.log(e)
    }
  }
  const getSuppliers = async () => {
    try {
      const data = await axios.get('http://localhost:7000/getSuppliers', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      // console.log('SUPPLIER', data.data.user)
      setSuppliers(data.data.user)
      //setUsers(suppliers)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div class="my-admin-homee-page-home-container">
        <div class="my-admin-homee-page-home-container01">
          <div class="my-admin-homee-page-home-container02">
            <div class="my-admin-homee-page-home-container03">
              <div class="my-admin-homee-page-home-container04">
                <img
                  src={logiImage}
                  alt=""
                  class="my-admin-homee-page-home-image"
                />
                <div class="my-admin-homee-page-home-container05">
                  <h1 class="my-admin-homee-page-home-text">Statistics</h1>
                  <Link to="/adminstats">
                    <h1
                      class="my-admin-homee-page-home-text1"
                      // onClick={getRetailers}
                    >
                      Find out more
                    </h1>
                  </Link>
                </div>
              </div>
              <div class="my-admin-homee-page-home-container06">
                <div class="my-admin-homee-page-home-container07">
                  <img
                    src={retailerImage}
                    alt=""
                    class="my-admin-homee-page-home-image1"
                  />
                  <div class="my-admin-homee-page-home-container08">
                    <h1 class="my-admin-homee-page-home-text2">
                      Retailer Management
                    </h1>
                    <Link to="/retailers">
                      <h1
                        class="my-admin-homee-page-home-text3"
                        onClick={getRetailers}
                      >
                        Find out more
                      </h1>
                    </Link>
                  </div>
                </div>
                <div class="my-admin-homee-page-home-container09">
                  <img
                    src={suppliersImage}
                    alt=""
                    class="my-admin-homee-page-home-image2"
                  />
                  <div class="my-admin-homee-page-home-container10">
                    <h1 class="my-admin-homee-page-home-text4">
                      Supplier Management
                    </h1>
                    <Link to="/suppliers">
                      <h1
                        class="my-admin-homee-page-home-text5"
                        onClick={getSuppliers}
                      >
                        Find out more
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div class="home-container">
    //   <div class="home-container01">
    //     <div class="home-container02">
    //       <div class="home-container03">
    //         <img className="my-image1" src={retailerImage} alt="" />
    //       </div>
    //       <div class="home-container04">
    //         <div class="home-container05">
    //           <h1>Retailers</h1>
    //           <h1 class="home-text01">
    //             <br />
    //             <span>
    //               We focus on providing customers with high-quality products at
    //               affordable prices, as well as excellent customer service.
    //             </span>
    //           </h1>
    //           <Link to="/retailers">
    //             <button class="home-button button" onClick={getRetailers}>
    //               <h1 class="home-text04">Find out More</h1>
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="home-container06">
    //       <div class="home-container07">
    //         <img className="my-image2" src={suppliersImage} alt="" />
    //       </div>
    //       <div class="home-container08">
    //         <div class="home-container09">
    //           <h1 class="home-text05 Heading">Suppliers</h1>
    //           <h1 class="home-text06">
    //             <br class="home-text07" />
    //             <span class="home-text08">
    //               We pride ourselves on offering the best value for our
    //               customers and are confident that we can provide our Retailers
    //               with the best service possible.
    //             </span>
    //           </h1>
    //           <Link to="/suppliers">
    //             <button class="home-button1 button" onClick={getSuppliers}>
    //               <h1 class="home-text09">Find out More</h1>
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default AdminUserManagement
