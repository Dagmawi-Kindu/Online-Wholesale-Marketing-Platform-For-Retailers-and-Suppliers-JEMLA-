import React from 'react'
import './Sidebar.css'
import './style.css'
import { Link } from 'react-router-dom'
import image from './images/office-building.png'

function Sidebar() {
  return (
    <div class="sidebar-container">
      <div data-thq="thq-dropdown" class="sidebar-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" class="sidebar-dropdown-toggle">
          <svg viewBox="0 0 950.8571428571428 1024" class="home-icon">
            <path d="M804.571 566.857v274.286c0 20-16.571 36.571-36.571 36.571h-219.429v-219.429h-146.286v219.429h-219.429c-20 0-36.571-16.571-36.571-36.571v-274.286c0-1.143 0.571-2.286 0.571-3.429l328.571-270.857 328.571 270.857c0.571 1.143 0.571 2.286 0.571 3.429zM932 527.429l-35.429 42.286c-2.857 3.429-7.429 5.714-12 6.286h-1.714c-4.571 0-8.571-1.143-12-4l-395.429-329.714-395.429 329.714c-4 2.857-8.571 4.571-13.714 4-4.571-0.571-9.143-2.857-12-6.286l-35.429-42.286c-6.286-7.429-5.143-19.429 2.286-25.714l410.857-342.286c24-20 62.857-20 86.857 0l139.429 116.571v-111.429c0-10.286 8-18.286 18.286-18.286h109.714c10.286 0 18.286 8 18.286 18.286v233.143l125.143 104c7.429 6.286 8.571 18.286 2.286 25.714z"></path>
          </svg>
          <Link to="/">
            <span class="sidebar-link">Home</span>
          </Link>
        </div>
      </div>

      <div data-thq="thq-dropdown" class="sidebar-thq-dropdown1 list-item">
        <div data-thq="thq-dropdown-toggle" class="sidebar-dropdown-toggle6">
          <svg viewBox="0 0 1024 1024" class="home-icon">
            <path d="M657.143 435.429c0 42.286-34.286 76.571-77.143 76.571v0h-144.571v-153.714h144.571c42.857 0 77.143 34.286 77.143 77.143zM759.429 435.429c0-99.429-80-179.429-179.429-179.429v0h-247.429v512h102.857v-153.714h144.571c99.429 0 179.429-80 179.429-178.857zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
          </svg>
          <span class="sidebar-link">Products</span>
          <div
            data-thq="thq-dropdown-arrow"
            class="sidebar-dropdown-arrow1"
          ></div>
        </div>
        <ul data-thq="thq-dropdown-list" class="sidebar-dropdown-list1">
          <li data-thq="thq-dropdown" class="sidebar-dropdown5 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              class="sidebar-dropdown-toggle7"
            >
              <Link to="/Addproduct">
                <span class="sidebar-link">Add new product</span>
              </Link>
            </div>
          </li>
          <li data-thq="thq-dropdown" class="sidebar-dropdown6 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              class="sidebar-dropdown-toggle8"
            >
              <Link to="/manage_product">
                <span class="sidebar-link">Manage product</span>
              </Link>
            </div>
          </li>
          <li data-thq="thq-dropdown" class="sidebar-dropdown7 list-item"></li>
        </ul>
      </div>

      <div data-thq="thq-dropdown" class="sidebar-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" class="sidebar-dropdown-toggle">
          <img src={image} alt="" class="home-icon" />
          <Link to="/editcompanyprofile">
            <span class="sidebar-link">Company</span>
          </Link>
        </div>
      </div>

      <div data-thq="thq-dropdown" class="sidebar-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" class="sidebar-dropdown-toggle">
          <svg viewBox="0 0 1024 1024" class="home-icon">
            <path d="M554 426v-170h-84v170h84zM554 598v-86h-84v86h84zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
          </svg>
          <Link to="/feedback">
            <span class="sidebar-link">Feedback</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
