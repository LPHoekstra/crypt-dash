import styled from "styled-components"
import { ReactComponent as Logo } from "../../assets/component/Logo.svg"
import { ReactComponent as Dashboard } from "../../assets/component/NavBar/Dashboard.svg"
import { ReactComponent as Transactions } from "../../assets/component/NavBar/Transactions.svg"
import { ReactComponent as Accounts } from "../../assets/component/NavBar/Accounts.svg"
import { ReactComponent as Investments } from "../../assets/component/NavBar/Investments.svg"
import close from "../../assets/component/NavBar/close.png"
import { useContext } from "react"
import { NavBarContext } from "../../context"

const NavBarContenair = styled.div`
  position: absolute;
  background-color: white;
  height: 100%;
  width: 90%;
  z-index: 9999;
  transition: transform 400ms ease-in-out;
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

const ItemContenair = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  margin-left: 30px;
`

function NavBar() {
  const { navBar, setNavBar } = useContext(NavBarContext)

  // surlignement en bleu sur la page ou on est =>
  //    savoir sur quelle page on se trouve
  //    donner la colorations bleu
  //    ajouter le rectangle bleu sur la gauche
  return (
    <NavBarContenair $navBar={navBar}>
      <LogoContenair>
        <Logo />
        <h1>CryptDash.</h1>
        <img
          src={close}
          alt="close"
          height={30}
          onClick={() => setNavBar(false)}
        />
      </LogoContenair>
      <ItemContenair>
        <Dashboard />
        <Text>Dashboard</Text>
      </ItemContenair>
      <ItemContenair>
        <Transactions />
        <Text>Transactions</Text>
      </ItemContenair>
      <ItemContenair>
        <Accounts />
        <Text>Accounts</Text>
      </ItemContenair>
      <ItemContenair>
        <Investments />
        <Text>Investments</Text>
      </ItemContenair>
    </NavBarContenair>
  )
}

export default NavBar
