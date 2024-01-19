import { Box, Stack } from '@mui/material'
import NavLogo from '../../app/assets/logo/LogoDelizioso.png'
import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <Stack>
            <Box>
                <Image src={NavLogo} />
                sdadas
            </Box>
        </Stack>
    )
}

export default Header