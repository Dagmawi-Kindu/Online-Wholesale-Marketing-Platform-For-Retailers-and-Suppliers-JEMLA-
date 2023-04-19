import React, { useState, useEffect, useContext } from 'react'
import AuthenticationContext from '../AuthenticationContext'
import './Statistics.css'
import totalProductImage from '../images/quality-control.png'
import totalFeedBackImage from '../images/feedback (1).png'
import mainProductsImage from '../images/product.png'
import otherProductsImage from '../images/add-package.png'

import axios from 'axios'
import { BarChart, Bar } from 'recharts'
import {
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from 'recharts'

function Statistics() {
  const { user } = useContext(AuthenticationContext)
  const { company } = useContext(AuthenticationContext)
  const [foundProduct1, setFoundProduct1] = useState(Number)
  const [foundProduct2, setFoundProduct2] = useState(Number)
  const [foundProduct3, setFoundProduct3] = useState(Number)
  const [foundProduct4, setFoundProduct4] = useState(Number)
  const [foundProduct5, setFoundProduct5] = useState(Number)
  const [foundProduct6, setFoundProduct6] = useState(Number)
  const [foundFeedback1, setFoundFeedback1] = useState(Number)
  const [foundFeedback2, setFoundFeedback2] = useState(Number)
  const [foundFeedback3, setFoundFeedback3] = useState(Number)
  const [foundProductCount, setFoundProductCount] = useState(Number)
  const [foundFeedback, setFoundFeedback] = useState(Number)

  let url = `http://localhost:7000/getCountProducts/${user.id}`
  axios.get(url).then((res) => {
    //console.log(res.data.foundProduct1[1])
    setFoundProduct1(res.data.foundProduct1[1])
    setFoundProduct2(res.data.foundProduct2[1])
    setFoundProduct3(res.data.foundProduct3[1])
    setFoundProduct4(res.data.foundProduct4[1])
    setFoundProduct5(res.data.foundProduct5[1])
    setFoundProduct6(res.data.foundProduct6[1])
  })
  let url4 = `http://localhost:7000/feedbackCountAll/${user.id}`
  axios.get(url4).then((res) => {
    // console.log('AM I FOUND', res.data.foundFeedback[1])
    setFoundFeedback(res.data.foundFeedback[1])
  })

  let url2 = `http://localhost:7000/feedbackCount/${user.id}`
  axios.get(url2).then((res) => {
    //console.log(res.data.foundFeedback1[1])
    setFoundFeedback1(res.data.foundFeedback1[1])
    setFoundFeedback2(res.data.foundFeedback2[1])
    setFoundFeedback3(res.data.foundFeedback3[1])
  })
  let url3 = `http://localhost:7000/productCount/${user.id}`
  axios.get(url3).then((res) => {
    //console.log(res.data.foundProductCount[1])
    setFoundProductCount(res.data.foundProductCount[1])
  })
  //   let url4 = `http://localhost:7000/findProductSuppliers/${user.id}`
  //   axios.get(url4).then((res) => {
  //     console.log('yooooooooooo', res.data.foundProductSuppliers)
  //     setFoundProductSupplierss.push(res.data.foundProductSuppliers)
  //   })
  console.log('VAOEHJHV  ', company)

  const data = [
    {
      name: 'Product Categories',
      Manufacturing_and_Processing_Machinery: foundProduct1,
      Industrial_Equipment_and_Components: foundProduct2,
      Construction_and_Decoration: foundProduct3,
      Agriculture_and_food_beavrages: foundProduct4,
      Chemicals_and_Minerals: foundProduct5,
      Electrical_and_Electronics: foundProduct6,
    },
  ]
  const pieData = [
    { name: 'Compliment', value: foundFeedback1 },
    { name: 'Something not right ', value: foundFeedback2 },
    { name: 'Suggestion', value: foundFeedback3 },
  ]
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        className="myText"
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <div>
      <link href="./statisticsss-info-home.css" rel="stylesheet" />
      <div class="statisticsss-info-home-container">
        <div class="statisticsss-info-home-main-page">
          <div class="statisticsss-info-home-container01">
            <div class="statisticsss-info-home-container02">
              <div class="statisticsss-info-home-container03">
                <h1 class="statisticsss-info-home-text">
                  <span>Total </span>
                  <span>Products</span>
                  <br />
                </h1>
                <h1 class="statisticsss-info-home-text04">
                  {foundProductCount}
                </h1>
              </div>
              <div class="statisticsss-info-home-container04">
                <img
                  alt=""
                  src={totalProductImage}
                  class="statisticsss-info-home-image"
                />
              </div>
            </div>
            <div class="statisticsss-info-home-container05">
              <div class="statisticsss-info-home-container06">
                <h1 class="statisticsss-info-home-text05">
                  <span>Total Feedbacks</span>
                  <br />
                </h1>
                <h1 class="statisticsss-info-home-text09">{foundFeedback}</h1>
              </div>
              <div class="statisticsss-info-home-container07">
                <img
                  alt=""
                  src={totalFeedBackImage}
                  class="statisticsss-info-home-image1"
                />
              </div>
            </div>
            <div class="statisticsss-info-home-container08">
              <div class="statisticsss-info-home-container09">
                <h1 class="statisticsss-info-home-text10">
                  <span>Main Products</span>
                  <br />
                </h1>
                <h1 class="statisticsss-info-home-text13">
                  {company.mainProducts1}
                </h1>
                <h1 class="statisticsss-info-home-text14">
                  {company.mainProducts2}
                </h1>
                <h1 class="statisticsss-info-home-text15">
                  {company.mainProducts3}
                </h1>
              </div>
              <div class="statisticsss-info-home-container10">
                <img
                  alt=""
                  src={mainProductsImage}
                  class="statisticsss-info-home-image2"
                />
              </div>
            </div>
            <div class="statisticsss-info-home-container11">
              <div class="statisticsss-info-home-container12">
                <h1 class="statisticsss-info-home-text16">
                  <span>Other Products</span>
                  <br />
                </h1>
                <h1 class="statisticsss-info-home-text19">
                  {company.otherProducts1}
                </h1>
                <h1 class="statisticsss-info-home-text20">
                  {company.otherProducts2}
                </h1>
                <h1 class="statisticsss-info-home-text21">
                  {company.otherProducts3}
                </h1>
              </div>
              <div class="statisticsss-info-home-container13">
                <img
                  alt=""
                  src={otherProductsImage}
                  class="statisticsss-info-home-image3"
                />
              </div>
            </div>
          </div>
          <div class="statisticsss-info-home-container14">
            <div class="statisticsss-info-home-container15">
              <BarChart width={700} height={600} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis name="Numbers" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Manufacturing_and_Processing_Machinery"
                  fill="#00C49F"
                />
                <Bar
                  dataKey="Industrial_Equipment_and_Components"
                  fill="#9c9828"
                />
                <Bar dataKey="Construction_and_Decoration" fill="#FF8042" />
                <Bar dataKey="Agriculture_and_food_beavrages" fill="#8884d8" />
                <Bar dataKey="Chemicals_and_Minerals" fill="#b03e7f" />
                <Bar dataKey="Electrical_and_Electronics" fill="#FFBB28" />
              </BarChart>
            </div>
            <div class="statisticsss-info-home-container16">
              <PieChart width={800} height={550}>
                <Legend />
                <Tooltip />
                <Pie
                  data={pieData}
                  cx={400}
                  cy={250}
                  innerRadius={120}
                  outerRadius={240}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  //fill="#8884d8"
                  paddingAngle={1}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                  {data.map(() => (
                    <Cell key={`cell-${2}`} fill={COLORS[2 % COLORS.length]} />
                  ))}
                  {data.map(() => (
                    <Cell key={`cell-${3}`} fill={COLORS[3 % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
