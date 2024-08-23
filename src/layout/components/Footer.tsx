import { Box, Container, Typography, Link, useTheme, alpha } from '@mui/material'

import React from 'react'

const Footer = () => {

  // const router = useRouter();
  const theme = useTheme();

  const handleScroll = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Box sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.9), color: '#fff', padding: '20px 0' }}>
    <Container>
      <Typography variant="h6" align="center">
        Scroll to Sections
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <Link component="button" onClick={() => handleScroll('header')} color="inherit">
          Header
        </Link>
        <Link component="button" onClick={() => handleScroll('about')} color="inherit">
          About
        </Link>
        <Link component="button" onClick={() => handleScroll('services')} color="inherit">
          Services
        </Link>
      </Box>
    </Container>
  </Box>
  )
}

export default Footer