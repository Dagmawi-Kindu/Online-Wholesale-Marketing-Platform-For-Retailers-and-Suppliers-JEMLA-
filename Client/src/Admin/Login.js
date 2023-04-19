import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Loginsignup.css'
import { Link } from 'react-router-dom'
import AuthenticationContext from './AuthenticationContext'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import ProductContext from './ProductContext'
import Swal from 'sweetalert2'

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()
  const { setUser } = useContext(AuthenticationContext)
  const { setCompany } = useContext(AuthenticationContext)
  const { setAllProducts } = useContext(ProductContext)
  const { allProducts } = useContext(ProductContext)

  useEffect(() => {
    getAllProducts()
  }, [])
  const getAllProducts = async () => {
    try {
      const data = await axios.get('http://localhost:7000/getAllProducts')
      console.log(data)
      if (data.status === 200) {
        setAllProducts(data.data.foundProduct)
      } else {
        alert('NO PRODUCTS!')
      }
    } catch (e) {
      console.log(e)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const dataToSubmit = {
      phoneNumber,
      password,
    }
    axios({
      method: 'post',
      url: 'http://localhost:7000/api/auth/signin',
      data: dataToSubmit,
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem('token', res.data.access_token)
          setUser(res.data.userData)
          if (res.data.userData.role === 'retailer') {
            // console.log('miasjofa', allProducts)
            history.push('/home')
          } else if (res.data.userData.role === 'supplier') {
            let url = `http://localhost:7000/checkCompany/${res.data.userData.id}`

            axios.get(url).then((res) => {
              if (res.status === 202) {
                history.push('/editcompanyprofile')
              } else if (res.status === 200) {
                history.push('/supplier_dashboard')
                setCompany(res.data.companyInformation)
              } else {
                history.push('/')
              }
            })
          } else if (res.data.userData.role === 'admin') {
            history.push('/admin_dashboard')
          }
        } else if (res.status === 202) {
          Swal.fire('Error!', res.data.message, 'error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    // if (phoneNumber === '' || password === '') {
    //   Swal.fire('Error', 'Please fill all the forms!', 'error')
    // } else if (!RegExp(/^[0-9]{10}$/).test(phoneNumber)) {
    //   Swal.fire(
    //     'Invalid Input!',
    //     'Phone Number length must be 10 and you should start with 09111...',
    //     'error',
    //   )
    // } else if (
    //   !RegExp(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   ).test(password)
    // ) {
    //   Swal.fire(
    //     'Invalid Input!',
    //     'Passwords must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character(@ $ ! % * ? &) ',
    //     'error',
    //   )
    // } else {
    //   axios({
    //     method: 'post',
    //     url: 'http://localhost:7000/api/auth/signin',
    //     data: dataToSubmit,
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         sessionStorage.setItem('token', res.data.access_token)
    //         setUser(res.data.userData)

    //         // if (res.data.userData.accountStatus === 'disabled') {
    //         //   let myUrl = `http://localhost:7000/pendingUser/${res.data.userData.id}`
    //         //   axios({
    //         //     method: 'PUT',
    //         //     url: myUrl,
    //         //     headers: {
    //         //       Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    //         //     },
    //         //   }).then((res) => {
    //         //     console.log(res)
    //         //     Swal.fire('Error!', 'Reviewing', 'error')
    //         //   })
    //         // }

    //         if (res.data.userData.role === 'retailer') {
    //           // console.log('miasjofa', allProducts)
    //           history.push('/home')
    //         } else if (res.data.userData.role === 'supplier') {
    //           let url = `http://localhost:7000/checkCompany/${res.data.userData.id}`

    //           axios.get(url).then((res) => {
    //             if (res.status === 202) {
    //               history.push('/editcompanyprofile')
    //             } else if (res.status === 200) {
    //               history.push('/supplier_dashboard')
    //               setCompany(res.data.companyInformation)
    //             } else {
    //               history.push('/')
    //             }
    //           })
    //         } else if (res.data.userData.role === 'admin') {
    //           history.push('/admin_dashboard')
    //         }
    //       } else if (res.status === 202) {
    //         Swal.fire('Error!', res.data.message, 'error')
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
  }

  return (
    <div>
      <img class="wave" src="./images/log.png" alt="" />
      <div class="container-sign">
        <div class="img-sign"></div>
        <div class="login-content">
          <form className="form-sign" action="index.html">
            <h2 class="title">Sign In</h2>
            <div class="input-field">
              <i class="fa-solid fa-phone" aria-hidden="true"></i>
              <input
                type="phone"
                onChange={(event) => {
                  setPhoneNumber(event.target.value)
                }}
                value={phoneNumber}
                placeholder="phone Number"
                name="phoneNumber"
                id="txt0"
                size="60"
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock" aria-hidden="true"></i>
              <input
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
                value={password}
                placeholder="password"
                name="password"
                id="txt0"
                size="60"
              />
            </div>
            <a href="/null">Forgot Password?</a>
            <button className="inputs-btn" onClick={handleSubmit}>
              Login
            </button>
            <Link
              to={{
                pathname: '/Signup',
              }}
            >
              <span>Create Account</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
