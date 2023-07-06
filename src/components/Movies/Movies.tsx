import { useState } from "react"
import MovieList from "@/components/MovieList/MovieList"
import MovieReview from "@/components/MovieReview/MovieReview"
import { Movie } from "@/models"

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const handleClose = () => {
    setSelectedMovie(null)
  }

  return (
    <>
      <MovieList
        onSelect={(row: Movie) => setSelectedMovie(row)}
        selectedMovie={selectedMovie!}
      />
      {selectedMovie && (
        <MovieReview selectedMovie={selectedMovie} onClose={handleClose} />
      )}
    </>
  )
}

export default Movies
