import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import ShowCase from '../components/ShowCase';
import React from 'react';

const showcaseitems = [
    {
        title: 'Webapp',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/laptop.png',
        text: "the perfect platform to display your portfolio, art, or creative work to the world! With a sleek and user-friendly interface, Showcase makes it easy to upload, organize, and share your projects with potential clients, employers, or fans."
    },
    {
        title: 'Webapp',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/laptop.png',
        text: "the perfect platform to display your portfolio, art, or creative work to the world! With a sleek and user-friendly interface, Showcase makes it easy to upload, organize, and share your projects with potential clients, employers, or fans."

    },
    {
        title: 'Webapp',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/laptop.png',
        text: "the perfect platform to display your portfolio, art, or creative work to the world! With a sleek and user-friendly interface, Showcase makes it easy to upload, organize, and share your projects with potential clients, employers, or fans."

    },
    {
        title: 'Webapp',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/laptop.png',
        text: "the perfect platform to display your portfolio, art, or creative work to the world! With a sleek and user-friendly interface, Showcase makes it easy to upload, organize, and share your projects with potential clients, employers, or fans."

    },
]

export default function ShowCases() {
    return (
        <div>
            <Box _before={{
                width: '100%', height: '100%', top: 0, position: 'absolute',
                left: 0, content: '""', backdropFilter: 'blur(4px) brightness(0.6)', backgroundSize: '100%'
            }} p={4} color="white" py={10} position={'relative'}
                backgroundImage={'url(img/showcase-bg.jpg)'} backgroundSize={'cover'} backgroundAttachment={'fixed'} backgroundPosition={'top'}>
                <Stack as={Container} spacing={4} position={'relative'} maxW={'6xl'} textAlign={'left'}>
                    <Heading fontSize={{ base: 'xl', sm: 'xl' }} fontWeight={'bold'} >
                        Showcases
                    </Heading>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                        See Our Digital Solutions in Action.
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'}>
                        NexaDigital specializes in creating custom digital solutions for businesses. Our portfolio features recent projects in web design, branding, social media management, and content creation. Take a look at our work to see how we've helped our clients succeed and grow.
                    </Text>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} maxW={'6xl'} mx={'auto'} my={6} gap={{ base: 3, lg: 6 }}>
                    {showcaseitems.map((post, index) => {
                        return (
                            <ShowCase key={index} title={post.title} subtitle={post.subtitle} imgUrl={post.imageUrl} text={post.text} />
                        )
                    })}
                </SimpleGrid>
            </Box>
        </div>
    )
}
