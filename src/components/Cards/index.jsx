import styled from "styled-components"
import colors from "../../styles/colors"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import "swiper/css/free-mode"
import "swiper/css"
import { useFetch } from "../../hooks"
import address from "../../styles/address"

const PremiereCards = styled.div`
  background-image: ${colors.blueGradientCard};
  height: 100%;
  width: 100%;
  border-radius: 15px;
`

const PremiereCardsContenair = styled.div`
  color: ${colors.cardsText1};
  font-family: "Lato", sans-serif;
  padding: 20px;
`

const Balance = styled.div`
  margin-bottom: 23px;

  p {
    font-size: 11px;
    font-weight: 400;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }
`

const Compte = styled.div`
  p {
    font-weight: 400;
    font-size: 10px;
  }

  span {
    font-weight: 600;
    fint-size: 13px;
  }
`

const Id = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin-top: 30px;
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
  const response = useFetch(`${address.serveur}/api/donnees/snapshot`)
  const data = response.data
  console.log(data)

  return (
    <div>
      <Swiper
        spaceBetween={20}
        width={265}
        freeMode={true}
        modules={[FreeMode]}
      >
        <Slide>
          <PremiereCards>
            <PremiereCardsContenair>
              <Balance>
                <p>Balance</p>
                <span>{data.asset} BTC</span>
              </Balance>
              <Compte>
                <p>COMPTE</p>
                <span>{data.compte}</span>
              </Compte>
              <Id>{data.user}</Id>
            </PremiereCardsContenair>
          </PremiereCards>
        </Slide>
        <Slide>
          <DeuxiemeCards>2</DeuxiemeCards>
        </Slide>
      </Swiper>
    </div>
  )
}

export default Cards
