import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function Logo(props) {
    return (
        <Box {...props}>
            <Link as={NextLink} href='/'>
                <Text fontSize="lg" fontWeight="bold">
                    <Image
                        borderRadius='full'
                        width={180}
                        height={100}
                        src='img/nexa-logo.svg'
                        alt='logo NexaDigital'
                    />
                </Text>

            </Link>
        </Box>
    )
}