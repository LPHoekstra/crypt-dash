import styled from "styled-components"
import colors from "../../styles/colors"
import FormSignup from "../../components/FormSignup"
import { useContext } from "react"
import { ConnectedContext } from "../../context"
import { Navigate } from "react-router-dom"

const Background = styled.div`
  background-color: ${colors.background};
  padding: 25px;
`

const SecondaryBackground = styled.div`
  background-color: ${colors.moduleBackground};
  padding: 22px 20px 22px 20px;
  border-radius: 15px;
`

const HeadersSetting = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${colors.notSelected};
  margin-left: 7px;
  margin-right: 7px;
`

const HeadersSettingContenair = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebeef2;
  padding-bottom: 8px;
`

function Setting() {
  const { isConnected } = useContext(ConnectedContext)

  return isConnected === true ? (
    <Background>
      <SecondaryBackground>
        <HeadersSettingContenair>
          <HeadersSetting>Edit Profile</HeadersSetting>
          <HeadersSetting>Preference</HeadersSetting>
          <HeadersSetting>Security</HeadersSetting>
        </HeadersSettingContenair>
        <img src="" alt="" />
        <FormSignup />
      </SecondaryBackground>
    </Background>
  ) : (
    <Navigate to="/login" />
  )
}

export default Setting
