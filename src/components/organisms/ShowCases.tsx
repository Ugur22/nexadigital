import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import ShowCase from './ShowCase';
import React from 'react';
import { showcaseitems } from '../../data/showcasesContent';

export default function ShowCases() {
    return (
        <div>
            <Box id='showcases' _before={{
                width: '100%', height: '100%', top: 0, position: 'absolute',
                left: 0, content: '""', backdropFilter: 'blur(4px) brightness(0.6)', backgroundSize: '100%'
            }} p={4} color="white" py={{ base: 10, md: 24 }} position={'relative'}
                backgroundImage={{ base: 'img/showcases-bg-mobile.jpg', md: 'img/showcase-bg.jpg' }} backgroundSize={{ base: 'cover' }} backgroundAttachment={{ base: 'none', md: 'fixed' }} backgroundPosition={'top'}>
                <Stack as={Container} spacing={4} px={0} position={'relative'} maxW={'7xl'} textAlign={'left'}>
                    <Heading fontSize={{ base: 'xl', sm: 'xl' }} fontWeight={'bold'} >
                        Showcases
                    </Heading>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} >
                        Bekijk onze digitale oplossingen in actie
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'} >
                        NexaDigital is gespecialiseerd in het creëren van digitale oplossingen op maat voor bedrijven. Ons portfolio bevat recente projecten op het gebied van webdesign, branding, beheer van sociale media en contentcreatie. Bekijk ons werk om te zien hoe we onze klanten hebben geholpen succesvol te zijn en te groeien.
                    </Text>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} maxW={'7xl'} mx={'auto'} my={6} gap={{ base: 3, lg: 6 }}>
                    {showcaseitems.map((post, index) => {
                        return (
                            <ShowCase key={index} title={post.title} imgUrl={post.imageUrl} text={post.text} />
                        )
                    })}
                </SimpleGrid>
            </Box>
        </div>
    )
}
