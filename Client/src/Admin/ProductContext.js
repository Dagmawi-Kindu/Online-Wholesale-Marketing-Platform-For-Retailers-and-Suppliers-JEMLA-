import { createContext, useState } from 'react'

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [items, setItems] = useState('')
  const [myProducts, setMyProducts] = useState({})
  const [allProducts, setAllProducts] = useState({})
  const addToProdDescription = (prodID) => {
    //   (prevState) => [...prevState, prodID]
    setItems(prodID)
  }
  console.log(items)

  //   var x = []
  //   x.push(Object.values(items))
  //   console.log(x[0].slice(-1))

  return (
    <ProductContext.Provider
      value={{
        items,
        addToProdDescription,
        myProducts,
        setMyProducts,
        allProducts,
        setAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
