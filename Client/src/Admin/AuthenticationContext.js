import { createContext, useState } from 'react'

const AuthenticationContext = createContext('')

export function AuthenticationProvider({ children }) {
  const [user, setUser] = useState({})
  const [retailers, setRetailers] = useState({})
  const [suppliers, setSuppliers] = useState({})
  const [company, setCompany] = useState({})
  const [products, setProducts] = useState({})

  // const [roles, setRoles] = useState('')
  console.log('USER ROLE: ', user.role)
  console.log('USER: ', user)
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        setUser,
        retailers,
        setRetailers,
        suppliers,
        setSuppliers,
        company,
        setCompany,
        products,
        setProducts,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContext
