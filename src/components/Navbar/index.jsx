import styled from "styled-components"
import { ReactComponent as Logo } from "../../assets/component/Logo.svg"
import { ReactComponent as Dashboard } from "../../assets/component/NavBar/Dashboard.svg"

const NavBarContenair = styled.div`
  position: absolute;
  background-color: white;
  height: 100%;
  width: 90%;
`

const LogoContenair = styled.div`
  display: flex;
  justify-content: center;
  gap: 9px;
`

const ItemContenair = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
`

function NavBar() {
  return (
    <NavBarContenair>
      <LogoContenair>
        <Logo />
        <h1>CryptDash.</h1>
      </LogoContenair>
      <ItemContenair>
        <Dashboard />
        <h3>Dashboard</h3>
      </ItemContenair>
      <ItemContenair>
        <Dashboard />
        <h3>Dashboard</h3>
      </ItemContenair>
      <ItemContenair>
        <Dashboard />
        <h3>Dashboard</h3>
      </ItemContenair>
      <ItemContenair>
        <Dashboard />
        <h3>Dashboard</h3>
      </ItemContenair>
    </NavBarContenair>
  )
}

export default NavBar
