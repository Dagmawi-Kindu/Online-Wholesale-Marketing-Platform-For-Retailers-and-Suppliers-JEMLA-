/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import AuthenticationContext from '../AuthenticationContext'

function AdminHeader() {
  const { user } = useContext(AuthenticationContext)
  return (
    <div class="admin-header">
      <Link to="/">
        <img class="header-logo-h" src="./images/jemla-wh.png" />
      </Link>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for a user"
      />
      <Link to="/userProfile">
        <img
          className="admin-photo"
          src={`http://localhost:7000/profile_pictures/${user.profilePicture[0]}`}
        />
      </Link>
    </div>
  )
}

export default AdminHeader
