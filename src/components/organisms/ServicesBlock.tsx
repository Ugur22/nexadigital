import {
    Box, Container, Flex, Heading, Icon, SimpleGrid, Stack, Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Card from './Card';

import { servicesCollection } from '../../data/ServicesContent';

export default function ServicesBlock() {
    return (
        <Box p={4} color="brand.secondary" py={{ base: 10, md: 24 }}
            bg={'brand.tertiary'}>
            <Stack as={Container} spacing={4} px={0} position={'relative'} maxW={'7xl'} textAlign={'left'}>
                <Heading fontSize={{ base: 'xl', sm: 'xl' }} fontWeight={'bold'} >
                    Services
                </Heading>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} maxW={'3xl'} fontWeight={'bold'} className="title-gradient">
                    Het transformeren van jouw digitale aanwezigheid: Onze uitgebreide webbureaudiensten
                </Heading>
                <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'}>
                    Wij zijn gespecialiseerd in webontwikkelingsdiensten om je te helpen bij het creëren en verbeteren van je online aanwezigheid. Onze diensten omvatten websiteontwerp en -ontwikkeling, e-commerce oplossingen en zoekmachineoptimalisatie om de zichtbaarheid van je website te verbeteren.
                </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} maxW={'7xl'} mx={'auto'} my={6} gap={{ base: 3, lg: 6 }}>
                {servicesCollection.map((service, index) => {
                    return (
                        <Card key={index}
                            heading={service.title}
                            icon={<Icon as={service.icon} w={10} h={10} />}
                            description={
                                service.text
                            }
                            href={`${service.slug}`}
                        />
                    )
                })}
            </SimpleGrid>
        </Box>
    );
}