import styled from "styled-components"
import { ReactComponent as Logo } from "../../assets/component/Logo.svg"
import { ReactComponent as Dashboard } from "../../assets/component/NavBar/Dashboard.svg"
import { ReactComponent as Transactions } from "../../assets/component/NavBar/Transactions.svg"
import { ReactComponent as Accounts } from "../../assets/component/NavBar/Accounts.svg"
import { ReactComponent as Investments } from "../../assets/component/NavBar/Investments.svg"
import { ReactComponent as Setting } from "../../assets/component/NavBar/Setting.svg"
import { ReactComponent as CreditCards } from "../../assets/component/NavBar/CreditCards.svg"
import close from "../../assets/component/NavBar/close.png"
import { useContext, useEffect, useState } from "react"
import { ConnectedContext, NavBarContext } from "../../context"
import { Link, useLocation } from "react-router-dom"
import Cookies from "js-cookie"
import address from "../../styles/address"
import colors from "../../styles/colors"

const NavBarContenair = styled.div`
  position: absolute;
  background-color: white;
  height: 100%;
  width: 300px;
  z-index: 9999;
  transition: transform 200ms ease-in-out;
  ${(props) =>
    props.$navBar
      ? "transform: translateX(0)"
      : "transform: translateX(-300px)"}
`

const LogoContenair = styled.div`
  display: flex;
  justify-content: center;
  gap: 9px;
  padding: 25px;
  margin-bottom: 10px;
`

const Text = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
`

const ItemContenair = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: ${colors.notSelectedNavBar};
  ${(props) =>
    props.$selected
      ? `
  color: ${colors.selected};
  path {
    fill: ${colors.selected}
  }
  `
      : null}
`

const Rectangle = styled.div`
  height: 50px;
  width: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-right: 25px;
  ${(props) =>
    props.$selected
      ? `background-color: ${colors.primary3};`
      : `background-color: ${colors.moduleBackground};`}
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
`

const Actualisation = styled.button`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`

function NavBar() {
  const Tabs = {
    dashboard: "Dashboard",
    transactions: "Transactions",
    accounts: "Accounts",
    investments: "Investments",
    creditCards: "Credit Cards",
    setting: "Setting",
  }
  // récupération de l'address actuelle
  const location = useLocation()
  // USE
  const [onglet, setOnglet] = useState(location.pathname)
  const { navBar, setNavBar } = useContext(NavBarContext)
  const { isConnected, setIsConnected } = useContext(ConnectedContext)
  // changement de location au changement de page
  useEffect(() => {
    setOnglet(location.pathname)
  }, [location.pathname])

  const autoClose = () => {
    setNavBar(false)
  }

  const actualisation = () => {
    const token = Cookies.get("token")

    fetch(`${address.serveur}/api/binance/snapshot`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau")
        }

        return console.log(response.body)
      })
      .catch((error) => console.error(error))
  }

  // surlignement en bleu sur la page ou on est =>
  //    savoir sur quelle page on se trouve /
  //    donner la colorations bleu /
  //    ajouter le rectangle bleu sur la gauche
  return (
    <NavBarContenair $navBar={navBar}>
      <LogoContenair>
        <Logo />
        <h1>CryptDash.</h1>
        <img src={close} alt="close" height={30} onClick={autoClose} />
      </LogoContenair>
      <Item>
        <ItemContenair to="/" onClick={autoClose} $selected={onglet === "/"}>
          <Rectangle $selected={onglet === "/"} />
          <Dashboard />
          <Text>{Tabs.dashboard}</Text>
        </ItemContenair>
        <ItemContenair to="/" onClick={autoClose}>
          <Rectangle $selected={onglet === "/t"} />
          <Transactions />
          <Text>{Tabs.transactions}</Text>
        </ItemContenair>
        <ItemContenair to="/" onClick={autoClose}>
          <Rectangle $selected={onglet === "/t"} />
          <Accounts />
          <Text>{Tabs.accounts}</Text>
        </ItemContenair>
        <ItemContenair to="/" onClick={autoClose}>
          <Rectangle $selected={onglet === "/t"} />
          <Investments />
          <Text>{Tabs.investments}</Text>
        </ItemContenair>
        <ItemContenair to="/" onClick={autoClose}>
          <Rectangle $selected={onglet === "/t"} />
          <CreditCards />
          <Text>{Tabs.creditCards}</Text>
        </ItemContenair>
        <ItemContenair
          to="/setting"
          onClick={autoClose}
          $selected={onglet === "/setting"}
        >
          <Rectangle $selected={onglet === "/setting"} />
          <Setting />
          <Text>{Tabs.setting}</Text>
        </ItemContenair>
        <Actualisation onClick={actualisation}>
          Actualiser les données
        </Actualisation>
        {isConnected === true ? (
          <Link
            to="/login"
            onClick={() => {
              setIsConnected(false)
              document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
              setNavBar(false)
            }}
          >
            <h4>Se déconnecter</h4>
          </Link>
        ) : null}
      </Item>
    </NavBarContenair>
  )
}

export default NavBar
