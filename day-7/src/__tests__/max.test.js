const max = require("../max")

test("max test", () => {
    expect(max(1,5)).toBe(5)
    expect(max(8,5)).toBe(8)
    expect(max(-1,5)).toBe(5)
    expect(max(2,2)).toBe(2)
})
