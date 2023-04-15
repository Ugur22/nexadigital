import React from "react"
import { Box, Image } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function Logo(props) {
    return (
        <Box {...props}>
            <Link as={NextLink} href='/'>
                <Image
                    width={180}
                    height={100}
                    src='img/logo/nexaDigital-logo.svg'
                    alt='NexaDigital'
                    title="Nexa Digital Digital made simple"
                />
            </Link>
        </Box>
    )
}