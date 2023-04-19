import React, { useState } from 'react'
import axios from 'axios'
import './Loginsignup.css'
import { Link } from 'react-router-dom'
import AuthenticationContext from './AuthenticationContext'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import Swal from 'sweetalert2'

function Signup() {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tradeLiscenceNumber, setTradeLiscenceNumber] = useState(Number)
  const [tradeLiscence, setTradeLiscence] = useState([])
  const [kebeleID, setKebeleID] = useState([])
  const [profilePicture, setProfilePicture] = useState([])
  const [role, setRole] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(Number)
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (
      firstName === '' ||
      middleName === '' ||
      lastName === '' ||
      email === '' ||
      tradeLiscenceNumber === '' ||
      tradeLiscence.length === 0 ||
      kebeleID.length === 0 ||
      profilePicture.length === 0 ||
      role === '' ||
      role === 'opt0' ||
      phoneNumber === '' ||
      password === ''
    ) {
      Swal.fire('Error', 'Please fill all the forms!', 'error')
    } else if (
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(firstName) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(middleName) ||
      !RegExp(/^(?!\s+$)[a-zA-Z,'. -]+$/).test(lastName)
    ) {
      Swal.fire('Invalid Input', 'No Numbers, commas... are allowed', 'error')
    } else if (
      !RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)
    ) {
      Swal.fire('Error!', 'Please fill the right email', 'error')
    } else if (!RegExp(/^[0-9]{10}$/).test(tradeLiscenceNumber)) {
      Swal.fire(
        'Invalid Input!',
        'Trade Liscence number length should equal 10',
        'error',
      )
    } else if (!RegExp(/^[0-9]{10}$/).test(phoneNumber)) {
      Swal.fire(
        'Invalid Input!',
        'Phone Number length must be 10 and you should start with 09111...',
        'error',
      )
    } else if (
      !RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      ).test(password)
    ) {
      Swal.fire(
        'Invalid Input!',
        'Passwords must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character ',
        'error',
      )
    } else {
      let tln = tradeLiscenceNumber.toString()
      const dataToSubmit = {
        firstName,
        middleName,
        lastName,
        email,
        tln,
        tradeLiscence,
        kebeleID,
        profilePicture,
        role,
        phoneNumber,
        password,
      }
      let url = `http://localhost:7000/checkIfUserExists/${firstName}/${middleName}/${lastName}/${phoneNumber}`
      axios
        .get(url, {
          data: dataToSubmit,
        })
        .then((res) => {
          if (res.status === 202) {
            axios({
              method: 'post',
              url: 'http://localhost:7000/api/auth/signup',
              data: dataToSubmit,
              headers: { 'Content-Type': 'multipart/form-data' },
            })
              .then((res) => {
                console.log(res)

                if (res.status === 200) {
                  Swal.fire(
                    'Success!',
                    'Your entered information is being reviewed!',
                    'success',
                  )
                }
              })
              .catch((err) => {
                console.log(err)
              })
          } else if (res.status === 200) {
            Swal.fire('Error', 'User is already Registered!', 'question')
          }
        })
    }
  }

  return (
    <div>
      <img class="wave" src="./images/reg.png" alt="" />
      <div class="container-sign">
        <div class="img-sign"></div>
        <div class="login-content">
          <form className="form-sign" action="index.html">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user" aria-hidden="true"></i>
              <input
                type="text"
                onChange={(event) => {
                  setFirstName(event.target.value)
                }}
                value={firstName}
                placeholder="First Name"
                name="firstName"
                id="txt0"
                size="60"
              />
            </div>
            <div class="input-field">
              <i class="fas fa-user" aria-hidden="true"></i>
              <input
                type="text"
                onChange={(event) => {
                  setMiddleName(event.target.value)
                }}
                value={middleName}
                placeholder="Middle Name"
                name="middleName"
                id="txt0"
                size="60"
              />
            </div>
            <div class="input-field">
              <i class="fas fa-user" aria-hidden="true"></i>
              <input
                type="text"
                onChange={(event) => {
                  setLastName(event.target.value)
                }}
                value={lastName}
                placeholder="Last Name"
                name="lastName"
                id="txt0"
                size="60"
              />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope" aria-hidden="true"></i>
              <input
                type="text"
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                value={email}
                placeholder="Email"
                name="middle Name"
                id="txt0999"
                size="60"
              />
            </div>
            <div class="input-field">
              <i class="fa-solid fa-id-card" aria-hidden="true"></i>
              <input
                type="number"
                onChange={(event) => {
                  setTradeLiscenceNumber(event.target.value)
                }}
                value={tradeLiscenceNumber}
                placeholder="Trade Liscence Number"
                name="tradeLiscenceNumber"
                id="txt0"
                size="60"
              />
            </div>
            <div className="reg-name">
              <div class="input-fieldr">
                <label>Trade Liscence:</label>
                <input
                  type="file"
                  onChange={(event) => {
                    setTradeLiscence(event.target.files[0])
                  }}
                  name="tradeLiscence"
                  id="txt0"
                  size="60"
                />
              </div>
              <div class="input-fieldr">
                <label>Kebele ID:</label>
                <input
                  type="file"
                  onChange={(event) => {
                    setKebeleID(event.target.files[0])
                  }}
                  name="kebeleID"
                  id="txt0"
                  size="60"
                />
              </div>
              <div class="input-fieldr">
                <label>Profile Picture:</label>
                <input
                  type="file"
                  onChange={(event) => {
                    setProfilePicture(event.target.files[0])
                  }}
                  name="profilePicture"
                  id="txt0"
                  size="60"
                />
              </div>
            </div>
            <select
              className="Select-sign"
              onChange={(event) => {
                setRole(event.target.value)
              }}
              value={role}
              name="role"
              id="sel"
            >
              <option value="opt0" selected="selected">
                -- Choose role --
              </option>
              <option value="supplier">As Supplier</option>
              <option value="retailer">As Retailer</option>
            </select>

            <div class="input-field">
              <i class="fa-solid fa-phone" aria-hidden="true"></i>
              <input
                type="phone"
                onChange={(event) => {
                  setPhoneNumber(event.target.value)
                }}
                value={phoneNumber}
                placeholder="Phone Number"
                name="setPhone"
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
                name="setPass"
                id="txt0"
                size="60"
              />
            </div>

            <button className="inputs-btn-reg" onClick={handleSubmit}>
              Register
            </button>
            <Link
              to={{
                pathname: '/',
              }}
            >
              <span>Already have Account Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
