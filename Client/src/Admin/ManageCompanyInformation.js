import React, { useContext } from 'react'
import AuthenticationContext from './AuthenticationContext'
import './ManageCompanyInformation.css'
import { Link } from 'react-router-dom'
function ManageCompanyInformation() {
  const { company } = useContext(AuthenticationContext)
  console.log(company)
  return (
    <div>
      <div class="manage-company-information-container">
        <div class="manage-company-information-container01">
          <h1 class="manage-company-information-text">
            Manage Company Information
          </h1>
          <div class="manage-company-information-container02">
            <Link to="updatecompanyinfo">
              <span class="manage-company-information-text01">
                Edit Company Profile
              </span>
            </Link>
          </div>
        </div>
        <div class="manage-company-information-manage-company-information-main-container">
          <div class="manage-company-information-container03">
            <div class="manage-company-information-container04">
              <div class="manage-company-information-container05">
                <div class="manage-company-information-container06">
                  <img
                    alt=""
                    class="manage-company-information-image"
                    src={`http://localhost:7000/company_logo/${company.companyLogo[0]}`}
                  />
                </div>
              </div>
              <div class="manage-company-information-container07">
                <div class="manage-company-information-container08">
                  <span class="manage-company-information-text02">
                    Company ID:
                  </span>
                  <span class="manage-company-information-text03">
                    Company Name:
                  </span>
                  <span class="manage-company-information-text04">Region:</span>
                  <span class="manage-company-information-text05">City:</span>
                  <span class="manage-company-information-text06">
                    Main Category:
                  </span>
                  <span class="manage-company-information-text07">
                    Main Products:
                  </span>
                  <span class="manage-company-information-text08">
                    Main Products:
                  </span>
                  <span class="manage-company-information-text09">
                    Main Products:
                  </span>
                  <span class="manage-company-information-text10">
                    Year company Registered:
                  </span>
                  <span class="manage-company-information-text11">
                    Total Number Of Employees:
                  </span>
                </div>
                <div class="manage-company-information-container09">
                  <span class="manage-company-information-text12">
                    {company.id}
                  </span>
                  <span class="manage-company-information-text13">
                    {company.companyName}
                  </span>
                  <span class="manage-company-information-text14">
                    {company.region}
                  </span>
                  <span class="manage-company-information-text15">
                    {company.city}
                  </span>
                  <span class="manage-company-information-text16">
                    {company.mainCategory}
                  </span>
                  <span class="manage-company-information-text17">
                    {company.mainProducts1}
                  </span>
                  <span class="manage-company-information-text18">
                    {company.mainProducts2}
                  </span>
                  <span class="manage-company-information-text19">
                    {company.mainProducts3}
                  </span>
                  <span class="manage-company-information-text20">
                    {company.yearCompanyRegistered}
                  </span>
                  <span class="manage-company-information-text21">
                    {company.numOfEmployees}
                  </span>
                </div>
              </div>
            </div>
            <div class="manage-company-information-container10">
              <div class="manage-company-information-container11">
                <span class="manage-company-information-text22">
                  Other Products:
                </span>
                <span class="manage-company-information-text23">
                  Company Website Url:
                </span>
                <span class="manage-company-information-text24">
                  Company Website Url:
                </span>
                <span class="manage-company-information-text25">
                  Company Website Url:
                </span>
                <span class="manage-company-information-text26">
                  Legal Owner:
                </span>
                <span class="manage-company-information-text27">
                  Company Introduction:
                </span>
                <span class="manage-company-information-text28">
                  Company Introduction:
                </span>
                <span class="manage-company-information-text29">
                  Company Introduction:
                </span>
                <span class="manage-company-information-text30">
                  Company Introduction:
                </span>
                <span class="manage-company-information-text31">
                  Company Introduction:
                </span>
                <span class="manage-company-information-text32">
                  Company Introduction:
                </span>
                <span class="manage-company-information-text33">
                  Certificates:
                </span>
              </div>
              <div class="manage-company-information-container12">
                <span class="manage-company-information-text34">
                  {company.otherProducts1}
                </span>
                <span class="manage-company-information-text35">
                  {company.otherProducts2}
                </span>
                <span class="manage-company-information-text36">
                  {company.otherProducts3}
                </span>
                <span class="manage-company-information-text37">
                  {company.websiteURL}
                </span>
                <span class="manage-company-information-text38">
                  {company.legalOwner}
                </span>
                <textarea
                  readonly
                  class="manage-company-information-textarea textarea"
                  value={company.companyIntroduction}
                ></textarea>

                <img
                  alt=""
                  class="manage-company-information-image1"
                  src={`http://localhost:7000/certificates/${company.certificates[0]}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageCompanyInformation
