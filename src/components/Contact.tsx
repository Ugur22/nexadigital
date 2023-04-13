import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';

export default function Contact() {
    return (
        <Container maxW="full" mt={0} centerContent backgroundImage={'url(img/circle-scatter-haikei.svg)'} backgroundSize={'cover'} backgroundAttachment={'fixed'} backgroundPosition={'right'}>
            <Box className='contactBlock' m={{ base: 4, sm: 4, md: 16, lg: 10 }}
                p={{ base: 4, sm: 5, md: 5, lg: 16 }}
                w={{base: '100%',sm: '90%', md: '500px', lg: '600px'}}
                color="#1e272e"
                borderRadius="lg" display={'flex'} flexDirection={'column'} gap={5}>
                <Heading as='h2' size='xl'>
                    Contact
                </Heading>
                <FormControl isRequired>
                    <FormLabel fontWeight={'bold'}>First name</FormLabel>
                    <Input placeholder='First name' borderColor={'#1e272e'}  />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontWeight={'bold'}>Last name</FormLabel>
                    <Input placeholder='First name' borderColor={'#1e272e'}  />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontWeight={'bold'}>Email</FormLabel>
                    <Input placeholder='First name' borderColor={'#1e272e'} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontWeight={'bold'}>Message</FormLabel>
                    <Textarea placeholder='Here is a sample placeholder' borderColor={'#1e272e'}  />
                </FormControl>

                <Button
                    rounded={'full'}
                    px={6}
                    bg={'#FBAE3C'}
                    transition="all .4s ease"
                    _hover={{ bg: '#1e272e', color: '#FFF'}}>
                    Send
                </Button>
            </Box>
        </Container>
    );
}