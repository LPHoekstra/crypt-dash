import { useContext } from "react"
import { ConnectedContext } from "../../context"
import { useFetch } from "../../hooks"
import address from "../../styles/address"

function FormSignup() {
  const { isConnected } = useContext(ConnectedContext)
  const response = useFetch(`${address.serveur}/api/auth/user-information`)
  const data = response.data

  const actionForm = `${address.serveur}/api/auth/signup`
  return (
    <div>
      <form action={actionForm} method="post">
        <div>
          <label htmlFor="yourName">Your Name</label>
          <input
            type="text"
            name="yourName"
            id="yourName"
            autoComplete="name"
            defaultValue={data.yourName}
          />
        </div>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            autoComplete="username"
            defaultValue={data.userName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={data.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            defaultValue="**********"
          />
        </div>
        <div>
          <label htmlFor="dateBirth">Date of Birth</label>
          <input type="date" name="dateBirth" id="dateBirth" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            autoComplete="street-address"
            defaultValue={data.address}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" defaultValue={data.city} />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="number"
            name="postalCode"
            id="postalCode"
            autoComplete="postal-code"
            defaultValue={data.postalCode}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            autoComplete="country-name"
            defaultValue={data.country}
          />
        </div>
        <button type="submit">
          {isConnected === true ? "Save" : "Create Account"}
        </button>
      </form>
    </div>
  )
}

export default FormSignup
