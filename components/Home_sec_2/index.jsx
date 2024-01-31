'use client'
import { Box, Stack } from '@mui/material'
import Sec_2Img from '../../public/assets/photo/section-2-home_img.png'
import React from 'react'
import Image from 'next/image'

const Home_sec_2 = () => {
    return (
        <Stack sx={{ backgroundColor: '#ECF9F0', }}  >
            <Stack className='own-container'  >
                <Box>
                    <Image src={Sec_2Img} alt='Logo' />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >

                </Box>
            </Stack>
        </Stack>
    )
}

export default Home_sec_2