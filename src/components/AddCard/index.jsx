import Cookies from "js-cookie"
import { useState } from "react"
import address from "../../styles/address"

function AddCard() {
  const [formData, setFormData] = useState({
    apiKey: "",
    apiSecret: "",
    name: "",
  })

  const addBinance = (formData) => {
    const token = Cookies.get("token")

    fetch(`${address.serveur}/api/card/add`, {
      method: "POST",
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
        return console.log(response)
        // response.json()
      })
      .catch((error) => console.error(error))
  }

  const inputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
      <div>
        <h2>Compte</h2>
        <span>"nom du compte"</span>
      </div>
      <h3>ajouter un compte binance</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          addBinance(formData)
        }}
      >
        <div>
          <label htmlFor="apiKey">Clé Api</label>
          <input type="text" name="apiKey" id="apiKey" onBlur={inputChange} />
        </div>
        <div>
          <label htmlFor="apiSecret">Clé Secret</label>
          <input
            type="text"
            name="apiSecret"
            id="apiSecret"
            onBlur={inputChange}
          />
        </div>
        <div>
          <label htmlFor="name">Nom du compte</label>
          <input type="text" name="name" id="name" onBlur={inputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddCard
