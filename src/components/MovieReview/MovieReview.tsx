import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useMediaQuery } from "usehooks-ts"
import ConditionalWrapper from "@/components/ConditionalWrapper/ConditionalWrapper"
import MovieReviewForm from "@/components/MovieReviewForm/MovieReviewForm"
import { Movie } from "@/models"

interface MovieReviewProps {
  selectedMovie: Movie
  onClose: () => void
}

const MovieReview = ({ selectedMovie, onClose }: MovieReviewProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 10px",
      }}
    >
      <ConditionalWrapper
        condition={isMobile}
        wrapper={(children) => (
          <Dialog
            open={true}
            onClose={onClose}
            fullWidth
            style={{
              margin: "10px",
            }}
          >
            <DialogTitle id="id">
              <Box display="flex" alignItems="center">
                <Box flexGrow={1} />
                <Box>
                  <IconButton onClick={onClose}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent
              style={{
                overflow: "hidden",
              }}
            >
              {children}
            </DialogContent>
          </Dialog>
        )}
      >
        <MovieReviewForm selectedMovie={selectedMovie} />
      </ConditionalWrapper>
    </Paper>
  )
}

export default MovieReview
