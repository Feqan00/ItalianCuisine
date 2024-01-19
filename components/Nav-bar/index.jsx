

import { Box, Stack } from '@mui/material'
import NavLogo from '../../public/assets/logo/LogoDelizioso.png'
import React from 'react'
import Image from 'next/image'

const NavBar = () => {
    return (
        <Stack>
            <Box>
                <Image priority alt='Logo' src={NavLogo} />
                Nav
            </Box>
        </Stack>
    )
}

export default NavBar