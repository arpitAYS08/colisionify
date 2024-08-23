import Reveal from '@/components/Reveal'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const SectionTwo = () => {
  return (
    <Box sx={{paddingTop: '50px', paddingBottom:'50px'}}>
        <Reveal width={'100%'}>
        <Typography textAlign={'center'} variant='h3' letterSpacing={'-0.02rem'} lineHeight={'100%'}>
        <span>
        Developer-first
        low-code,
            <br/>
            development   
        </span>
        </Typography>
        </Reveal>
        <Box mt={'2rem'}>
        <Stack>
            Section 1
        </Stack>
        <Stack>
            Section 2
        </Stack>
        </Box>
    </Box>
  )
}

export default SectionTwo