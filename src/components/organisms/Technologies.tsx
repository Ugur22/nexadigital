import React from 'react'
import {
    Box, Container, Heading, SimpleGrid, Stack, Text,
} from '@chakra-ui/react';
import ToolCard from '../organisms/ToolCard';
import { motion } from "framer-motion";
import { ToolsList } from '../../data/technologiesContent';

export default function Technologies() {

    return (
        <Box bg={'brand.tertiary'}>
            <Box maxW="7xl" mx={'auto'} py={{ base: 10, md: 24 }} px={{ base: 2, sm: 12, md: 17 }}>
                <Stack as={Container} spacing={4} pb={10} px={0} position={'relative'} maxW={'7xl'} textAlign={'left'}>
                    <Heading fontSize={{ base: 'lg', sm: 'lg' }} fontWeight={'bold'} >
                        Uw digitale voetafdruk vergroten
                    </Heading>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} maxW={'3xl'} fontWeight={'bold'} className="title-gradient">
                        Onze toolbox voor webontwikkeling
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'3xl'}>
                        Bij NexaDigital zijn we gespecialiseerd in het ontwerpen van uitmuntende digitale ervaringen. Met behulp van efficiënte projectmanagementtechnieken zoals Agile en Scrum zorgen we ervoor dat ons ontwikkelingsproces gestroomlijnd en effectief is. Of u nu een eenvoudige website of een complexe webapplicatie nodig heeft, wij hebben de expertise om uw visie tot leven te brengen.
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