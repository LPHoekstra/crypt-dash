import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./"
import { ConnectedProvider, NavBarProvider } from "../../context"
import { MemoryRouter } from "react-router"

describe("Header", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <NavBarProvider>
          <ConnectedProvider>
            <Header />
          </ConnectedProvider>
        </NavBarProvider>
      </MemoryRouter>
    )
  })

  it("should open the navBar", () => {
    render(
      <MemoryRouter>
        <NavBarProvider>
          <ConnectedProvider>
            <Header />
          </ConnectedProvider>
        </NavBarProvider>
      </MemoryRouter>
    )

    const navElement = screen.getByTestId("nav")

    fireEvent.click(navElement)
  })
})
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useLocation: () => ({
//     pathname: "/example",
//   }),
// }))

// it("should returns the correct page based on location pathname", () => {
//   const wrapper = ({ children }) => (
//     <MemoryRouter initialEntries={["/example"]}>{children}</MemoryRouter>
//   )

//   const { result } = renderHook(() => usePage(), { wrapper })

//   expect(result.current).toBe("Example")
// })
