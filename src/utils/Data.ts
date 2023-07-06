import { Movie, MovieCompany } from "@/models"

export const joinMovieAndFilmCompanies = (
  movies: Movie[],
  movieCompanies: MovieCompany[] | null
) => {
  return movies.map((movie: Movie) => {
    const filmCompany =
      movieCompanies &&
      movieCompanies.find(
        (movieCompany) => movieCompany.id === movie.filmCompanyId
      )
    return {
      ...movie,
      ...(filmCompany && { filmCompanyName: filmCompany.name }),
    }
  })
}
