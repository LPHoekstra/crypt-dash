import styled from "styled-components"
import { ReactComponent as IconMenu } from "../../assets/iconMenu.svg"
import logo from "../../assets/image/Murky.jpg"
import colors from "../../styles/colors"
import { useContext } from "react"
import { ConnectedContext, NavBarContext } from "../../context"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import { usePage } from "../../hooks"

const Headers = styled.header`
  padding: 25px 25px 20px 25px;

  @media screen and (min-width: 1024px) {
    border-bottom: 1px solid ${colors.border};
  }
`

const HeaderContenair = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const OpenNavBar = styled.div`
  display: block;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const Option = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 30px;
  }
`

const Logo = styled.img`
  width: 35px;
  height: 35px;
`

const SearchBarContenair1 = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`

const SearchBarContenair2 = styled.div`
  display: block;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

function Header() {
  const { isConnected } = useContext(ConnectedContext)
  const { setNavBar } = useContext(NavBarContext)
  const page = usePage()

  return (
    <Headers>
      <HeaderContenair>
        {/* localisation de la page et ouverture du navbar mobile */}
        <OpenNavBar data-testid="nav" onClick={() => setNavBar(true)}>
          <IconMenu />
        </OpenNavBar>
        <h1>{page}</h1>

        {/* bloc header droite desktop */}
        <Option>
          <SearchBarContenair1>
            <SearchBar />
          </SearchBarContenair1>
          {isConnected === true ? (
            <Link to="/Setting">
              <Logo src={logo} alt="Logo" />
            </Link>
          ) : (
            <Link to="/login">
              <Logo src={logo} alt="Logo" />
            </Link>
          )}
        </Option>
      </HeaderContenair>

      {/* search bar mobile */}
      <SearchBarContenair2>
        <SearchBar />
      </SearchBarContenair2>
    </Headers>
  )
}

export default Header
