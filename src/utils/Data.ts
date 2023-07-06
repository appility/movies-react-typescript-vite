import { Movie, MovieCompany } from "@/models"

export const joinMovieAndFilmCompanies = (
  movies: Movie[],
  movieCompanies: MovieCompany[] | null
) => {
  if (!movies) return null
  if (!movieCompanies) return movies
  return movies.map((movie: Movie) => {
    const filmCompany = movieCompanies.find(
      (movieCompany) => movieCompany.id === movie.filmCompanyId
    )
    return {
      ...movie,
      ...(filmCompany && { filmCompanyName: filmCompany.name }),
    }
  })
}
