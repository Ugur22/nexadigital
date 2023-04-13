import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
    Box,
} from '@chakra-ui/react';

export default function Hero() {
    return (
        <Box className='hero-block' height={{ base: 'calc(100vh - 60px)', md: '100vh' }} justifyContent={'center'} background={{ base: 'url(img/blob-hero-mobile.svg)', md: 'url(img/blob-hero.svg)' }} >
            <Box className="blur" backdropFilter={{ base: 'brightness(0.6)', md: 'brightness(1)' }} >
                <Container>
                    <Stack
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        borderRadius={0}
                        py={{ base: 10 }} pb={{ sm: 10 }} pt={{ md: 28 }}>
                        <Heading
                            fontWeight={600}
                            color={'white'}
                            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                            lineHeight={'110%'}>
                            NexaDigital{' '}
                            <Text as={'span'} color={'orange.400'}>
                                Simplifying the Digital Experience.
                            </Text>
                        </Heading>
                        <Text color={'white'} maxW={'3xl'}>
                            NexaDigital - Your trusted web agency for web design, web development, SEO, digital marketing and more. Our tailored approach ensures we deliver the results you need to succeed online. Let us simplify your digital journey.
                        </Text>
                        <Stack spacing={6} direction={'row'}>
                            <Button
                                rounded={'full'}
                                px={6}
                                colorScheme={'orange'}
                                bg={'orange.400'}
                                transition="all .4s ease"
                                _hover={{ bg: 'orange.500' }}>
                                Contact Us
                            </Button>
                            <Button rounded={'full'} transition="all .4s ease" px={6}>
                                Our Projects
                            </Button>
                        </Stack>
                    </Stack>
                </Container >
                <Container maxWidth={'100%'} pt={{ base: 5, md: 0 }}>
                    <Box display={'flex'} ml={{ base: 0, md: 'auto' }} mt={{ base: 2, md: 10 }} alignItems={'flex-start'} justifyContent={{ base: 'center', md: 'center' }}>
                        <Image
                            src='img/hero-image.svg' ml={{ base: 0, md: '120px' }}
                            width={{ base: '100%', md: 500 }}
                            height={{ base: 300, md: '100%' }}
                            alt='Hero cta '
                        />
                    </Box>
                </Container>
            </Box>
        </Box >
    );
}

