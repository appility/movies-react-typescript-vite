import axios, { AxiosError } from "./axiosConfig"
import { QueryClient } from "@tanstack/react-query"
import { Movie, MovieCompany } from "@/models"
import { joinMovieAndFilmCompanies } from "@/utils/Data"

const queryClient = new QueryClient()

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export interface ApiError {
  message: string
  description: string
  statusCode: string | number
}

export const getMoviesWithCompanies = async (): Promise<Movie[] | null> => {
  try {
    const responses = await Promise.all([getMovies(), getMovieCompanies()])
    const [movies, movieCompanies] = responses
    if (!movies) {
      throw Error("No data")
    }
    return joinMovieAndFilmCompanies(movies, movieCompanies) || null
  } catch (err: unknown | AxiosError) {
    throw err as ApiError
  }
}

export const getMovies = async (): Promise<Movie[] | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`)
    return response.data || null
  } catch (err: unknown | AxiosError) {
    throw err as ApiError
  }
}

export const getMovieCompanies = async (): Promise<MovieCompany[] | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movieCompanies`)
    return response.data || null
  } catch (err: unknown | AxiosError) {
    return null // allow it to fail silently
  }
}

export const postReview = async ({
  reviewText,
}: {
  reviewText: string
}): Promise<{ message: string } | null> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/submitReview`, {
      review: reviewText,
    })
    return response.data || null
  } catch (err: unknown | AxiosError) {
    throw err as ApiError
  }
}

export default queryClient
