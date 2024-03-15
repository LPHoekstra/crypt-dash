import { createContext, useEffect, useState } from "react"

export const NavBarContext = createContext()

export const NavBarProvider = ({ children }) => {
  const [navBar, setNavBar] = useState(false)

  return (
    <NavBarContext.Provider value={{ navBar, setNavBar }}>
      {children}
    </NavBarContext.Provider>
  )
}

export const ConnectedContext = createContext()

export const ConnectedProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    setIsConnected(true)

    const timeout = setTimeout(() => {
      setIsConnected(false)
    }, 3600000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <ConnectedContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </ConnectedContext.Provider>
  )
}
