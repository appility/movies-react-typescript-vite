import { defineConfig, loadEnv } from "vite"

import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "")
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    test: {
      environment: "jsdom",
      setupFiles: ["./tests/setUpTests.js"],
    },
  }
})
