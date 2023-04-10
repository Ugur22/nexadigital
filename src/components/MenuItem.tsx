import React, { forwardRef } from 'react'
import { Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router';

const MenuItem = ({ children, linkColor, linkHoverColor, isLast, to = "/", ...rest }, _ref) => {

    const router = useRouter();

    return (
        <Link className={router.pathname == to ? "active" : ""}
            fontSize={'md'}
            fontWeight={500}
            color="#FFF"
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
