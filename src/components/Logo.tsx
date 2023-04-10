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
                        boxSize='50'
                        src='https://static-00.iconduck.com/assets.00/nextjs-icon-256x256-ao9n7qsm.png'
                        alt='logo NexaDigital'
                    />
                </Text>

            </Link>
        </Box>
    )
}