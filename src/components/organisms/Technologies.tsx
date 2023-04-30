import React from 'react'
import {
    Box, Container, Heading, SimpleGrid, Stack, Text,
} from '@chakra-ui/react';
import { FaReact, FaVuejs, FaLaravel, FaPhp, FaSass, FaApple, FaAndroid } from "react-icons/fa";
import { SiCraftcms, SiGraphql, SiAdobexd } from "react-icons/si";
import ToolCard from '../organisms/ToolCard';
import { motion } from "framer-motion";

export default function Technologies() {

    const ToolsList = [
        {
            title: 'React',
            colorIcon: '#82D7F7',
            icon: FaReact
        },
        {
            title: 'Laravel',
            colorIcon: '#EB4432',
            icon: FaLaravel
        },
        {
            title: 'Vue.js',
            colorIcon: '#65B687',
            icon: FaVuejs
        },
        {
            title: 'Craft CMS',
            colorIcon: '#EB4432',
            icon: SiCraftcms
        },
        {
            title: 'Graphql',
            colorIcon: '#E23199',
            icon: SiGraphql
        },
        {
            title: 'PHP',
            colorIcon: '#7C86B4',
            icon: FaPhp
        },
        {
            title: 'Sass',
            colorIcon: '#C06C97',
            icon: FaSass
        },
        {
            title: 'Adobe XD',
            colorIcon: '#3E0833',
            icon: SiAdobexd,
            bgIcon: '#E669E8'
        },
        {
            title: 'Android',
            colorIcon: '#70D78C',
            icon: FaAndroid
        },
        {
            title: 'IOS',
            colorIcon: '#DADADA',
            icon: FaApple
        },
    ]
    return (
        <Box bg={'brand.tertiary'}>
            <Box maxW="7xl" mx={'auto'} py={{ base: 10, md: 24 }} px={{ base: 2, sm: 12, md: 17 }}>
                <Stack as={Container} spacing={4} pb={10} px={0} position={'relative'} maxW={'7xl'} textAlign={'left'}>
                    <Heading fontSize={{ base: 'lg', sm: 'lg' }} fontWeight={'bold'} >
                        Enhancing Your Digital Footprint
                    </Heading>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} maxW={'3xl'} fontWeight={'bold'}  className="title-gradient">
                        Our Toolbox for Web Development
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'3xl'}>
                        At NexaDigital, we specialize in designing outstanding digital experiences. Using efficient project management techniques
                        like Agile and Scrum, we make sure our development process is streamlined and effective.
                        Whether you need a basic website or a complex web application, we have the expertise to bring your vision to life.
                    </Text>
                </Stack>

                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing={{ base: 5, lg: 8 }}>
                    {ToolsList.map((tool, index) => {
                        return (
                            <motion.div key={index}
                                whileHover={{ y: -10 }}
                                whileTap={{
                                    y: -10
                                }}
                            >
                                <ToolCard key={index}
                                    title={tool.title}
                                    colorIcon={tool.colorIcon}
                                    bgIcon={tool.bgIcon}
                                    icon={<tool.icon
                                        size={'3em'} />}
                                />
                            </motion.div>
                        )
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    );
}