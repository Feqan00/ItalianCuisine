import { Box, Button, Stack, Typography } from '@mui/material'
import Sec_1_Photo from '../../public/assets/photo/sec-1-photo.png'
import React from 'react'
import Style from './style.module.scss'
import Image from 'next/image'

const Home_sec_1 = () => {
    return (
        <Stack className='own-container' direction='row' sx={{ alignItems: 'center', }} >
            <Stack direction='column' sx={{ width: '75%', gap: '15px' }} >
                <Box>
                    <Button sx={{ backgroundColor: '#FF8A00', padding: ' 8px 30px', opacity: '20%', borderRadius: '30px', zIndex: '5' }} variant="contained" >Restauran</Button>
                </Box>
                <Typography sx={{ color: '#311F09', fontFamily: 'Raleway', fontSize: '80px', fontWeight: '700', lineHeight: '88px' }} >Italian  <br /> Cuisine</Typography>
                <Typography sx={{ color: '#5C4529', fontFamily: 'Poppins', fontSize: '20px', fontWeight: '400', lineHeight: '40px' }} >Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sodales senectus dictum arcu sit tristique <br /> donec eget.</Typography>
                <Stack direction='row' gap='40px' >
                    <Button sx={{ backgroundColor: '#FF8A00', padding: ' 8px 30px', borderRadius: '30px' }} variant="contained" >Order now</Button>
                    <Button sx={{ backgroundColor: '#3FA72F', padding: ' 8px 30px', borderRadius: '30px' }} variant="contained" >Reservation</Button>
                </Stack>
            </Stack>
            <Box>
                <Image className={Style.Sec1Photo} alt='Photo' src={Sec_1_Photo} />
            </Box>
        </Stack>
    )
}

export default Home_sec_1