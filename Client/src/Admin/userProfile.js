import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthenticationContext from './AuthenticationContext'
import './Admin/userProfile.css'
import Swal from 'sweetalert2'
function UserProfile() {
  const { user } = useContext(AuthenticationContext)
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [profilePicture, setProfilePicture] = useState([])
  const [isClicked, setIsClicked] = useState('')
  const [myRole, setMyRole] = useState('')
  let history = useHistory()

  useEffect(() => {
    setEmail(user.email)
    setPhoneNumber(user.phoneNumber)
    if (user.role === 'admin') {
      setMyRole('Admin')
    } else if (user.role === 'supplier') {
      setMyRole('Supplier')
    } else if (user.role === 'retailer') {
      setMyRole('Retailer')
    } else {
      setMyRole('WHO ARE U?')
    }
  }, [user.email, user.phoneNumber, user.role])

  function RemoveAccount() {
    let url3 = `http://localhost:7000/removeUserAccount/${user.id}`

    axios({
      method: 'PUT',
      url: url3,
    }).then((res) => {
      if (res.status === 200) {
        history.push('/')
      } else {
        Swal.fire('Error!', 'Please provide information correctly!', 'error')
      }
    })
  }
  function handleSubmit(event) {
    event.preventDefault()

    const dataToSubmit = {
      email,
      phoneNumber,
    }
    const dataToSubmit2 = {
      profilePicture,
    }
    let url = `http://localhost:7000/updateUserProfileInformations/${user.id}`
    let url2 = `http://localhost:7000/updateUserProfilePicture/${user.id}`

    if (isClicked === 'image') {
      axios({
        method: 'PUT',
        url: url2,
        data: dataToSubmit2,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log('askflkafkla', res.data.data)
        if (res.status === 200) {
          Swal.fire('Success!', 'Information Updated Successfully!', 'success')
          if (isClicked === 'image') {
            user.profilePicture[0] = res.data.data
          } else {
            Swal.fire('Error!', 'Who are u?', 'error')
          }
        } else {
          Swal.fire('Error!', 'Please provide information correctly!', 'error')
        }
      })
    } else if (isClicked === 'email' || isClicked === 'phone') {
      axios({
        method: 'PUT',
        url: url,
        data: dataToSubmit,
      }).then((res) => {
        console.log(res.data.data)
        if (res.status === 200) {
          Swal.fire('Success!', 'Information Updated Successfully!', 'success')
          if (isClicked === 'email') {
            user.email = email
          } else if (isClicked === 'phone') {
            user.phoneNumber = phoneNumber
          } else {
            Swal.fire('Error!', 'Who are u?', 'error')
          }
        } else {
          Swal.fire('Error!', 'Please provide information correctly!', 'error')
        }
      })
    }
  }

  return (
    <div>
      <div class="username-info-home-container">
        <div class="username-info-home-main-page">
          <span
            class="username-info-home-text"
            onClick={() => {
              RemoveAccount()
            }}
          >
            Remove Account
          </span>
          <div class="username-info-home-container01">
            <div class="username-info-home-container02">
              <h1 class="username-info-home-text01">
                <span>{myRole}</span>
              </h1>
              <div class="username-info-home-container03">
                <div class="username-info-home-container04">
                  <img
                    alt=""
                    src={`http://localhost:7000/profile_pictures/${user.profilePicture[0]}`}
                    class="username-info-home-image"
                  />

                  {isClicked === 'image' ? (
                    <div>
                      <input
                        type="file"
                        class="username-info-home-textinput input"
                        onChange={(e) => {
                          setProfilePicture(e.target.files[0])
                        }}
                      />
                      <i
                        className="fa fa-times fa-1x"
                        onClick={() => {
                          setIsClicked('not_clicked')
                        }}
                      ></i>
                    </div>
                  ) : (
                    <span class="username-info-home-text05">
                      <i
                        className="fa fa-pencil fa-1x"
                        onClick={() => {
                          setIsClicked('image')()
                        }}
                      ></i>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div class="username-info-home-container05">
              <div class="username-info-home-container06">
                <div class="username-info-home-container07">
                  <h1 class="username-info-home-text06">Account Information</h1>
                  <div class="username-info-home-container08">
                    <div class="username-info-home-container09">
                      <div class="username-info-home-container10">
                        <div class="username-info-home-container11">
                          <div class="username-info-home-container12">
                            <h1 class="username-info-home-text07">
                              First Name:
                            </h1>
                            <span class="username-info-home-text08">
                              {user.firstName}
                            </span>
                          </div>
                          <div class="username-info-home-container13">
                            <h1 class="username-info-home-text09">
                              Middle Name:
                            </h1>
                            <span class="username-info-home-text10">
                              {user.middleName}
                            </span>
                          </div>
                          <div class="username-info-home-container14">
                            <h1 class="username-info-home-text11">
                              Last Name:
                            </h1>
                            <span class="username-info-home-text12">
                              {user.lastName}
                            </span>
                          </div>
                          <div class="username-info-home-container15">
                            <h1 class="username-info-home-text13">Email: </h1>
                            {isClicked === 'email' ? (
                              <div class="username-info-home-container16">
                                <input
                                  type="text"
                                  class="username-info-home-textinput1"
                                  onChange={(event) => {
                                    setEmail(event.target.value)
                                  }}
                                  value={email}
                                />
                                <span class="username-info-home-text24">
                                  <i
                                    className="fa fa-times fa-1x"
                                    onClick={() => {
                                      setIsClicked('not_clicked')
                                    }}
                                  ></i>
                                  <br />
                                </span>
                              </div>
                            ) : (
                              <div>
                                <span class="username-info-home-text14">
                                  {user.email}
                                </span>
                                <span class="username-info-home-text24">
                                  <i
                                    className="fa fa-pencil fa-1x"
                                    onClick={() => {
                                      setIsClicked('email')
                                    }}
                                  ></i>
                                  <br />
                                </span>
                              </div>
                            )}
                          </div>

                          <div class="username-info-home-container17">
                            <h1 class="username-info-home-text21">
                              Phone Number:
                            </h1>
                            {isClicked === 'phone' ? (
                              <div class="username-info-home-container18">
                                <input
                                  type="text"
                                  class="username-info-home-textinput2"
                                  onChange={(event) => {
                                    setPhoneNumber(event.target.value)
                                  }}
                                  value={phoneNumber}
                                />
                                <span class="username-info-home-text24">
                                  <i
                                    className="fa fa-times fa-1x"
                                    onClick={() => {
                                      setIsClicked('not_clicked')
                                    }}
                                  ></i>
                                  <br />
                                </span>
                              </div>
                            ) : (
                              <div>
                                <span class="username-info-home-text22">
                                  {user.phoneNumber}
                                </span>

                                <span class="username-info-home-text24">
                                  <i
                                    className="fa fa-pencil fa-1x"
                                    onClick={() => {
                                      setIsClicked('phone')
                                    }}
                                  ></i>
                                  <br />
                                </span>
                              </div>
                            )}
                          </div>

                          <span
                            class="username-info-home-text27"
                            id="updatterr"
                          >
                            <span onClick={handleSubmit}>Edit</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
