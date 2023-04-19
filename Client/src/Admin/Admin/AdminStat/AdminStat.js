import React, { useState, useContext, useEffect } from 'react'
import './AdminStat.css'
import axios from 'axios'
import AuthenticationContext from '../../AuthenticationContext'
import { BarChart, Bar } from 'recharts'
import { Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import totalSupplierImage from '../adminPanel/supplier.png'
import totalRetailersImage from '../adminPanel/worker.png'
import totalUsersImage from '../adminPanel/employee.png'

function AdminStat() {
  const { user } = useContext(AuthenticationContext)
  const [retailerCount, setRetailerCount] = useState(Number)
  const [supplierCount, setSupplierCount] = useState(Number)
  const [totalUserCount, setTotalUserCount] = useState(Number)
  const [retailerCount1, setRetailerCount1] = useState(Number)
  const [retailerCount2, setRetailerCount2] = useState(Number)
  const [retailerCount3, setRetailerCount3] = useState(Number)
  const [supplierCount1, setSupplierCount1] = useState(Number)
  const [supplierCount2, setSupplierCount2] = useState(Number)
  const [supplierCount3, setSupplierCount3] = useState(Number)

  let url = 'http://localhost:7000/getCountRetailer'
  axios.get(url).then((res) => {
    //console.log(res.data.user[1])
    setRetailerCount(res.data.user[1])
  })
  let url2 = 'http://localhost:7000/getCountSupplier'
  axios.get(url2).then((res) => {
    //console.log(res.data.user[1])
    setSupplierCount(res.data.user[1])
  })
  let url3 = 'http://localhost:7000/getCountRetailerStats'
  axios.get(url3).then((res) => {
    //console.log(res.data.user[1])
    setRetailerCount1(res.data.user1[1])
    setRetailerCount2(res.data.user2[1])
    setRetailerCount3(res.data.user3[1])
  })
  let url4 = 'http://localhost:7000/getCountSupplierStats'
  axios.get(url4).then((res) => {
    //console.log(res.data.user[1])
    setSupplierCount1(res.data.user1[1])
    setSupplierCount2(res.data.user2[1])
    setSupplierCount3(res.data.user3[1])
  })
  useEffect(() => {
    const total = retailerCount + supplierCount

    setTotalUserCount(total)
  }, [retailerCount, supplierCount])
  const data1 = [
    {
      name: 'Account Status',
      Approved_Retailers: retailerCount1,
      Pending_Retailers: retailerCount2,
      Declined_Retailers: retailerCount3,
    },
  ]
  const data2 = [
    {
      name: 'Account Status',
      Approved_Suppliers: supplierCount1,
      Pending_Suppliers: supplierCount2,
      Declined_Suppliers: supplierCount3,
    },
  ]
  return (
    <div className="stat-bodyy">
      <div class="my-admin-statsss-info-home-container">
        <div class="my-admin-statsss-info-home-main-page">
          <div class="my-admin-statsss-info-home-container01">
            <div class="my-admin-statsss-info-home-container02">
              <div class="my-admin-statsss-info-home-container03">
                <h1 class="my-admin-statsss-info-home-text">
                  <span>Total Users</span>
                  <br />
                </h1>
                <h1 class="my-admin-statsss-info-home-text04">
                  {totalUserCount}
                </h1>
              </div>
              <div class="my-admin-statsss-info-home-container04">
                <img
                  alt=""
                  src={totalUsersImage}
                  class="my-admin-statsss-info-home-image"
                />
              </div>
            </div>
            <div class="my-admin-statsss-info-home-container05">
              <div class="my-admin-statsss-info-home-container06">
                <h1 class="my-admin-statsss-info-home-text05">
                  <span>Total Retailers</span>
                  <br />
                </h1>
                <h1 class="my-admin-statsss-info-home-text09">
                  {retailerCount}
                </h1>
              </div>
              <div class="my-admin-statsss-info-home-container07">
                <img
                  alt=""
                  src={totalRetailersImage}
                  class="my-admin-statsss-info-home-image1"
                />
              </div>
            </div>
            <div class="my-admin-statsss-info-home-container08">
              <div class="my-admin-statsss-info-home-container09">
                <h1 class="my-admin-statsss-info-home-text10">
                  <span>Total Suppliers</span>
                  <br />
                </h1>
                <h1 class="my-admin-statsss-info-home-text14">
                  {supplierCount}
                </h1>
              </div>
              <div class="my-admin-statsss-info-home-container10">
                <img
                  alt=""
                  src={totalSupplierImage}
                  class="my-admin-statsss-info-home-image2"
                />
              </div>
            </div>
          </div>
          <div class="my-admin-statsss-info-home-container11">
            <div class="my-admin-statsss-info-home-container12">
              <BarChart width={600} height={600} data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis name="Numbers" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Approved_Retailers" fill="#00C49F" />
                <Bar dataKey="Pending_Retailers" fill="#FFBB28" />
                <Bar dataKey="Declined_Retailers" fill="#b03e7f" />
              </BarChart>
            </div>
            <div class="my-admin-statsss-info-home-container13">
              <BarChart width={600} height={600} data={data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis name="Numbers" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Approved_Suppliers" fill="#00C49F" />
                <Bar dataKey="Pending_Suppliers" fill="#FFBB28" />
                <Bar dataKey="Declined_Suppliers" fill="#b03e7f" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminStat
