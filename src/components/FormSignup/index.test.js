import { render } from "@testing-library/react"
import { FormSignup } from "./index"
import { sendForm } from "./index"
import address from "../../styles/address"
import { ConnectedProvider } from "../../context"
import Cookies from "js-cookie"

jest.mock("js-cookie", () => ({
  get: jest.fn(),
}))

describe("FormSignup", () => {
  it("should render correctly", () => {
    render(
      <ConnectedProvider>
        <FormSignup />
      </ConnectedProvider>
    )
  })

  it("should make POST request if not connected", async () => {
    const formData = {
      yourName: "Tom Hoekstra",
      userName: "MalBourbie",
      email: "malbourbie@gmail.com",
      password: "admin",
      address: "27 chemin du mesnil",
      city: "Mathieu",
      postalCode: "14920",
      country: "France",
    }
    const mockResponse = { message: "Utilisateur enregisré !" }

    Cookies.get.mockReturnValueOnce("token")

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    })

    await sendForm(formData, false)

    expect(fetch).toHaveBeenCalledWith(`${address.serveur}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token",
      },
      body: JSON.stringify(formData),
    })
  })

  it("should make PUT request if connected", async () => {
    const formData = {
      yourName: "Tom Hoekstra",
      userName: "MalBourbie",
      email: "malbourbie@gmail.com",
      password: "admin",
      address: "27 chemin du mesnil",
      city: "Mathieu",
      postalCode: "14920",
      country: "France",
    }
    const mockResponse = { message: "erreur serveur" }

    Cookies.get.mockReturnValueOnce("token")

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    })

    await sendForm(formData, true)

    expect(fetch).toHaveBeenCalledWith(`${address.serveur}/api/auth/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token",
      },
      body: JSON.stringify(formData),
    })
  })
})
