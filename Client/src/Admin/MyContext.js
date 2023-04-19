import { createContext, useState } from 'react'

const MyContext = createContext()

export function MyContextProvider({ children }) {
  return <MyContext.Provider value={{ item: 1 }}>{children}</MyContext.Provider>
}

export default MyContext
