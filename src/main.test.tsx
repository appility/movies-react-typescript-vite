import { describe, test, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import { App } from "./App"

describe("<App />", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()

    const text = screen.getByText(/Movies/i)
    expect(text.textContent).toBeTruthy()
  })

  test("Displays movies", async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByTestId("text-movie-count").textContent).toBe(
        "We found 2 movies"
      )
    })
  })
})
