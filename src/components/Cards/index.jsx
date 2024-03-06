import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../styles/colors"

const HeadingContenair = styled.div`
  display: flex;
  justify-content: space-between;
`

const SeeAll = styled(Link)`
  font-size: 20px;
  text-decoration: underline;
  color: ${colors.primary2};
`

function Cards() {
  return (
    <div>
      <HeadingContenair>
        <h2>My Cards</h2>
        <SeeAll to="">See All</SeeAll>
      </HeadingContenair>
    </div>
  )
}

export default Cards
