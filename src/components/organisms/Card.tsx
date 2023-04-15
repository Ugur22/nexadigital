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
            <Stack align={'start'} gap={3} spacing={2}>
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
                    <Text mt={1} fontSize={'sm'} wordBreak={'break-all'}>
                        {description.substring(0, 140).concat('...')}
                    </Text>
                </Box>

                <Link rounded={'full'}
                    href={href} variant={'link'} color={'brand.tertiary'}
                    mt={4}
                    py={2}
                    px={5}
                    fontWeight={'bold'}
                    display={'flex'}
                    bg={'brand.secondary'}
                    transition="all .4s ease"
                    _hover={{ textDecorationLine: 'none' }}>
                    Learn more
                </Link>
            </Stack>
        </Box>
    );
};
