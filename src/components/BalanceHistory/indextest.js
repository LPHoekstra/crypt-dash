import "jest-canvas-mock"
import BalanceHistory from "./"
import { render } from "@testing-library/react"
import { ActualisationProvider } from "../../context"

describe("Balance History", () => {
  it("should render without errors", () => {
    render(
      <ActualisationProvider>
        <BalanceHistory />
      </ActualisationProvider>
    )
  })
})
