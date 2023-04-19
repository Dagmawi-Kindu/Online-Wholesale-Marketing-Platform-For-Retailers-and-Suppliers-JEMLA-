import React from 'react'
import './Header2.css'
import { Link } from 'react-router-dom'

function Header2() {
  return (
    <div className="header">
      {/* Logo*/}
      <Link to="/">
        <img
          className="header-logo"
          src="https://1000logos.net/wp-content/uploads/2018/10/Alibaba-Logo-500x281.png"
        />
      </Link>
    </div>
  )
}

export default Header2
