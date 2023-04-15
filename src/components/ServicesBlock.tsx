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
import { FaAppStore, FaDesktop, FaPencilRuler, FaStore, FaBug, FaRegListAlt, FaMobileAlt } from "react-icons/fa";

interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
        <Box className='card-service'
            maxW={{ base: 'full', md: '400px' }}
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
            <Stack spacing={4} as={Container} px={{ sm: 0, md: 8 }} maxW={'7xl'} textAlign={'left'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Services
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'} >
                    We specialize in web development services to help you create and enhance your online presence. Our services include website design and development, e-commerce solutions, and search engine optimization to improve your website's visibility.
                </Text>
            </Stack>

            <Container  maxW={'7xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={'Custom web application development'}
                        icon={<Icon as={FaDesktop} w={10} h={10} />}
                        description={
                            'Transform your business with our custom web application development service, offering tailored solutions that automate processes, streamline workflows, and enhance user experiences using cutting-edge technologies and frameworks.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Web application design'}
                        icon={<Icon as={FaPencilRuler} w={10} h={100} />}
                        description={
                            'We design websites that are visually appealing, user-friendly, and tailored to your brand. Our team uses the latest design trends and tools to create a functional and beautiful website that makes a lasting impression on your audience.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'E-commerce development'}
                        icon={<Icon as={FaStore} w={10} h={10} />}
                        description={
                            'We create customized e-commerce solutions that drive sales and grow your online business. Our user-friendly and visually appealing e-commerce websites have secure payment processing and seamless performance across all devices.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Website maintenance'}
                        icon={<Icon as={FaBug} w={10} h={10} />}
                        description={
                            'Our website maintenance service keeps your website running smoothly with ongoing support, backups, security checks, and updates. We identify areas for improvement and make changes as needed, so you can focus on your business.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'CMS/CRM/ERP development'}
                        icon={<Icon as={FaRegListAlt} w={10} h={10} />}
                        description={
                            'We develop customized CMS/CRM/ERP solutions that streamline your business processes. Our user-friendly and visually appealing systems integrate with your existing systems, enabling you to manage your content, customer relationships, and business operations more efficiently.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Mobile app development'}
                        icon={<Icon as={FaMobileAlt} w={10} h={10} />}
                        description={
                            'We create visually appealing and optimized mobile apps that engage your customers on the go. Let us help you increase brand awareness and reach your audience wherever they are.'
                        }
                        href={'#'}
                    />
                </Flex>
            </Container>
        </Box>
    );
}