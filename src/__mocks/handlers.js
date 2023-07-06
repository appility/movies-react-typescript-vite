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
