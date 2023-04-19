import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid3'>
          <div className='box'>
            <h1>Jemla</h1>
            <h1>ጅምላ</h1>  
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Addis abeba, Ethiopia</li>
              <li>Email: Biniyam.endeg@gmail.com</li>
              <li>Phone: +251 911715117</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
