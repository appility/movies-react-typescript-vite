import { useState } from "react"
import { postReview, ApiError } from "@/clientProvider/queryClient"

const useMovieReview = () => {
  const [data, setData] = useState<{ message: string } | null>(null)
  const [error, setError] = useState<ApiError | null>(null)
  const [loading, setLoading] = useState(false)

  const _postData = async (data: { reviewText: string }) => {
    try {
      const result = await postReview(data)
      setData(result)
    } catch (err: unknown) {
      setError(err as ApiError)
    } finally {
      setLoading(false)
    }
  }

  const resetData = () => {
    setData(null)
  }

  const sendMovieReview = (data: { reviewText: string }) => {
    setLoading(true)
    _postData(data)
  }

  return { data, error, loading, sendMovieReview, resetData }
}

export default useMovieReview
