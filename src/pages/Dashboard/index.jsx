import styled from "styled-components"
import Cards from "../../components/Cards"
import colors from "../../styles/colors"
import { Link } from "react-router-dom"
import RecentTransation from "../../components/RecentTransaction"

const DashboardContenair = styled.div`
  padding: 25px;
`

const HeadingContenair = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`

const SeeAll = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
  color: ${colors.primary2};
`

const Recent = styled.h2`
  margin-top: 20px;
`

//API JSON pour stocker le fetch de l'api Binance

function DashBoard() {
  return (
    <DashboardContenair>
      <HeadingContenair>
        <h2>My Cards</h2>
        <SeeAll to="">See All</SeeAll>
      </HeadingContenair>
      <Cards></Cards>
      <Recent>Recent Transaction</Recent>
      <RecentTransation />
    </DashboardContenair>
  )
}

export default DashBoard
