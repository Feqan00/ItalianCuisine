'use client'
import Basket from '../../public/assets/logo/basket.png'
import style from './style.module.scss'
import { Box, Stack, Typography } from '@mui/material'
import NavLogo from '../../public/assets/logo/LogoDelizioso.png'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const routes = [
    { id: 1, to: '/', title: 'Home' },
    { id: 2, to: '/Menu', title: 'Menu' },
    { id: 3, to: '#', title: 'About us' },
    { id: 4, to: '#', title: 'Order online' },
    { id: 5, to: '#', title: 'Reservation' },
    { id: 6, to: '#', title: 'Contact us' },
]
const NavBar = () => {
    const pathName = usePathname()
    return (
        <Stack className='own-container' direction={'row'} alignItems={'center'} justifyContent='space-between' >
            <Box>
                <Link href='/' >
                    <Image priority alt='Logo' src={NavLogo} />
                </Link>
            </Box>
            <Box sx={{ display: ' flex', justifyContent: 'space-between', width: '55%', color: '#311F09' }}  >
                {routes.map(({ id, to, title }) => {
                    return <Link className={pathName === to ? 'active' : style.pageLink} key={id} href={to}>{title}</Link>
                })}
            </Box>
            <Box sx={{ display: 'flex', alignItems: ' center', gap: '25px' }} >
                <Box sx={{ backgroundColor: '#D0CCC7', padding: '10px', borderRadius: '30px', opacity: '0.8' }} >
                    <Image alt='Logo' src={Basket} />
                </Box>
                <Box>
                    <Link className={style.LoginBtn} href={'#'}>Log in</Link>
                </Box>
            </Box>
        </Stack>
    )
}

export default NavBar