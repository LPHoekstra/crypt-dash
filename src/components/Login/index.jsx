import styled from "styled-components"
import { Link, Navigate } from "react-router-dom"
import colors from "../../styles/colors"
import { useState } from "react"
import Cookies from "js-cookie"

const Signup = styled(Link)`
  text-align: center;
  text-decoration: underline;
  display: block;
  color: ${colors.label};
`
// Récupérer les champs entrer et transformer le tout en JSON pour pouvoir récupérer la réponse serveur
// créer un hooks pour les requêtes POST

async function submitForm(req) {
  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
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
      Cookies.set("token", token)
      return <Navigate to="/" />
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

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          submitForm(formData)
            .then((result) => setResponseServer(result))
            .catch((error) => console.log(error))
        }}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onBlur={inputChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onBlur={inputChange}
          />
        </div>
        <button type="submit">Login</button>
        <span>{responseServer}</span>
      </form>
      <Signup to="/signup">Inscription</Signup>
    </div>
  )
}

export default Login
