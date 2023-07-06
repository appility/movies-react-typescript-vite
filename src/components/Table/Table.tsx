import { formatPrice, getAverage } from "@/utils/Numbers"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"

interface DefaultTableProps {
  headings: string[]
  rows: any[]
  selectedRowId: string
  setSelectedRow: (arg0: any) => void
}

const DefaultTable = ({
  headings,
  rows,
  selectedRowId,
  setSelectedRow,
}: DefaultTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headings.map((heading, index, { length }) => (
              <TableCell
                key={`heading-${index}`}
                align={`${index === 0 ? "left" : "right"}`}
              >
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick={() => setSelectedRow(row)}
              key={row.id}
              selected={selectedRowId === row.id}
              sx={{
                td: { cursor: "pointer" },
                "&:last-child td, &:last-child th": { border: 0 },
                "&.MuiTableRow-hover": {
                  "&:hover": {
                    backgroundColor: "papayawhip",
                  },
                },
              }}
              hover
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.releaseYear}</TableCell>
              <TableCell align="right">{row.filmCompanyName}</TableCell>
              <TableCell align="right">{formatPrice(row.cost)}</TableCell>
              <TableCell align="right">
                {getAverage(row.reviews).toFixed(1)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DefaultTable
