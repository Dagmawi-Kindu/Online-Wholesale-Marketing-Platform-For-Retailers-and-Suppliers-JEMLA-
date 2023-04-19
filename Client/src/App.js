import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './common/header/Header'
import Pages from './pages/Pages'
import Data from './components/Data'
import Cart from './common/Cart/Cart'
import Footer from './common/footer/Footer'
import Sdata from './components/shops/Sdata'
import Listing from './components/Listing/Listing'
import Header2 from './common/header/Header2'
import AddProduct from './Admin/AddProduct'
import UpdateProduct from './Admin/updateProduct'
import Companyinfo from './components/Companyinfo/Companyinfo'
import Sidebar from './Admin/Sidebar'
import ListProduct from './Admin/ListProduct'
import CompanyInformation from './Admin/CompanyInformation'
import Feedback from './Admin/Feedback'
import Feedback2 from './Admin/Feedback'
import ManageFeedback from './Admin/ManageFeedback'
import UserProfile from './Admin/userProfile'
import AuthenticationContext from './Admin/AuthenticationContext'
import AdminHeader from './Admin/Admin/Header'
import AdminSidebar from './Admin/Admin/Sidebar'
import AdminUserManagement from './Admin/Admin/AdminUserManagement'
import { ProductProvider } from './Admin/ProductContext'
import { AuthenticationProvider } from './Admin/AuthenticationContext'
import { useContext } from 'react'
import Login from './Admin/Login'
import Signup from './Admin/Signup'
import AdminRetailerManagement from './Admin/Admin/AdminRetailerManagement'
import AdminSupplierManagement from './Admin/Admin/AdminSupplierManagement'
import SecondAdminHeader from './Admin/Admin/Header1'
import Payment from './components/payment/payment'
import SupplierDashboard from './components/supplier dashboard/SupplierDashboard'
import ManageCompanyInformation from './Admin/ManageCompanyInformation'
import UpdateCompanyInformation from './Admin/UpdateCompanyInformation'
import Statistics from './Admin/Admin/Statistics'
import axios from 'axios'
import AdminStat from './Admin/Admin/AdminStat/AdminStat'
function App() {
  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (id) => {
    console.log('MY ID: ', id)
    axios
      .get(`http://localhost:7000/getProducts/${id}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log(res.data.foundProduct)
        setCartItem(res.data.foundProduct)
      })
  }

  return (
    <>
      <AuthenticationProvider>
        <ProductProvider>
          <Router>
            {/* Login */}
            <Route path="/" exact>
              <Login />
            </Route>
            {/* Signup */}
            <Route path="/Signup" exact>
              <Signup />
            </Route>
            {/* Home */}
            <Route path="/Home" exact>
              <Header CartItem={CartItem} />
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
              />
              <Footer />
            </Route>
            <Route path="/cart" exact>
              <Header CartItem={CartItem} />
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                //decreaseQty={decreaseQty}
              />
              <Footer />
            </Route>
            <Route path="/userProfile1" exact>
              <Header CartItem={CartItem} />
              <UserProfile />
            </Route>
            <Route path="/userProfile2" exact>
              <SecondAdminHeader />
              <UserProfile />
            </Route>

            <Route path="/CompanyInfo">
              <Header CartItem={CartItem} />
              <Companyinfo />
            </Route>

            {/* Payment */}
            <Route path="/payment" exact>
              <Payment />
            </Route>

            <Route path="/Listing">
              <Header CartItem={CartItem} />
              <Listing />
              <Footer />
            </Route>

            <Route path="/supplier_dashboard">
              <SecondAdminHeader />
              <SupplierDashboard />
            </Route>

            {/* Add product*/}
            <Route path="/addproduct">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              <AddProduct />
              {/* <Sidebar /> */}
            </Route>
            {/* Update product*/}
            <Route path="/updateproduct">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              <UpdateProduct />
              {/* <Sidebar /> */}
            </Route>
            {/*ADD company profile*/}
            <Route path="/editcompanyprofile">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              {/* <Sidebar /> */}
              <CompanyInformation />
            </Route>
            {/*UPDATE company profile*/}
            <Route path="/updatecompanyinfo">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              {/* <Sidebar /> */}
              <UpdateCompanyInformation />
            </Route>
            {/*Manage company info*/}
            <Route path="/managecompanyinfo">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              {/* <Sidebar /> */}
              <ManageCompanyInformation />
            </Route>
            {/* Manage product*/}
            <Route path="/manageproduct">
              {/* <Header2 /> */}
              <SecondAdminHeader />
              {/* <Sidebar /> */}
              <ListProduct />
            </Route>
            {/* Feedback*/}
            <Route path="/feedback">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              {/* <Sidebar /> */}
              <Feedback />
            </Route>
            {/* Feedback 2*/}
            <Route path="/feedback2">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              {/* <Sidebar /> */}
              <Feedback2 />
            </Route>
            <Route path="/managefeedback">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              {/* <Sidebar /> */}
              <ManageFeedback />
            </Route>
            <Route path="/viewstatistics">
              <SecondAdminHeader />
              {/* <Header2 /> */}
              {/* <Sidebar /> */}
              <Statistics />
            </Route>

            {/* Admin Dashboard*/}
            <Route path="/admin_dashboard">
              <SecondAdminHeader />
              <AdminUserManagement />
            </Route>

            <Route path="/adminstats">
              <SecondAdminHeader />
              <AdminStat />
            </Route>

            <Route path="/retailers">
              <SecondAdminHeader />
              <AdminRetailerManagement />
            </Route>

            <Route path="/suppliers">
              <SecondAdminHeader />
              <AdminSupplierManagement />
            </Route>

            {/* Sign in or Sign up*/}
          </Router>
        </ProductProvider>
      </AuthenticationProvider>
    </>
  )
}

export default App
