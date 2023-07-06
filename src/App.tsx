import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClientProvider } from "@tanstack/react-query"
import { GlobalContextProvider } from "@/store/globalContext"
import queryClient from "./clientProvider/queryClient"
import "./index.css"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Movies from "@/routes/Movies/Movies"
import { ErrorBoundary } from "react-error-boundary"

export function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <GlobalContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Movies />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </GlobalContextProvider>
    </ErrorBoundary>
  )
}
