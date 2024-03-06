import styled from "styled-components"
import { ReactComponent as IconMenu } from "../../assets/iconMenu.svg"
import logo from "../../assets/image/Murky.jpg"
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg"
import colors from "../../styles/colors"
import { useContext, useState } from "react"
import { NavBarContext } from "../../context"

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

  &:focus {
    outline-color: ${colors.primary2};
  }
`

const PlaceHolder = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  top: 50%;
  left: 20px;
  transform: translate(0, -50%);
`

const Test = styled.span`
  color: ${colors.searchBarText};
  display: ${(props) => (props.$hideOnFocus ? "none" : "inline")};
`

function Header() {
  const [hideOnFocus, setHideOnFocus] = useState(false)
  const { setNavBar } = useContext(NavBarContext)

  return (
    <HeaderBloc>
      <HeaderContenair>
        <div onClick={() => setNavBar(true)}>
          <IconMenu />
        </div>
        <h1>Overview</h1>
        <Logo src={logo} alt="Logo" />
      </HeaderContenair>
      <SearchBarContenair>
        <SearchBar
          type="search"
          name="searchbar"
          id="searchbar"
          onFocus={() => setHideOnFocus(true)}
          onBlur={() => setHideOnFocus(false)}
        />
        <PlaceHolder>
          <SearchIcon />
          <Test $hideOnFocus={hideOnFocus}>Search for something</Test>
        </PlaceHolder>
      </SearchBarContenair>
    </HeaderBloc>
  )
}

export default Header
