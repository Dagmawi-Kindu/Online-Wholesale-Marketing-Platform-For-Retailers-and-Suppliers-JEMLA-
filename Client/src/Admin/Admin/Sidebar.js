import React from 'react'
import './Sidebar.css'
import './style.css'
import { Link } from 'react-router-dom';


function AdminSidebar(){
    return (
        <div class="sidebar-container">
          <div class="item-container list-item">
              <Link to='/' >
                  <span class="sidebar-link">Retailer</span>
              </Link>
          </div>
          <div class="item-container list-item">
              <Link to='/' >
                  <span class="sidebar-link">Supplier</span>
              </Link>
          </div>
        </div>        

    )
}

export default AdminSidebar