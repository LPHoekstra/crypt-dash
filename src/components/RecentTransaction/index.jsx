// import { useFetch } from "../../hooks"

import styled from "styled-components"
import colors from "../../styles/colors"

const Main = styled.div`
  height: 100%;
  width: 100%;
`

const Contenair = styled.div`
  background-color: ${colors.moduleBackground};
  border-radius: 25px;
  padding: 20px;
  margin-top: 15px;
`

const Title = styled.h2`
  margin-top: 40px;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`

function RecentTransation() {
  // const test = useFetch("")
  // const userAsset = test.data

  return (
    <Main>
      <Title>Recent Transaction</Title>
      <Contenair>
        <h1>Bonjour ceci est en construction et arrive prochainement</h1>
      </Contenair>
    </Main>
  )
}

export default RecentTransation
