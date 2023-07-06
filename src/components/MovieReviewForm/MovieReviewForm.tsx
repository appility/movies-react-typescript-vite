import { useEffect, useState } from "react"
import { Alert, Box, Button, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { useMediaQuery } from "usehooks-ts"
import { FormTextarea } from "@/components/Form/FormTextarea/FormTextarea"
import useMovieReview from "@/hooks/useMovieReview"
import { Movie } from "@/models"

export interface IFormInput {
  message: string
}

const defaultValues = {
  message: "",
}

const MovieReviewForm = ({ selectedMovie }: { selectedMovie: Movie }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { data, loading, error, resetData, sendMovieReview } = useMovieReview()
  const [showCompleted, setShowCompleted] = useState(false)

  useEffect(() => {
    resetData()
  }, [selectedMovie])

  const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
    defaultValues: defaultValues,
  })

  const onSubmit = async (data: IFormInput) => {
    sendMovieReview({ reviewText: data.message })
  }

  if (error)
    return (
      <Alert severity="error">
        We can't send this data right now.{" "}
        {error instanceof Error && error.message}
      </Alert>
    )

  if (data)
    return (
      <Box>
        <p>{data.message}</p>
      </Box>
    )

  return (
    <div>
      <Typography variant="h4">
        Add a review for <i>{selectedMovie?.title}</i>
      </Typography>
      <Box
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <FormTextarea
          name={"message"}
          control={control}
          rules={{
            required: "This is required.",
            maxLength: 100,
          }}
        />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button
          onClick={handleSubmit(onSubmit)}
          variant={"contained"}
          disabled={loading}
        >
          Submit
        </Button>
      </Box>
    </div>
  )
}

export default MovieReviewForm
