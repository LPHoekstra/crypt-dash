import styled from "styled-components"
import Cards from "../../components/Cards"

const DashboardContenair = styled.div`
  padding: 25px;
`

function DashBoard() {
  return (
    <DashboardContenair>
      <Cards></Cards>
    </DashboardContenair>
  )
}

export default DashBoard
