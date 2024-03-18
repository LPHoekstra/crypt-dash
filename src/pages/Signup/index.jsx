import styled from "styled-components"
import FormSignup from "../../components/FormSignup"

const Contenair = styled.div`
  padding: 45px;
`

function Signup() {
  return (
    <Contenair>
      <FormSignup />
    </Contenair>
  )
}

export default Signup
