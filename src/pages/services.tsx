import { Box, Container, Heading, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import React from 'react'
import Card from '../components/organisms/Card';
import { servicesCollection } from './../data/ServicesContent'

export default function services() {
    return (
        <Box p={4} color="brand.secondary" py={{ base: 10, md: 10 }}
            bg={'brand.tertiary'}>
            <Stack as={Container} spacing={4} px={0} position={'relative'} maxW={'7xl'} textAlign={'left'}>
                <Heading fontSize={{ base: 'xl', sm: 'xl' }} fontWeight={'bold'} >
                    Services
                </Heading>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} maxW={'3xl'} fontWeight={'bold'} className="title-gradient">
                    Transforming Your Digital Presence: Our Comprehensive Web Agency Services
                </Heading>
                <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'}>
                    We specialize in web development services to help you create and enhance your online presence. Our services include website design and development, e-commerce solutions, and search engine optimization to improve your website&#39;s visibility.
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
    )
}
