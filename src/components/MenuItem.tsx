import React, { forwardRef } from 'react'
import { Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const MenuItem = ({ children, linkColor, linkHoverColor, isLast, to = "/", ...rest }, ref) => {
    return (
        <Link
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
            }}
            as={NextLink} href={to} p={[1, 2, 4]}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    )
}

export default forwardRef(MenuItem);
