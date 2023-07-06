import { expect, afterEach, beforeAll, afterAll } from "vitest"
import { cleanup } from "@testing-library/react"
import matchers from "@testing-library/jest-dom/matchers"
import { server } from "/src/__mocks/server"

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

beforeAll(() => server.listen({ onUnhandledRequest: "error" }))
afterAll(() => server.close())
afterEach(() => {
  server.resetHandlers()
  cleanup() // runs a cleanup after each test case (e.g. clearing jsdom)
})
