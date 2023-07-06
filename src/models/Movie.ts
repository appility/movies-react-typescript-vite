export interface Movie {
  id: string
  title: string
  filmCompanyId: string
  filmCompanName?: string
  reviews: number[]
  cost: number
  releaseYear: string
}
