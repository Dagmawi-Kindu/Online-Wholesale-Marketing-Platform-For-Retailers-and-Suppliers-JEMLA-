/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from 'react'
import './Header1.css'
import { Link } from 'react-router-dom'
import AuthenticationContext from '../AuthenticationContext'

function SecondAdminHeader() {
  const { user } = useContext(AuthenticationContext)

  return (
    <div class="admin-header">
      <Link to="/">
        <img class="header-logo-h" src="./images/jemla-bl.png" />
      </Link>
      <div className="right-side">
        <Link to="/userProfile2">
          <img
            className="admin-photo1"
            src={`http://localhost:7000/profile_pictures/${user.profilePicture[0]}`}
          />
        </Link>
        <div className="user-infoss">
          <span>
            {user.firstName} {user.middleName}
          </span>
          <br />
          <span>{user.role}</span>
        </div>
        <Link to="/">
          <i className="fa fa-sign-out fa-2x header2logu">
            <span className="logout-text-h2">Logout</span>
          </i>
        </Link>
      </div>
    </div>
  )
}

export default SecondAdminHeader
