import { sum } from "./"

describe("Fonction d'addition", () => {
  test("should equal to 10 with 3 + 7", () => {
    const result = sum(3, 7)
    expect(result).toBe(10)
  })
})
