import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function Logo(props) {
    return (
        <Box {...props}>
            <Link as={NextLink} href='/'>
                <Image
                    borderRadius='full'
                    width={180}
                    height={100}
                    src='img/logo-nexaDigital.svg'
                    alt='logo NexaDigital'
                />
            </Link>
        </Box>
    )
}