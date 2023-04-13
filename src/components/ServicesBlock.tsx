import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
} from 'react-icons/fc';

interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
        <Box className='card-service'
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg={'white'}>
                    {icon}
                </Flex>
                <Box mt={2} color={'1e272e'}>
                    <Heading size="md" >{heading}</Heading >
                    <Text mt={1} fontSize={'sm'} >
                        {description}
                    </Text>
                </Box>
                <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                    Learn more
                </Button>
            </Stack>
        </Box>
    );
};

export default function ServicesBlock() {
    return (
        <Box p={4} color="brand.secondary" py={10}
            bg={'brand.tertiary'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Services
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    We offer a range of services to help you establish and grow your online presence.

                    Our services include website design and development, e-commerce solutions, search engine optimization, social media management, and digital marketing campaigns.
                </Text>
            </Stack>

            <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={'Custom web application development'}
                        icon={<Icon as={FcAssistant} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Web application design'}
                        icon={<Icon as={FcCollaboration} w={10} h={100}  /> }
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'E-commerce development'}
                        icon={<Icon as={FcDonate} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Website maintenance'}
                        icon={<Icon as={FcManager} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'CMS/CRM/ERP development'}
                        icon={<Icon as={FcAbout} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Mobile app development'}
                        icon={<Icon as={FcAbout} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                </Flex>
            </Container>
        </Box>
    );
}