import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
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
]

export default function ShowCases() {
    return (
        <div>
            <Box _before={{
                width: '100%', height: '100%', top: 0, position: 'absolute',
                left: 0, content: '""', backdropFilter: 'blur(4px) brightness(0.6)', backgroundSize: '100%'
            }} p={4} color="white" py={10} position={'relative'}
                backgroundImage={'url(img/showcase-bg.jpg)'} backgroundSize={'cover'} backgroundAttachment={'fixed'} backgroundPosition={'top'}>
                <Stack spacing={4} position={'relative'} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                        Showcases
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }}>
                        We help businesses achieve success through customized digital solutions. Browse our recent projects in web design, branding, social media,
                        and content creation to see how we have helped our clients overcome challenges and drive growth.
                    </Text>
                </Stack>
                <Box my={6} display={'flex'} alignItems={'Center'} justifyContent={'center'} flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: 3, md: 6 }}>
                    {showcaseitems.map((post, index) => {
                        return (
                            <ShowCase key={index} title={post.title} subtitle={post.subtitle} imgUrl={post.imageUrl} text={post.text} />
                        )
                    })}
                </Box>
            </Box>
        </div>
    )
}
