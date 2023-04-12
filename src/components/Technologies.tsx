import React from 'react'

import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaReact, FaVuejs, FaLaravel } from "react-icons/fa";

interface StatsCardProps {
    title: string;
    icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
    const { title, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} fontSize={'2xl'} isTruncated>
                        {title}
                    </StatLabel>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function Technologies() {
    return (
        <Box maxW="7xl" mx={'auto'} pb={'calc(100px - 60px)'} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                background={'#f5f6fa'}
                py={10}
                fontWeight={'bold'}>
                Technologies we use
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'React/NextJS'}
                    icon={<FaReact size={'3em'} />}
                />
                <StatsCard
                    title={'Laravel'}
                    icon={<FaLaravel size={'3em'} />}
                />
                <StatsCard
                    title={'VueJS'}
                    icon={<FaVuejs size={'3em'} />}
                />
            </SimpleGrid>
        </Box>
    );
}