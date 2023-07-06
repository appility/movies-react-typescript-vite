import { defineConfig, loadEnv } from "vite"

import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "")
  return {
    plugins: [react()],
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    test: {
      setupFiles: ["./src/setupTests.js"],
    },
    // server: {
    //   proxy: {
    //     "/api": {
    //       target:
    //         "https://comforting-starlight-f3456a.netlify.app/.netlify/functions/",
    //       changeOrigin: true,
    //       secure: false,
    //     },
    //   },
    // },
  }
})
