export interface Movie {
  id: string
  title: string
  filmCompanyId: string
  filmCompanyName?: string
  reviews: number[]
  cost: number
  releaseYear: string
}
