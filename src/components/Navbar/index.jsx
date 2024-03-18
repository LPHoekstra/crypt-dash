import styled from "styled-components"
import { ReactComponent as Logo } from "../../assets/component/Logo.svg"
import { ReactComponent as Dashboard } from "../../assets/component/NavBar/Dashboard.svg"
import { ReactComponent as Transactions } from "../../assets/component/NavBar/Transactions.svg"
import { ReactComponent as Accounts } from "../../assets/component/NavBar/Accounts.svg"
import { ReactComponent as Investments } from "../../assets/component/NavBar/Investments.svg"
import { ReactComponent as Setting } from "../../assets/component/NavBar/Setting.svg"
import close from "../../assets/component/NavBar/close.png"
import { useContext } from "react"
import { ConnectedContext, NavBarContext } from "../../context"
import { Link } from "react-router-dom"

const NavBarContenair = styled.div`
  position: absolute;
  background-color: white;
  height: 100%;
  width: 90%;
  z-index: 9999;
  transition: transform 200ms ease-in-out;
  transform: translateX(-400px);
  ${(props) =>
    props.$navBar
      ? "transform: translateX(0)"
      : "transform: translateX(-400px)"}
`

const LogoContenair = styled.div`
  display: flex;
  justify-content: center;
  gap: 9px;
  padding: 25px;
  margin-bottom: 50px;
`

const Text = styled.span`
  font-size: 20px;
  color: #b1b1b1;
  font-weight: 500;
`

const ItemContenair = styled(Link)`
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  margin-left: 30px;
  text-decoration: none;
`

function NavBar() {
  const { navBar, setNavBar } = useContext(NavBarContext)
  const { isConnected, setIsConnected } = useContext(ConnectedContext)

  const autoClose = () => {
    setNavBar(false)
  }
  // surlignement en bleu sur la page ou on est =>
  //    savoir sur quelle page on se trouve
  //    donner la colorations bleu
  //    ajouter le rectangle bleu sur la gauche
  return (
    <NavBarContenair $navBar={navBar}>
      <LogoContenair>
        <Logo />
        <h1>CryptDash.</h1>
        <img src={close} alt="close" height={30} onClick={autoClose} />
      </LogoContenair>
      <ItemContenair to="/" onClick={autoClose}>
        <Dashboard />
        <Text>Dashboard</Text>
      </ItemContenair>
      <ItemContenair to="/" onClick={autoClose}>
        <Transactions />
        <Text>Transactions</Text>
      </ItemContenair>
      <ItemContenair to="/" onClick={autoClose}>
        <Accounts />
        <Text>Accounts</Text>
      </ItemContenair>
      <ItemContenair to="/" onClick={autoClose}>
        <Investments />
        <Text>Investments</Text>
      </ItemContenair>
      <ItemContenair to="/setting" onClick={autoClose}>
        <Setting />
        <Text>Setting</Text>
      </ItemContenair>
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
    </NavBarContenair>
  )
}

export default NavBar
