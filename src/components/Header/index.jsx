import styled from "styled-components"
import { ReactComponent as IconMenu } from "../../assets/iconMenu.svg"
import logo from "../../assets/image/Murky.jpg"
import colors from "../../styles/colors"
import { useContext, useEffect, useState } from "react"
import { ConnectedContext, NavBarContext } from "../../context"
import { Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"

const HeaderBloc = styled.header`
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
  // sur quelle page on se situe
  const [page, setPage] = useState()
  const location = useLocation()

  const { setNavBar } = useContext(NavBarContext)
  const { isConnected } = useContext(ConnectedContext)

  useEffect(() => {
    const firstLetterMaj = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const path = location.pathname.split("/")
    const final = path[1]
    const addressMaj = firstLetterMaj(final)
    setPage(addressMaj)
  }, [location.pathname])

  return (
    <HeaderBloc>
      <HeaderContenair>
        <OpenNavBar onClick={() => setNavBar(true)}>
          <IconMenu />
        </OpenNavBar>
        <h1>{page === "" ? "Overview" : page}</h1>
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
      </HeaderContenair>
      <SearchBarContenair2>
        <SearchBar />
      </SearchBarContenair2>
    </HeaderBloc>
  )
}

export default Header
