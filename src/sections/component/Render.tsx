import Reveal from '@/components/Reveal'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const Render = ({img, title, subtitle, direction}:any) => {
  return (
    <Stack direction={direction ? 'row-reverse' : 'row' } width={'100%'} paddingTop={'1.5rem'} paddingBottom={'1.5rem'} height={'650px'} gap={5}>
        <Stack width={'50%'} alignItems={'center'} justifyContent={'center'}>
            <Reveal width='100%'>
            <img src={img} alt='one' height={'70%'} width={'90%'}/>
            </Reveal>
        </Stack>
        <Stack width={'50%'} alignItems={'center'} justifyContent={'center'}>
            <Reveal width='100%'>
            <Typography textAlign={'center'} variant='h6' fontWeight={650}>{title}</Typography>
            <Typography textAlign={'center'} variant='body2'>{subtitle}</Typography>
            </Reveal>
        </Stack>
    </Stack>
  )
}

export default Render