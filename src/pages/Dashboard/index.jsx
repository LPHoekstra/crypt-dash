import styled from "styled-components"
import Cards from "../../components/Cards"
import colors from "../../styles/colors"
import { Link, Navigate } from "react-router-dom"
import RecentTransation from "../../components/RecentTransaction"
import { useContext } from "react"
import { ConnectedContext } from "../../context"
import BalanceHistory from "../../components/BalanceHistory"

const DashboardContenair = styled.div`
  padding: 25px;
  background-color: ${colors.background};
`

const FirstContenair = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 30px;
  }
`

const CardsContenair = styled.div`
  height: 100%;
  width: 100%;
`

const HeadingContenairCards = styled.div`
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

function DashBoard() {
  const { isConnected } = useContext(ConnectedContext)

  return isConnected ? (
    <DashboardContenair>
      <FirstContenair>
        <CardsContenair>
          <HeadingContenairCards>
            <h2>My Cards</h2>
            <SeeAll to="">See All</SeeAll>
          </HeadingContenairCards>
          <Cards />
        </CardsContenair>
        <RecentTransation />
      </FirstContenair>
      <BalanceHistory />
    </DashboardContenair>
  ) : (
    <Navigate to="/login" />
  )
}

export default DashBoard
