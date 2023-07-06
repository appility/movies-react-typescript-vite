import { useQuery } from "@tanstack/react-query"
import { getMoviesWithCompanies } from "@/clientProvider/queryClient"
import Skeleton from "@mui/material/Skeleton"
import RefreshIcon from "@mui/icons-material/Refresh"
import LinearProgress from "@mui/material/LinearProgress"
import Alert from "@mui/material/Alert"
import DefaultTable from "@/components/Table/Table"
import { Movie } from "@/models"
import { Box, IconButton, Typography } from "@mui/material"

interface MovieListProps {
  onSelect: (arg0: Movie) => void
  selectedMovie: Movie | null
}

export default function MovieList({ selectedMovie, onSelect }: MovieListProps) {
  const { data, isFetching, refetch, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMoviesWithCompanies(),
  })

  if (data) {
    return (
      <>
        <LinearProgress
          sx={{ visibility: `${isFetching ? "visible" : "hidden"}` }}
        />
        <div style={{ width: "100%" }}>
          <Box sx={{ display: "flex", pt: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" data-testid="text-movie-count">
                We found <i>{data.length}</i> movies
              </Typography>
            </Box>
            <Box>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => refetch()}
              >
                <RefreshIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </div>

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
        We can&apos;t get this data right now.{" "}
        {error instanceof Error && error.message}
      </Alert>
    )
  }
  return <Skeleton />
}
