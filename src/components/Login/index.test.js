import { render } from "@testing-library/react"
import Login from "./"
import { ConnectedProvider } from "../../context"
import { MemoryRouter } from "react-router"

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
})
