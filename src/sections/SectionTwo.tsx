import { step1, step2 } from '@/app/assets'
import Reveal from '@/components/Reveal'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Render from './component/Render'

const SectionTwo:any = () => {
    const data = [
        {
            img: step1.src,
            heading: <span>
                Looks striking. Feels 
                <br/>
                effortless.
            </span>,
            subTitle: "Impress your form takers. Catch their eye with striking visuals, and make form-filling feel effortless by replacing walls of questions with just one at a time.",
            direction:false,
        },
        {
            img: step2.src,
            heading: <span>
                Embeds smoothly. 
                <br/>
                Reveals more.
            </span>,
            subTitle: "Collect more and better data. Embed forms where people see them, from web to email. Ask the right follow-up question at the right time to reveal deeper insights.",
            direction: true,
        }
    ]
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
            {
                data?.map((item,index)=>(
                    <Render key={index} img={item.img} title={item.heading} subtitle={item.subTitle} direction={item.direction}/>
                ))
            }
        </Box>
    </Box>
  )
}

export default SectionTwo