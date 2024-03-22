import styled from "styled-components"
import { ReactComponent as IconMenu } from "../../assets/iconMenu.svg"
import logo from "../../assets/image/Murky.jpg"
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg"
import colors from "../../styles/colors"
import { useContext, useEffect, useState } from "react"
import { ConnectedContext, NavBarContext } from "../../context"
import { Link, useLocation } from "react-router-dom"

const HeaderBloc = styled.header`
  padding: 25px 25px 20px 25px;
`

const HeaderContenair = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 35px;
  height: 35px;
`

const SearchBarContenair = styled.div`
  position: relative;
  height: 40px;
  margin-top: 20px;
`

const SearchBar = styled.input`
  border-radius: 40px;
  height: 100%;
  width: 100%;
  border: none;
  background-color: ${colors.searchBarBackground};
  padding: 12px 45px;
`

const PlaceHolder = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  top: 50%;
  left: 20px;
  transform: translate(0, -50%);
  pointer-events: none;
`

const SearchSomething = styled.span`
  color: ${colors.searchBarText};
  display: ${(props) => (props.$hideOnFocus ? "none" : "inline")};
`

function Header() {
  // cache le text "Search for something" dans la bar de recherche
  const [hideOnFocus, setHideOnFocus] = useState(false)
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
        <div onClick={() => setNavBar(true)}>
          <IconMenu />
        </div>
        <h1>{page === "" ? "Overview" : page}</h1>
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
      <SearchBarContenair>
        <SearchBar
          type="search"
          name="searchbar"
          id="searchbar"
          onFocus={() => setHideOnFocus(true)}
          onBlur={(event) => {
            setHideOnFocus(false)
            event.target.value = ""
          }}
        />
        <PlaceHolder>
          <SearchIcon />
          <SearchSomething $hideOnFocus={hideOnFocus}>
            Search for something
          </SearchSomething>
        </PlaceHolder>
      </SearchBarContenair>
    </HeaderBloc>
  )
}

export default Header
