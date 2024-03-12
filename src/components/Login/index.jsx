import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../styles/colors"

const Signup = styled(Link)`
  text-align: center;
  text-decoration: underline;
  display: block;
  color: ${colors.label};
`

function Login() {
  return (
    <div>
      <form action="" method="post">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <Signup to="/signup">Inscription</Signup>
    </div>
  )
}

export default Login
