/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import AuthenticationContext from '../../Admin/AuthenticationContext'
import ProductContext from '../../Admin/ProductContext'
import Swal from 'sweetalert2'

const Search = ({ CartItem }) => {
  const { user } = useContext(AuthenticationContext)
  const { setMyProducts, myProducts } = useContext(ProductContext)
  const [query, setQuery] = useState('')
  let history = useHistory()

  // fixed Header
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search')
    search.classList.toggle('active', window.scrollY > 100)
  })

  // searchProducts
  const searchProducts = async () => {
    try {
      const data = await axios.get(
        `http://localhost:7000/searchProducts/${query}`,
      )
      console.log(data)
      if (data.status === 200) {
        setMyProducts(data.data.foundProduct)
        history.push('/Listing')
      } else {
        Swal.fire('Sorry!', 'No products found', 'error')
      }

      // setProduct(data.data)
    } catch (e) {
      console.log(e)
    }
  }
  console.log('MY PRODUCTS', myProducts)

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          {/* <Link to="/">
            <img className="header-logo-h" src="./images/jemla-logo.png" />
          </Link> */}
          <Link to="/Home">
            <img className="header-logo-h" src="./images/jemla-wh.png" />
          </Link>

          <div className="search-box f_flex">
            <input
              type="text"
              placeholder="Search and hit enter..."
              onChange={(e) => {
                setQuery(e.target.value)
              }}
              value={query}
            />
            {/* <Link to="/Listing"> </Link> */}
            <span
              onClick={() => {
                searchProducts()
              }}
            >
              <i className="fa fa-search"></i>
            </span>
          </div>

          <div className="icon f_flex width">
            <Link to="/userProfile1">
              <i className="fa icon-circle fa-2x">
                <img
                  className="proPic"
                  src={`http://localhost:7000/profile_pictures/${user.profilePicture[0]}`}
                />
              </i>
            </Link>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                {CartItem.length === 0 ? <span>0</span> : <span>1</span>}
              </Link>
            </div>
          </div>
          <Link to="/">
            <i className="fa fa-sign-out fa-2x ">
              <span className="logout-text">Logout</span>
            </i>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Search
