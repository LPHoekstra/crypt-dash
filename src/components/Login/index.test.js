import { render } from "@testing-library/react"
import Login from "./"
import { ConnectedProvider } from "../../context"
import { MemoryRouter } from "react-router"
import { submitForm } from "./"
import address from "../../styles/address"

describe("Login", () => {
  it("should render without errors", () => {
    render(
      <MemoryRouter>
        <ConnectedProvider>
          <Login />
        </ConnectedProvider>
      </MemoryRouter>
    )
  })

  it("should make a POST request and return data for a successful login", async () => {
    const formData = {
      email: "test@gmail.com",
      password: "testPassword",
    }
    const mockResponse = { message: "Connecté !" }

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    })

    await submitForm(formData)

    expect(fetch).toHaveBeenCalledWith(`${address.serveur}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  })
})
