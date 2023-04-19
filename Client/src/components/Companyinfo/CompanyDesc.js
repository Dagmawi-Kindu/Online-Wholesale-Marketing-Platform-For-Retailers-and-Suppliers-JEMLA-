import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import './Companyinfo.css'
import './CompanyDesc.css'
import Discount from '../discount/Discount'

import Feedback2 from '../../Admin/Feedback'
function CompanyDesc({ companyID }) {
  const url = `http://localhost:7000/getCompanyInformation/${companyID}`
  const [company_info, setCompany_info] = useState([])

  const getCompanyInfo = async () => {
    try {
      const data = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      console.log(data.data.companyInformation)
      setCompany_info(data.data.companyInformation)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCompanyInfo(companyID)
  }, [companyID])

  const [isClicked, setIsClicked] = useState('')

  return (
    <div>
      <div className="companyinfo-desc">
        <div className="company-btn">
          <button
            onClick={() => {
              setIsClicked('company')
              document.getElementById('c_desc').style['border-bottom'] =
                '3px solid orange'
              document.getElementById('c_feed').style['border-bottom'] =
                '3px solid #f6f9fc'
            }}
          >
            <h2 id="c_desc">Company Description</h2>
          </button>
          <button
            onClick={() => {
              setIsClicked('feedback')
              document.getElementById('c_desc').style['border-bottom'] =
                '3px solid #f6f9fc'
              document.getElementById('c_feed').style['border-bottom'] =
                '3px solid orange'
            }}
          >
            <h2 id="c_feed">Feedback</h2>
          </button>
        </div>

        <div>
          <div class="my-company-info-home-main-page">
            {isClicked === 'feedback' ? (
              <div>
                <Feedback2 supplierID={company_info.supplierID} />
              </div>
            ) : (
              <div class="my-company-info-home-container01">
                <div class="my-company-info-home-container02">
                  <h1 class="my-company-info-home-text">Basic Information</h1>
                  <div class="my-company-info-home-container03">
                    <img
                      alt=""
                      src={`${company_info.companyLogo}`}
                      class="my-company-info-home-image"
                    />
                    <div class="my-company-info-home-container04">
                      <h1 class="my-company-info-home-text01">
                        {company_info.companyName}
                      </h1>
                      <span class="my-company-info-home-text02">
                        <span className="llabless">Legal Owner:</span>{' '}
                        &nbsp;&nbsp;
                        {company_info.legalOwner}
                      </span>
                      <span class="my-company-info-home-text03">
                        <span className="llabless">Location:</span>&nbsp;&nbsp;{' '}
                        {company_info.city}, {company_info.region}
                      </span>
                    </div>
                  </div>
                  <h1 class="my-company-info-home-text04">
                    Company Information
                  </h1>
                  <div class="my-company-info-home-container05">
                    <span class="my-company-info-home-text05">
                      <span className="llabless">Main Category:</span>
                      <br />
                    </span>
                    <span class="my-company-info-home-text08">
                      {company_info.mainCategory}
                    </span>
                  </div>
                  <div class="my-company-info-home-container06">
                    <span class="my-company-info-home-text09">
                      <span className="llabless">Website URL:</span>
                      <br />
                    </span>
                    <span class="my-company-info-home-text12">
                      {company_info.websiteURL}
                    </span>
                  </div>
                  <div class="my-company-info-home-container07">
                    <span class="my-company-info-home-text13">
                      <span className="llabless">Year Company Registered:</span>
                      <br />
                    </span>
                    <span class="my-company-info-home-text16">
                      {company_info.yearCompanyRegistered}
                    </span>
                  </div>
                  <div class="my-company-info-home-container08">
                    <span class="my-company-info-home-text17">
                      <span className="llabless">Total N</span>
                      <span class="my-company-info-home-text19">o</span>
                      <span className="llabless"> of Employees:</span>
                      <br />
                    </span>
                    <span class="my-company-info-home-text22">
                      {company_info.numOfEmployees}
                    </span>
                  </div>
                  <h1 class="my-company-info-home-text23">
                    <span>Main Products</span>
                    <br />
                  </h1>
                  <div class="my-company-info-home-container09">
                    <span class="my-company-info-home-text26">
                      {company_info.mainProducts1}
                    </span>
                    <span class="my-company-info-home-text27">
                      {company_info.mainProducts2}
                    </span>
                    <span class="my-company-info-home-text28">
                      {company_info.mainProducts3}
                    </span>
                  </div>
                </div>
                <div class="my-company-info-home-container11">
                  <h1 class="my-company-info-home-text29">
                    <span>Other Products</span>
                    <br />
                  </h1>
                  <div class="my-company-info-home-container12">
                    <span class="my-company-info-home-text32">
                      {company_info.otherProducts1}
                    </span>
                    <span class="my-company-info-home-text33">
                      {company_info.otherProducts1}
                    </span>
                    <span class="my-company-info-home-text34">
                      {company_info.otherProducts1}
                    </span>
                  </div>
                  <h1 class="my-company-info-home-text35">
                    <span>Company Certificates</span>
                    <br />
                  </h1>
                  <img
                    src={`${company_info.certificates}`}
                    alt=""
                    class="my-company-info-home-image1"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="disc-discount">
        <Discount />
      </div> */}
    </div>
  )
}

export default CompanyDesc
