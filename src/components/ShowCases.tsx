import { Box, Center, Container, Heading, Stack, Text } from '@chakra-ui/react'
import ShowCase from '../components/ShowCase';
import React from 'react'
import { url } from 'inspector';


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
            <Box p={4} color="#FFF" py={10}
                backgroundImage={'url(img/wave-haikei-4.svg)'} backgroundSize={'cover'}  backgroundPosition={'top'}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                        Showcases
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }}>
                        We help businesses achieve success through customized digital solutions. Browse our recent projects in web design, branding, social media,
                        and content creation to see how we have helped our clients overcome challenges and drive growth.
                    </Text>
                </Stack>
                <Box display={'flex'} alignItems={'Center'} justifyContent={'center'} flexDirection={{ base: 'column', lg: 'row' }} gap={6}>
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
