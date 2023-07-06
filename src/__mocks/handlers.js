import { rest } from "msw"
import { API_BASE_URL } from "/src/clientProvider/queryClient"

export const handlers = [
  rest.get(`${API_BASE_URL}/movies`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          reviews: [6, 8, 3, 9, 8, 7, 8],
          title: "A Testing Film",
          filmCompanyId: "1",
          cost: 534,
          releaseYear: 2005,
        },
        {
          id: "2",
          reviews: [5, 7, 3, 4, 1, 6, 3],
          title: "Mock Test Film",
          filmCompanyId: "1",
          cost: 6234,
          releaseYear: 2006,
        },
      ])
    )
  }),

  rest.get(`${API_BASE_URL}/movieCompanies`, (req, res, ctx) => {
    return res(
      ctx.json([
        { id: "1", name: "True Film Productions" },
        { id: "2", name: "Lazy Lemon Films" },
        { id: "3", name: "Good old TV" },
      ])
    )
  }),

  rest.post(`${API_BASE_URL}/submitReview`, (req, res, ctx) => {
    const { message } = req.body
    return res(
      ctx.json({
        success: true,
      })
    )
  }),
]

// // GET movie companies: https://comforting-starlight-f3456a.netlify.app/.netlify/functions/movieCompanies
// // GET movies: https://comforting-starlight-f3456a.netlify.app/.netlify/functions/movies
// POST review: https://comforting-starlight-f3456a.netlify.app/.netlify/functions/submitReview

// const res = await axios.get('http://127.0.0.1:5000/', {
//         headers: { 'Content-Type': 'application/json' }
//       });
// return axios.all([
//   getMovies(),
//   getMovieCompanies()
// ])
// .then(axios.spread((movies, movieCompanies) => {
//   // output of req.
//   console.log('data1', movies, 'data2', movieCompanies)
//   return new Promise(movies)
// }))

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };
// try {
//   const response = await axios.get(`${API_BASE_URL}/movies`);
//   return response.data;
// } catch (err: unknown | AxiosError) {
//   throw err as ApiError;
// }
//};
