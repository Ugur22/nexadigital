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
        <div>
            <Container>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    borderRadius={0}
                    py={{ base: 15, md: 27 }}>
                    <Heading
                        fontWeight={600}
                        color={'#FFF'}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
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
                            _hover={{ bg: 'orange.500' }}>
                            Contact Us
                        </Button>
                        <Button rounded={'full'} px={6}>
                            Our Projects
                        </Button>
                    </Stack>
                </Stack>
            </Container >
            <Container maxWidth={'100%'} >
                <Box display={'flex'} pr={{ base: 0, lg: 20 }}  justifyContent={{ base: 'center', md: 'end' }} alignItems={'center'}>
                    <Image
                        src='img/wireframing.svg'
                        boxSize={{ base: 300, md: 400 }}
                        alt='Hero cta '
                    />
                </Box>
            </Container>
        </div >
    );
}

