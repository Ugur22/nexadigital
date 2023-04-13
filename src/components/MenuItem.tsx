import React, { forwardRef } from 'react'
import { Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router';

const MenuItem = ({ children, linkColor, linkHoverColor, isLast, to = "/", ...rest }, _ref) => {

    const router = useRouter();

    return (
        <Link className={router.pathname == to ? "active" : ""}
            fontSize={{ base: 'sm', lg: 'md', xl: 'lg' }}
            fontWeight={500}
            color="white"
            transition="all .3s ease"
            as={NextLink} href={to} p={[1, 2, 4]}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    )
}

export default forwardRef(MenuItem);
