import React, { useContext, useState } from 'react'
import axios from 'axios'
import './AddProduct.css'
import Swal from 'sweetalert2'
import productsImage from '../components/supplier dashboard/supplier-image/Product quality-amico (1).png'
import AuthenticationContext from './AuthenticationContext'
function AddProduct() {
  const { user } = useContext(AuthenticationContext)
  const { company } = useContext(AuthenticationContext)
  const [title, setTitle] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productImage1, setProductImage1] = useState([])
  const [productImage2, setProductImage2] = useState([])
  const [productImage3, setProductImage3] = useState([])
  const [productImage4, setProductImage4] = useState([])
  const [costPerItem, setCostPerItem] = useState(Number)
  const [minimumOrder, setMinimumOrder] = useState(Number)
  const [location, setLocation] = useState('')
  const [availability, setAvailability] = useState('')
  const [companyID, setCompanyID] = useState('')
  const [secret_key, setSecret_key] = useState('')
  const [supplierName, setSupplierName] = useState('')
  const [supplierCredentials, setSupplierCredentials] = useState('')
  const [supplier_ID, setSupplier_ID] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (
      title === '' ||
      productCategory === '' ||
      productCategory === 'opt0' ||
      productDescription === '' ||
      costPerItem === '' ||
      minimumOrder === '' ||
      productImage1.length === 0 ||
      productImage2.length === 0 ||
      productImage3.length === 0 ||
      productImage4.length === 0 ||
      location === '' ||
      availability === '' ||
      availability === 'opt0' ||
      companyID === '' ||
      secret_key === '' ||
      supplierName === '' ||
      supplierCredentials === '' ||
      supplier_ID === ''
    ) {
      Swal.fire('Error', 'Please fill all forms!', 'error')
    } else if (
      !RegExp(
        /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/,
      ).test(costPerItem) ||
      !RegExp(
        /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/,
      ).test(minimumOrder)
    ) {
      Swal.fire('Error!', 'Invalid Amount', 'error')
    } else if (!RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(supplierName)) {
      Swal.fire('Invalid Input', 'No Numbers, commas... are allowed', 'error')
    } else if (RegExp(/[^a-zA-Z\d\s:]/).test(supplierCredentials)) {
      Swal.fire(
        'Invalid Input!',
        'Telegram UserName can not include special characters()',
        'error',
      )
    } else {
      let cpi = costPerItem.toString()
      let mo = minimumOrder.toString()

      const dataToSubmit = {
        title,
        productCategory,
        productDescription,
        productImage1,
        productImage2,
        productImage3,
        productImage4,
        cpi,
        mo,
        location,
        availability,
        companyID,
        secret_key,
        supplierName,
        supplierCredentials,
        supplier_ID,
      }
      axios({
        method: 'POST',
        url: 'http://localhost:7000/addProducts',
        data: dataToSubmit,
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          Swal.fire('Success!', 'Product Added Successfully!', 'success')
        } else {
          Swal.fire('Error!', 'Please Check Provided Information!', 'error')
        }
      })
    }
  }

  return (
    <div>
      <div class="products-home-main-page-container">
        <div class="products-home-main-page-products-a-d-d-main-container">
          <img
            alt=""
            src={productsImage}
            class="products-home-main-page-image"
          />
          <form class="products-home-main-page-form">
            <div class="products-home-main-page-container01">
              <input
                type="text"
                placeholder="Title"
                class="products-home-main-page-textinput input"
                onChange={(event) => {
                  setTitle(event.target.value)
                }}
                value={title}
                required
              />
              <select
                class="products-home-main-page-select"
                onChange={(event) => {
                  setProductCategory(event.target.value)
                }}
                value={productCategory}
              >
                <option>-- Product Category --</option>
                <option value="Manufacturing & Processing Machinery">
                  Manufacturing & Processing Machinery
                </option>
                <option value="Industrial Equipment & Components">
                  Industrial Equipment & Components
                </option>
                <option value="Construction & Decoration">
                  Construction & Decoration
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
              <textarea
                placeholder="Product Description"
                class="products-home-main-page-textarea textarea"
                onChange={(event) => {
                  setProductDescription(event.target.value)
                }}
                value={productDescription}
              ></textarea>
              <div class="products-home-main-page-container02">
                <input
                  type="number"
                  placeholder="Cost Per Item"
                  class="products-home-main-page-textinput01 input"
                  onChange={(event) => {
                    setCostPerItem(event.target.value)
                  }}
                  value={costPerItem}
                />
                <input
                  type="number"
                  placeholder="Minimum Order"
                  class="products-home-main-page-textinput02 input"
                  onChange={(event) => {
                    setMinimumOrder(event.target.value)
                  }}
                  value={minimumOrder}
                />
              </div>
              <div class="products-home-main-page-container03">
                <div class="products-home-main-page-container04">
                  <label class="products-home-main-page-text">
                    Product Image 1:
                  </label>
                  <input
                    type="file"
                    placeholder="placeholder"
                    class="products-home-main-page-textinput03 input"
                    onChange={(e) => {
                      setProductImage1(e.target.files[0])
                    }}
                  />
                </div>
              </div>
              <div class="products-home-main-page-container05">
                <div class="products-home-main-page-container06">
                  <label class="products-home-main-page-text1">
                    Product Image 2:
                  </label>
                  <input
                    type="file"
                    placeholder="placeholder"
                    class="products-home-main-page-textinput04 input"
                    onChange={(e) => {
                      setProductImage2(e.target.files[0])
                    }}
                  />
                </div>
              </div>
              <div class="products-home-main-page-container07">
                <div class="products-home-main-page-container08">
                  <label class="products-home-main-page-text2">
                    Product Image 3:
                  </label>
                  <input
                    type="file"
                    placeholder="placeholder"
                    class="products-home-main-page-textinput05 input"
                    onChange={(e) => {
                      setProductImage3(e.target.files[0])
                    }}
                  />
                </div>
              </div>
              <div class="products-home-main-page-container09">
                <div class="products-home-main-page-container10">
                  <label class="products-home-main-page-text3">
                    Product Image 4:
                  </label>
                  <input
                    type="file"
                    placeholder="placeholder"
                    class="products-home-main-page-textinput06 input"
                    onChange={(e) => {
                      setProductImage4(e.target.files[0])
                    }}
                  />
                </div>
              </div>
            </div>
            <div class="products-home-main-page-container11">
              <div class="products-home-main-page-container12">
                <label class="products-home-main-page-text4">Inventory:</label>
                <div class="products-home-main-page-container13">
                  <input
                    type="text"
                    placeholder="Location"
                    class="products-home-main-page-textinput07 input"
                    onChange={(event) => {
                      setLocation(event.target.value)
                    }}
                    value={location}
                  />
                  <select
                    class="products-home-main-page-select1"
                    onChange={(event) => {
                      setAvailability(event.target.value)
                    }}
                    value={availability}
                  >
                    <option>-- Availability --</option>
                    <option value="available">Available</option>
                    <option value="outOfStock">Out of stock</option>
                  </select>
                </div>
              </div>
              <input
                type="text"
                placeholder="Click to generate your company ID!"
                required
                class="products-home-main-page-textinput08 input"
                onClick={(e) => {
                  e.target.value = company.id
                  setCompanyID(e.target.value)
                }}
                value={companyID}
                readOnly
              />
              <input
                type="text"
                placeholder="Chapa Secret Key"
                class="products-home-main-page-textinput09 input"
                onChange={(event) => {
                  setSecret_key(event.target.value)
                }}
                value={secret_key}
                required
              />
              <input
                type="text"
                placeholder="Supplier Name"
                class="products-home-main-page-textinput10 input"
                onChange={(event) => {
                  setSupplierName(event.target.value)
                }}
                value={supplierName}
              />
              <input
                type="text"
                placeholder="Telegram UserName"
                class="products-home-main-page-textinput11 input"
                onChange={(event) => {
                  setSupplierCredentials(event.target.value)
                }}
                value={supplierCredentials}
              />
              <input
                type="text"
                placeholder="Click to generate your SupplierID!"
                class="products-home-main-page-textinput12 input"
                onClick={(e) => {
                  e.target.value = user.id
                  setSupplier_ID(e.target.value)
                }}
                value={supplier_ID}
                readOnly
              />
              <button
                class="products-home-main-page-button button"
                onClick={handleSubmit}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
