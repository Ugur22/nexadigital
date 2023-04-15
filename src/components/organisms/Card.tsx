import { Box, Link, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
}

export default function Card({ heading, description, icon, href }: CardProps) {
    return (
        <Box className='card-service'
            maxW={{ base: 'full', md: '400px' }}
            w={'full'}
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            borderColor={'brand.secondary'}
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg={'white'}>
                    {icon}
                </Flex>
                <Box mt={2} color={'1e272e'}>
                    <Heading size="md" >{heading}</Heading >
                    <Text mt={1} fontSize={'sm'} >
                        {description}
                    </Text>
                </Box>
                <Link href={href} variant={'link'} color={'brand.secondary'} size={'sm'}>
                    Learn more
                </Link>
            </Stack>
        </Box>
    );
};
