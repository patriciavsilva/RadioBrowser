import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


function Layout({ children } : { children: React.ReactNode}) {
  return (
    <Box>
        <Container maxWidth='lg' sx={{marginTop: 4, marginBottom: 4, backgroundColor: 'white'}}>
            {children}
        </Container>
    </Box>
  )
}

export default Layout;