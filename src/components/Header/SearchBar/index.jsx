import styled from "styled-components"
import colors from "../../../styles/colors"
import { useState } from "react"
import { ReactComponent as SearchIcon } from "../../../assets/searchIcon.svg"

const SearchBarContenair = styled.div`
  position: relative;
  height: 40px;
  margin-top: 20px;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`

const Search = styled.input`
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

function SearchBar() {
  // cache le text "Search for something" dans la bar de recherche
  const [hideOnFocus, setHideOnFocus] = useState(false)

  return (
    <SearchBarContenair>
      <Search
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
  )
}

export default SearchBar
