import { useEffect } from "react"
import { Alert, Box, Button, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
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
  const { data, loading, error, resetData, sendMovieReview } = useMovieReview()

  useEffect(() => {
    resetData()
  }, [selectedMovie])

  const { handleSubmit, control } = useForm<IFormInput>({
    defaultValues: defaultValues,
  })

  const onSubmit = async (data: IFormInput) => {
    sendMovieReview({ reviewText: data.message })
  }

  if (error)
    return (
      <Alert severity="error">
        We can&apos;t send this data right now.{" "}
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
            required: "The field is required.",
            maxLength: {
              value: 100,
              message: 'Too many "characters", maximum is 100.',
            },
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
