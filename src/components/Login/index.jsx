import styled from "styled-components"
import { Link, Navigate } from "react-router-dom"
import colors from "../../styles/colors"
import { useContext, useState } from "react"
import Cookies from "js-cookie"
import { ConnectedContext } from "../../context"
import address from "../../styles/address"

const Signup = styled(Link)`
  text-align: center;
  text-decoration: underline;
  display: block;
  color: ${colors.label};
`

const Form = styled.form`
  padding: 45px;
  max-width: 450px;
  margin: auto;
  gap: 10px;
`

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
  }
`

async function submitForm(req) {
  try {
    const response = await fetch(`${address.serveur}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
    const data = await response.json()
    if (data.message) {
      return data.message
    } else {
      const token = data.token
      console.log(data)
      Cookies.set("token", token, { expires: 1 })
      return data.userId
    }
  } catch (error) {
    console.log(error)
  }
}

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  console.log(formData)

  const inputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const [responseServer, setResponseServer] = useState()
  const { isConnected, setIsConnected } = useContext(ConnectedContext)

  return isConnected ? (
    <Navigate to="/" />
  ) : (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault()
          submitForm(formData)
            .then((result) => {
              if (result !== "Email ou mot de passe incorrecte") {
                console.log("connecté pendant 24 heure")
                setIsConnected(true)
                setResponseServer(<Navigate to="/" />)
              } else {
                setResponseServer("Email ou mot de passe incorrect")
              }
            })
            .catch((error) => console.log(error))
        }}
      >
        <LabelInput>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            onBlur={inputChange}
          />
        </LabelInput>
        <LabelInput>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onBlur={inputChange}
          />
        </LabelInput>
        <button type="submit">Login</button>
        <span>{responseServer}</span>
      </Form>
      <Signup to="/signup">Inscription</Signup>
    </div>
  )
}

export default Login
