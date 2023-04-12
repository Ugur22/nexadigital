import React from 'react'

import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaReact, FaVuejs, FaLaravel,FaPhp } from "react-icons/fa";
import { SiCraftcms,SiGraphql } from "react-icons/si";

interface StatsCardProps {
    title: string;
    icon: ReactNode;
    colorIcon: string;
}
function StatsCard(props: StatsCardProps) {
    const { title, icon, colorIcon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'2px solid'}
            borderColor={colorIcon}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} fontSize={'2xl'} isTruncated>
                        {title}
                    </StatLabel>
                </Box>
                <Box
                    my={'auto'}
                    color={colorIcon}
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
                    title={'React & React Native'}
                    colorIcon={'#82D7F7'}
                    icon={<FaReact size={'3em'}/>}
                />
                <StatsCard
                    title={'Laravel'}
                    colorIcon={'#EB4432'}
                    icon={<FaLaravel size={'3em'}/>}
                />
                <StatsCard
                    title={'Vue.js'}
                    colorIcon={'#65B687'}
                    icon={<FaVuejs size={'3em'}/>}
                />
                <StatsCard
                    title={'Craft CMS'}
                    colorIcon={'#D34F38'}
                    icon={<SiCraftcms size={'3em'}/>}
                />
                <StatsCard
                    title={'Graphql'}
                    colorIcon={'#E23199'}
                    icon={<SiGraphql size={'3em'}/>}
                />
                <StatsCard
                    title={'PHP'}
                    colorIcon={'#7C86B4'}
                    icon={<FaPhp size={'3em'}/>}
                />
            </SimpleGrid>
        </Box>
    );
}