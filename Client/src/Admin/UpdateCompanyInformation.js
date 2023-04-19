import React, { useState, useContext } from 'react'
import axios from 'axios'
import './CompanyInformation.css'
import AuthenticationContext from './AuthenticationContext'
import companyImage from '../components/supplier dashboard/supplier-image/Company-add.jpg'
import Swal from 'sweetalert2'

function UpdateCompanyInformation() {
  const { user } = useContext(AuthenticationContext)
  const { company } = useContext(AuthenticationContext)
  const { setCompany } = useContext(AuthenticationContext)

  const [companyName, setCompanyName] = useState('')
  const [region, setRegion] = useState('')
  const [city, setCity] = useState('')
  const [mainCategory, setMainCategory] = useState('')
  const [mainProducts1, setMainProducts1] = useState('')
  const [mainProducts2, setMainProducts2] = useState('')
  const [mainProducts3, setMainProducts3] = useState('')
  const [otherProducts1, setOtherProducts1] = useState('')
  const [otherProducts2, setOtherProducts2] = useState('')
  const [otherProducts3, setOtherProducts3] = useState('')
  const [numOfEmployees, setNumOfEmployees] = useState('')
  const [websiteURL, setWebsiteURL] = useState('')
  const [legalOwner, setLegalOwner] = useState('')
  const [yearCompanyRegistered, setYearCompanyRegistered] = useState('')
  const [companyIntroduction, setCompanyIntroduction] = useState('')
  const [certificates, setCertificates] = useState([])
  const [companyLogo, setCompanyLogo] = useState([])
  const [supplierID, setSupplierID] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log('ITS THE USER', user.id)

    if (
      supplierID === '' ||
      companyName === '' ||
      region === '' ||
      city === '' ||
      mainCategory === '' ||
      mainCategory === 'opt0' ||
      mainProducts1 === '' ||
      mainProducts2 === '' ||
      mainProducts3 === '' ||
      otherProducts1 === '' ||
      otherProducts2 === '' ||
      otherProducts3 === '' ||
      yearCompanyRegistered === '' ||
      numOfEmployees === '' ||
      numOfEmployees === 'opt0' ||
      websiteURL === '' ||
      legalOwner === '' ||
      companyIntroduction === '' ||
      certificates.length === 0 ||
      companyLogo.length === 0
    ) {
      Swal.fire('Error', 'Please fill all forms!', 'error')
    } else if (
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(companyName) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(city) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(mainProducts1) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(mainProducts2) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(mainProducts3) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(otherProducts1) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(otherProducts2) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(otherProducts3) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(legalOwner)
    ) {
      Swal.fire('Invalid Input', 'No Numbers, commas... are allowed', 'error')
    } else {
      const dataToSubmit = {
        companyName,
        region,
        city,
        mainCategory,
        mainProducts1,
        mainProducts2,
        mainProducts3,
        otherProducts1,
        otherProducts2,
        otherProducts3,
        numOfEmployees,
        yearCompanyRegistered,
        websiteURL,
        legalOwner,
        companyIntroduction,
        certificates,
        companyLogo,
        supplierID,
      }
      console.log(dataToSubmit)
      console.log(company)
      let url = `http://localhost:7000/updateCompanyInformation/${company.id}`
      console.log(url)

      axios({
        method: 'PUT',
        url: url,
        data: dataToSubmit,

        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          // 'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        if (res.status === 200) {
          Swal.fire(
            'Success!',
            'Company Information Updated Successfully!',
            'success',
          )
          setCompany(res.data.message)
        } else {
          Swal.fire('Error!', 'Please provide information correctly!', 'error')
        }
      })
    }
  }

  return (
    <div>
      <div class="company-info-home-container">
        <div class="company-info-home-company-main-page">
          <div class="company-info-home-image-container-company-info">
            <img
              alt=""
              src={companyImage}
              class="company-info-home-company-ingo-images"
            />
          </div>
          <form class="company-info-home-form">
            <div class="company-info-home-container01">
              <h1>Update Company Information</h1>
              <div class="company-info-home-container02">
                <input
                  type="text"
                  class="company-info-home-textinput"
                  onClick={(e) => {
                    e.target.value = user.id
                    setSupplierID(e.target.value)
                  }}
                  value={supplierID}
                  placeholder="Click to generate your ID!"
                  readOnly
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  class="company-info-home-textinput01 input"
                  onChange={(event) => {
                    setCompanyName(event.target.value)
                  }}
                  value={companyName}
                  required
                />
                <div class="company-info-home-container03">
                  <div class="company-info-home-container04">
                    <div class="company-info-home-container05">
                      <div class="company-info-home-container06"></div>
                    </div>
                    <label class="company-info-home-text01">
                      <span>Company Operational</span>
                      <br />
                      <span>Address:</span>
                    </label>
                  </div>
                  <div class="company-info-home-container07">
                    <input
                      type="text"
                      placeholder="Region"
                      class="company-info-home-textinput02 input"
                      onChange={(event) => {
                        setRegion(event.target.value)
                      }}
                      value={region}
                      required
                    />
                    <input
                      type="text"
                      placeholder="City"
                      class="company-info-home-textinput03 input"
                      onChange={(event) => {
                        setCity(event.target.value)
                      }}
                      value={city}
                      required
                    />
                  </div>
                </div>
                <select
                  onChange={(event) => {
                    setMainCategory(event.target.value)
                  }}
                  value={mainCategory}
                  required
                  class="company-info-home-select"
                >
                  <option className="optionnn">-- Main Category --</option>
                  <option value="Manufacturing & Processing Machinery">
                    Manufacturing & Processing Machinery
                  </option>
                  <option value="Construction  Decoration">
                    Construction & Decoration
                  </option>
                  <option value="Industrial Equipment & Components">
                    Industrial Equipment & Components
                  </option>
                  <option value="Agriculture & food beavrages">
                    Agriculture & food beavrages
                  </option>
                  <option value="Chemicals & minerals">
                    Chemicals & minerals
                  </option>
                  <option value="Electrical & Electronics">
                    Electrical & Electronics
                  </option>
                </select>
                <div class="company-info-home-container08">
                  <div class="company-info-home-container09">
                    <input
                      type="text"
                      placeholder="main product 1"
                      class="company-info-home-textinput04 input"
                      onChange={(event) => {
                        setMainProducts1(event.target.value)
                      }}
                      value={mainProducts1}
                      required
                    />
                    <input
                      type="text"
                      placeholder="main product 2"
                      class="company-info-home-textinput05 input"
                      onChange={(event) => {
                        setMainProducts2(event.target.value)
                      }}
                      value={mainProducts2}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="main product 3"
                    class="company-info-home-textinput06 input"
                    onChange={(event) => {
                      setMainProducts3(event.target.value)
                    }}
                    value={mainProducts3}
                    required
                  />
                </div>
                <div class="company-info-home-container10">
                  <div class="company-info-home-container11">
                    <input
                      type="text"
                      placeholder="other product 1"
                      class="company-info-home-textinput07 input"
                      onChange={(event) => {
                        setOtherProducts1(event.target.value)
                      }}
                      value={otherProducts1}
                      required
                    />
                    <input
                      type="text"
                      placeholder="other product 2"
                      class="company-info-home-textinput08 input"
                      onChange={(event) => {
                        setOtherProducts2(event.target.value)
                      }}
                      value={otherProducts2}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="other product 3"
                    class="company-info-home-textinput09 input"
                    onChange={(event) => {
                      setOtherProducts3(event.target.value)
                    }}
                    value={otherProducts3}
                    required
                  />
                </div>
                <div class="company-info-home-container12">
                  <label class="company-info-home-text05">
                    <span>Year Company</span>
                    <br />
                    <span>Registered:</span>
                    <br />
                  </label>
                  <input
                    type="date"
                    name="date"
                    class="company-info-home-textinput10 input"
                    onChange={(event) => {
                      setYearCompanyRegistered(event.target.value)
                    }}
                    value={yearCompanyRegistered}
                    required
                  />
                </div>
                <div class="company-info-home-container13">
                  <label class="company-info-home-text10">
                    <span>Total Number Of Employees:</span>
                    <br />
                  </label>
                  <select
                    class="company-info-home-select1"
                    onChange={(event) => {
                      setNumOfEmployees(event.target.value)
                    }}
                    value={numOfEmployees}
                    required
                  >
                    <option>--- Please select ---</option>
                    <option value="5 - 10 People">5 - 10 People</option>
                    <option value="51 - 100 People">51 - 100 People</option>
                    <option value="11 - 50 People">11 - 50 People</option>
                    <option value="101 - 200 People">101 - 200 People</option>
                    <option value="201 - 300 People">201 - 300 People</option>
                    <option value="301 - 500 People">301 - 500 People</option>
                    <option value="501 - 1000 People">501 - 1000 People</option>
                    <option value="Above 1000 People">Above 1000 People</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="company-info-home-container14">
              <input
                type="text"
                placeholder="Company Website Url"
                class="company-info-home-textinput11 input"
                onChange={(event) => {
                  setWebsiteURL(event.target.value)
                }}
                value={websiteURL}
                required
              />
              <input
                type="text"
                placeholder="Legal Owner"
                class="company-info-home-textinput12 input"
                onChange={(event) => {
                  setLegalOwner(event.target.value)
                }}
                value={legalOwner}
                required
              />
              <textarea
                placeholder="Company Introduction"
                class="company-info-home-textarea textarea"
                onChange={(event) => {
                  setCompanyIntroduction(event.target.value)
                }}
                value={companyIntroduction}
              ></textarea>
              <div class="company-info-home-container15">
                <label class="company-info-home-text13">
                  <span>Trade Liscence Certificates:</span>
                  <br />
                </label>
                <input
                  type="file"
                  placeholder="placeholder"
                  class="company-info-home-textinput13 input"
                  onChange={(e) => {
                    setCertificates(e.target.files[0])
                  }}
                />
              </div>
              <div class="company-info-home-container16">
                <label class="company-info-home-text16">
                  <span>Company</span>
                  <br />
                  <span>Logo:</span>
                  <br />
                </label>
                <input
                  type="file"
                  placeholder="placeholder"
                  class="company-info-home-textinput14 input"
                  onChange={(e) => {
                    setCompanyLogo(e.target.files[0])
                  }}
                />
              </div>
              <button
                class="company-info-home-button button"
                onClick={handleSubmit}
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateCompanyInformation
