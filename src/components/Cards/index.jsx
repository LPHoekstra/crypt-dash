import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../styles/colors"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import "swiper/css/free-mode"
import "swiper/css"

const HeadingContenair = styled.div`
  display: flex;
  justify-content: space-between;
`

const SeeAll = styled(Link)`
  font-size: 20px;
  text-decoration: underline;
  color: ${colors.primary2};
`
const PremiereCards = styled.div`
  background-color: ${colors.primary3};
  height: 100%;
  width: 100%;
  border-radius: 15px;
`

const DeuxiemeCards = styled.div`
  border: solid 1px #dfeaf2;
  border-radius: 15px;
  height: 100%;
  width: 100%;
`

const Slide = styled(SwiperSlide)`
  height: 170px;
`

function Cards() {
  return (
    <div>
      <HeadingContenair>
        <h2>My Cards</h2>
        <SeeAll to="">See All</SeeAll>
      </HeadingContenair>
      <Swiper
        spaceBetween={20}
        width={265}
        freeMode={true}
        modules={[FreeMode]}
      >
        <Slide>
          <PremiereCards>1</PremiereCards>
        </Slide>
        <Slide>
          <DeuxiemeCards>2</DeuxiemeCards>
        </Slide>
      </Swiper>
    </div>
  )
}

export default Cards
