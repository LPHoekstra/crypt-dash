import { createContext, useEffect, useState } from "react"

// cache ou masque le navBar selon le context
export const NavBarContext = createContext()

export const NavBarProvider = ({ children }) => {
  const [navBar, setNavBar] = useState(false)

  return (
    <NavBarContext.Provider value={{ navBar, setNavBar }}>
      {children}
    </NavBarContext.Provider>
  )
}

export const ActualisationContext = createContext()

export const ActualisationProvider = ({ children }) => {
  const [actualisationDonnees, setActualisationDonnees] = useState(false)

  return (
    <ActualisationContext.Provider
      value={{ actualisationDonnees, setActualisationDonnees }}
    >
      {children}
    </ActualisationContext.Provider>
  )
}

// Context de vérification de connexion si cookie "token" est présent
export const ConnectedContext = createContext()

export const ConnectedProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const cookies = document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      // Vérifie si le cookie commence par le nom spécifié
      if (cookie.startsWith(`token=`)) {
        // Récupère la valeur du cookie en excluant le nom
        setIsConnected(true)
        console.log("connecté !")
      } else {
        // Si le cookie spécifié n'est pas trouvé, l'utilisateur n'est pas connecté
        setIsConnected(false)
        console.log("non connecté !")
      }
    }
  }, [])

  return (
    <ConnectedContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </ConnectedContext.Provider>
  )
}
