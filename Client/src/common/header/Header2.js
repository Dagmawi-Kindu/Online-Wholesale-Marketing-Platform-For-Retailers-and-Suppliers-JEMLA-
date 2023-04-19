import React from 'react'
import './Header2.css'
import { Link } from 'react-router-dom'

function Header2() {
  return (
    <div className="header">
      {/* Logo*/}
      <Link to="/">
        <img className="header-logo" src="./images/jemla-wh" />
      </Link>
      <Link to="/">
            <i className="fa fa-sign-out fa-2x ">
              <span className="logout-text">Logout</span>
            </i>
          </Link>
    </div>
  )
}

export default Header2
