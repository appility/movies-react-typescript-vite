import React from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./clientProvider/queryClient"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "@/routes/Movies/Movies"
import { ErrorBoundary } from "react-error-boundary"

export function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
