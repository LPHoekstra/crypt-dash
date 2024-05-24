import Cards from "./"
import { render } from "@testing-library/react"

describe("Cards", () => {
  it("should render without crash", () => {
    render(<Cards />)
  })
})
