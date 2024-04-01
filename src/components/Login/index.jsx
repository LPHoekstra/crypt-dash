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

// Fetch
export async function submitForm(formData) {
  try {
    const response = await fetch(`${address.serveur}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    // si un token est renvoyer par le serveur et donc identification réussi
    if (data.token) {
      const token = data.token
      Cookies.set("token", token, { expires: 1 })
    }
    // renvoie le message du serveur concernant le statue
    return data.message
  } catch (error) {
    console.error(error)
    return "Erreur réseau"
  }
}

// JSX
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

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
    <Navigate to="/overview" />
  ) : (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault()
          submitForm(formData)
            .then((result) => {
              if (result === "Connecté !") {
                setIsConnected(true)
                setResponseServer(<Navigate to="/overview" />)
              } else {
                setResponseServer(result)
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
