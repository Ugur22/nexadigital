import {
    Container,
    Box,
    Heading,
    Button,
    FormControl,
    FormLabel,
    Input,
    Image,
    Text,
    Textarea
} from '@chakra-ui/react';


export default function Contact() {

    return (
        <Container py={{ base: 10, md: 16 }} id='contact' maxW="full" mt={0} centerContent backgroundImage={'url(img/blob-hero.svg)'} backgroundSize={'cover'}>

            <Box className='contactBlock' m={{ base: 0, sm: 4, md: 16, lg: 10 }}
                p={{ base: 0, sm: 5, md: 5, lg: 16 }}
                w={{ base: '100%', sm: '90%', md: '800px', lg: '1000px', xl: '1000px' }}
                color="brand.secondary"
                border={0}
                borderRadius="lg" display={'flex'} flexDirection={{ base: 'column', lg: 'row' }} gap={5}>

                <Box display={'flex'} flexDirection={'column'} gap={5} p={{base: 4}}>
                    <Heading as='h2' size='lg'>
                        Get in Touch with Us
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'} >
                        Let us assist you in achieving your digital goals - fill out the form below and we will get back to you promptly.
                    </Text>
                    <Image
                        padding={4}
                        height={{base: '200', lg: '100%'}}
                        alignSelf={'flex-start'}
                        justifySelf={'flex-start'}
                        objectFit='contain'
                        src="img/undraw_contact_us_re_4qqt.svg"
                        alt={"test"} title={"test"}
                    />
                </Box>
                <Box backgroundColor={'white'} padding={{base: 4, lg: 8}} borderRadius={{base: 0, md: 'lg'}} w={'100%'} display={'flex'} flexDirection={'column'} gap={4}>
                    <FormControl isRequired>
                        <FormLabel fontWeight={'bold'}>First name</FormLabel>
                        <Input placeholder='First name' borderColor={'brand.secondary'} _hover={{ borderColor: 'none' }} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontWeight={'bold'}>Last name</FormLabel>
                        <Input placeholder='First name' borderColor={'brand.secondary'} _hover={{ borderColor: 'none' }} />
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel fontWeight={'bold'}>Email</FormLabel>
                        <Input placeholder='First name' borderColor={'brand.secondary'} _hover={{ borderColor: 'none' }} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontWeight={'bold'}>Message</FormLabel>
                        <Textarea placeholder='Here is a sample placeholder' borderColor={'brand.secondary'} _hover={{ borderColor: 'none' }} />
                    </FormControl>
                    <Button
                        rounded={'full'}
                        px={6}
                        alignSelf={'flex-end'}
                        w={'fit-content'}
                        bg={'brand.primary'}
                        transition="all .4s ease"
                        _hover={{ bg: 'brand.secondary', color: 'white' }}>
                        Send
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}