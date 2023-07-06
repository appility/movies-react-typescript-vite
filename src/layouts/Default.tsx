import { PropsWithChildren } from "react"
import { AppBar, Container, Toolbar, Typography } from "@mui/material"

const DefaultLayout = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <>
      <AppBar position="relative" color="default">
        <Toolbar>
          <Typography variant="h4" component="h1" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
    </>
  )
}

export default DefaultLayout
