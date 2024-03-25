import { useCallback, useContext, useEffect, useState } from "react"
import { ConnectedContext } from "../../context"
import { useFetch } from "../../hooks"
import address from "../../styles/address"
import Cookies from "js-cookie"
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding-top: 52px;
    padding-left: 215px;
  }
`

const ByTwo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 29px;
  }
`

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`

const Button = styled.button`
  @media screen and (min-width: 1024px) {
    width: 190px;
    height: 50px;
    margin-left: auto;
  }
`

function FormSignup() {
  const { isConnected } = useContext(ConnectedContext)
  const [formData, setFormData] = useState({
    yourName: "",
    userName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })

  const response = useFetch(`${address.serveur}/api/auth/user-information`)
  const data = response.data

  useEffect(() => {
    if (data) {
      setFormData({
        yourName: data.yourName || "",
        userName: data.userName || "",
        email: data.email || "",
        address: data.address || "",
        city: data.city || "",
        postalCode: data.postalCode || "",
        country: data.country || "",
      })
    }
  }, [data])

  const inputChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    },
    [formData]
  )

  if (response.isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  } else {
    const sendForm = (formData) => {
      const token = Cookies.get("token")
      const apiUrl = isConnected
        ? `${address.serveur}/api/auth/update`
        : `${address.serveur}/api/auth/signup`

      console.log(formData)
      fetch(apiUrl, {
        method: isConnected ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur réseau")
          }
          return response.json()
        })
        .catch((error) => console.error("Erreur :", error))
    }

    return (
      <div>
        <Form
          onSubmit={(event) => {
            event.preventDefault()
            sendForm(formData)
          }}
        >
          <ByTwo>
            <LabelInput>
              <label htmlFor="yourName">Your Name</label>
              <input
                type="text"
                name="yourName"
                id="yourName"
                autoComplete="name"
                defaultValue={data.yourName}
                onBlur={inputChange}
              />
            </LabelInput>
            <LabelInput>
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                name="userName"
                id="userName"
                autoComplete="username"
                defaultValue={data.userName}
                onBlur={inputChange}
              />
            </LabelInput>
          </ByTwo>
          <ByTwo>
            <LabelInput>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={data.email}
                onBlur={inputChange}
              />
            </LabelInput>
            <LabelInput>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                defaultValue="**********"
                onBlur={inputChange}
              />
            </LabelInput>
          </ByTwo>
          <ByTwo>
            <LabelInput>
              <label htmlFor="dateBirth">Date of Birth</label>
              <input type="date" name="dateBirth" id="dateBirth" />
            </LabelInput>
            <LabelInput>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="street-address"
                defaultValue={data.address}
                onBlur={inputChange}
              />
            </LabelInput>
          </ByTwo>
          <ByTwo>
            <LabelInput>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                defaultValue={data.city}
                onBlur={inputChange}
              />
            </LabelInput>
            <LabelInput>
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="number"
                name="postalCode"
                id="postalCode"
                autoComplete="postal-code"
                defaultValue={data.postalCode}
                onBlur={inputChange}
              />
            </LabelInput>
          </ByTwo>
          <LabelInput>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              autoComplete="country-name"
              defaultValue={data.country}
              onBlur={inputChange}
            />
          </LabelInput>
          <Button type="submit">
            {isConnected === true ? "Save" : "Create Account"}
          </Button>
        </Form>
      </div>
    )
  }
}

export default FormSignup
