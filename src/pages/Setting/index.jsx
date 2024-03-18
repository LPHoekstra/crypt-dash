import styled from "styled-components"
import colors from "../../styles/colors"
import FormSignup from "../../components/FormSignup"
import { useContext, useState } from "react"
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

const HeadersSetting = styled.li`
  display: inline;
  font-size: 13px;
  font-weight: 500;
  margin-left: 7px;
  margin-right: 7px;
  color: ${colors.notSelected};
  ${(props) =>
    props.$selected
      ? `
      color: #1814F3; 
      text-decoration: #1814F3 2px underline; 
      text-underline-offset: 10px;`
      : null}
`

const HeadersSettingContenair = styled.nav`
  border-bottom: 1px solid #ebeef2;
  padding-bottom: 8px;
`

const HeadersList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
`

const Tabs = {
  editProfile: "Edit Profile",
  preference: "Preference",
  security: "Security",
}

function Setting() {
  const { isConnected } = useContext(ConnectedContext)
  const [onglet, setOnglet] = useState(Tabs.editProfile)

  return isConnected === true ? (
    <Background>
      <SecondaryBackground>
        <HeadersSettingContenair>
          <HeadersList>
            {Object.values(Tabs).map((tab) => (
              <HeadersSetting
                key={tab}
                $selected={onglet === tab}
                onClick={() => {
                  setOnglet(tab)
                }}
              >
                {tab}
              </HeadersSetting>
            ))}
          </HeadersList>
        </HeadersSettingContenair>
        {onglet === Tabs.editProfile ? (
          <FormSignup />
        ) : onglet === Tabs.preference ? (
          <div>preference</div>
        ) : (
          <div>security</div>
        )}
      </SecondaryBackground>
    </Background>
  ) : (
    <Navigate to="/login" />
  )
}

export default Setting
