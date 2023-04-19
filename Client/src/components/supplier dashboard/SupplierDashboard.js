import React, { useContext } from 'react'
import axios from 'axios'
import AuthenticationContext from '../../Admin/AuthenticationContext'
import './supplier-dashboard.css'
import { Link, useHistory } from 'react-router-dom'
import welcome from './supplier-image/welcome.png'
import statistics from './supplier-image/Site-Stats-amico.png'
import productsImage from './supplier-image/Product-quality-bro.png'
import company from './supplier-image/Company-amico.png'
import feedback from './supplier-image/Feedback-bro.png'
function SupplierDashboard() {
  let history = useHistory()
  const { user } = useContext(AuthenticationContext)

  const checkUrl = () => {
    let url = `http://localhost:7000/getProductsInfo/${user.id}`
    axios.get(url).then((res) => {
      if (res.status === 202) {
        history.push('/addproduct')
      } else if (res.status === 200) {
        history.push('/manageproduct')
        // history.push('/supplier_dashboard')
        // setCompany(res.data.companyInformation)
      } else {
        history.push('/')
      }
    })
  }

  return (
    <div>
      <div class=".home-container-supplier-dashboard">
        <div class="home-main-container-supplier">
          <div class="home-welcome-card-supplier">
            <img alt="" src={welcome} class="home-welcome-image" />
            <h1 class="home-welcome-header">Welcome to Supplier&apos;s Page</h1>
          </div>
          <div class="home-first-half-main-container">
            <div class="home-statistics-main-container">
              <img alt="" src={statistics} class="home-statistics-image" />
              <div class="home-container-001">
                <h1 class="home-statistics-header">Statistics</h1>
                <div class="home-container-0001">
                  <div class="home-divideer">
                    <div class="home-statistics-header-container"></div>
                  </div>
                  <Link to="/viewstatistics">
                    <button class="home-staistics-button button">
                      Find out more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="home-products-main-container">
              <img alt="" src={productsImage} class="home-product-image" />
              <div class="home-container-002">
                <div class="home-container-0002">
                  <h1 class="home-products-header">Products</h1>
                  <div class="home-products-header-container"></div>
                </div>
                <button class="home-product-button button" onClick={checkUrl}>
                  Find out more
                </button>
              </div>
            </div>
          </div>
          <div class="home-second-half-main-container">
            <div class="home-company-main-container">
              <img alt="" src={company} class="home-company-image" />
              <div class="home-container-003">
                <div class="home-container-0003">
                  <h1 class="home-company-header">Company</h1>
                  <div class="home-company-header-container"></div>
                </div>
                <Link to="/managecompanyinfo">
                  <button class="home-company-button button">
                    Find out more
                  </button>
                </Link>
              </div>
            </div>
            <div class="home-feedback-main-container">
              <div class="home-feedback-main-container1">
                <img alt="" src={feedback} class="home-feedback-image" />
                <div class="home-container-004">
                  <div class="home-container-0004">
                    <h1 class="home-feedback-header">Feedback</h1>
                    <div class="home-feedback-divider"></div>
                  </div>
                  <Link to="/managefeedback">
                    <button class="home-feedback-button button">
                      Find out more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierDashboard
