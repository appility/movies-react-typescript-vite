import { Paper } from "@mui/material"
import { PropsWithChildren } from "react"

const Card = ({ children }: PropsWithChildren) => (
  <Paper
    style={{
      display: "grid",
      gridRowGap: "20px",
      padding: "20px",
      margin: "10px 10px",
    }}
  >
    {children}
  </Paper>
)

export default Card
