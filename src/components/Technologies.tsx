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
import { FaReact, FaVuejs, FaLaravel, FaPhp, FaSass, FaApple, FaAndroid } from "react-icons/fa";
import { SiCraftcms, SiGraphql, SiAdobexd } from "react-icons/si";

interface StatsCardProps {
    title: string;
    icon: ReactNode;
    colorIcon: string;
    bgIcon?: string;
}
function StatsCard(props: StatsCardProps) {
    const { title, icon, colorIcon, bgIcon = '' } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'2px solid'}
            borderColor={colorIcon}
            rounded={'lg'}>
            <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} fontSize={'xl'} isTruncated>
                        {title}
                    </StatLabel>
                </Box>
                <Box
                    my={'auto'}
                    color={colorIcon}
                    borderRadius={12}
                    bgColor={bgIcon}
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
                py={10}
                fontWeight={'bold'}>
                Technologies we use
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'React'}
                    colorIcon={'#82D7F7'}
                    icon={<FaReact size={'3em'} />}
                />
                <StatsCard
                    title={'Laravel'}
                    colorIcon={'#EB4432'}
                    icon={<FaLaravel size={'3em'} />}
                />
                <StatsCard
                    title={'Vue.js'}
                    colorIcon={'#65B687'}
                    icon={<FaVuejs size={'3em'} />}
                />
                <StatsCard
                    title={'Craft CMS'}
                    colorIcon={'#D34F38'}
                    icon={<SiCraftcms size={'3em'} />}
                />
                <StatsCard
                    title={'Graphql'}
                    colorIcon={'#E23199'}
                    icon={<SiGraphql size={'3em'} />}
                />
                <StatsCard
                    title={'PHP'}
                    colorIcon={'#7C86B4'}
                    icon={<FaPhp size={'3em'} />}
                />
                <StatsCard
                    title={'Sass'}
                    colorIcon={'#C06C97'}
                    icon={<FaSass size={'3em'} />}
                />
                <StatsCard
                    title={'Adobe XD'}
                    colorIcon={'#3E0833'}
                    bgIcon={'#E669E8'}
                    icon={<SiAdobexd size={'3em'} />}
                />
                <StatsCard
                    title={'Android'}
                    colorIcon={'#70D78C'}
                    icon={<FaAndroid size={'3em'} />}
                />
                <StatsCard
                    title={'IOS'}
                    colorIcon={'#DADADA'}
                    icon={<FaApple size={'3em'} />}
                />
            </SimpleGrid>
        </Box>
    );
}