import {
    Container,
    Heading,
    Stack,
    Text,
    Image,
    Box,
    Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <Box className='hero-block' height={{ base: '100vh', md: '100vh' }} justifyContent={'center'} background={{ base: 'url(img/blob-hero-mobile.svg)', md: 'url(img/blob-hero.svg)' }} >
            <Box className="blur" height={{ base: '100vh', md: '100vh' }} backdropFilter={{ base: 'brightness(0.6)', md: 'brightness(1)' }} >
                <Container mt={{ base: 8, md: 0 }}>
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
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Link href='#contact' rounded={'full'}
                                    px={6}
                                    py={3}
                                    w={'fit-content'}
                                    colorScheme={'orange'}
                                    bg={'orange.400'}
                                    color={'white'}
                                    fontWeight={'bold'}
                                    display={'flex'}
                                    alignItems={'center'}
                                    transition="all .4s ease"
                                    _hover={{ textDecorationLine: 'none' }}>
                                    Contact Us
                                </Link>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Link href='#showcases' rounded={'full'}
                                    px={6}
                                    py={3}
                                    w={'fit-content'}
                                    color={'brand.secondary'}
                                    fontWeight={'bold'}
                                    display={'flex'}
                                    alignItems={'center'}
                                    bg={'brand.tertiary'}
                                    transition="all .4s ease"
                                    _hover={{ textDecorationLine: 'none' }}>
                                    Our Projects
                                </Link>
                            </motion.button>
                        </Stack>
                    </Stack>
                </Container >
                <Container maxWidth={'100%'} pt={{ base: 5, md: 0 }}>
                    <Box display={'flex'} ml={{ base: 0, md: 'auto' }} mt={{ base: 2, md: 10 }} alignItems={'flex-start'} justifyContent={{ base: 'center', md: 'center' }}>
                        <Image display={{ base: 'none', md: 'block' }}
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

