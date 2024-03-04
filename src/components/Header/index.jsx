import styled from "styled-components"

const HeaderContenair = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`

function Header() {
  return (
    <header>
      <HeaderContenair>
        <div>=</div>
        <h1>Overview</h1>
        <img src="" alt="" />
      </HeaderContenair>
    </header>
  )
}

export default Header
