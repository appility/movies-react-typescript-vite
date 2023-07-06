import { useQuery } from "@tanstack/react-query"
import { getMoviesWithCompanies } from "@/clientProvider/queryClient"
import Skeleton from "@mui/material/Skeleton"
import LinearProgress from "@mui/material/LinearProgress"
import Alert from "@mui/material/Alert"
import DefaultTable from "@/components/Table/Table"
import { Movie } from "@/models"
import { Typography } from "@mui/material"

interface MovieListProps {
  onSelect: (arg0: any) => void
  selectedMovie: Movie
}

export default function MovieList({ selectedMovie, onSelect }: MovieListProps) {
  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMoviesWithCompanies(),
  })
  if (data) {
    return (
      <>
        {isFetching && <LinearProgress />}
        <Typography
          variant="h5"
          sx={{
            paddingTop: ".5rem",
          }}
        >
          We found <i>{data.length}</i> movies
        </Typography>
        <DefaultTable
          rows={data}
          headings={["Title", "Release Year", "Company", "Cost", "Rating"]}
          setSelectedRow={onSelect}
          selectedRowId={selectedMovie?.id}
        />
      </>
    )
  }
  if (isError) {
    return (
      <Alert severity="error">
        We can't get this data right now.{" "}
        {error instanceof Error && error.message}
      </Alert>
    )
  }
  return <Skeleton />
}
