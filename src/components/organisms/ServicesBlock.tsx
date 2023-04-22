import {
    Box, Container, Flex, Heading, Icon, SimpleGrid, Stack, Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaStore, FaDesktop, FaPencilRuler, FaBug, FaRegListAlt, FaMobileAlt } from "react-icons/fa";
import Card from './Card';


const serviceItems = [
    {
        title: 'Custom web applicatons',
        icon: FaDesktop,
        text: "Transform your business with our custom web application development service, offering tailored solutions that automate processes, streamline workflows, and enhance user experiences using cutting-edge technologies and frameworks."
    },
    {
        title: 'Web design',
        icon: FaPencilRuler,
        text: "We design websites that are visually appealing, user-friendly, and tailored to your brand. Our team uses the latest design trends and tools to create a functional and beautiful website that makes a lasting impression on your audience."

    },
    {
        title: 'E-commerce',
        icon: FaStore,
        text: "We create customized e-commerce solutions that drive sales and grow your online business. Our user-friendly and visually appealing e-commerce websites have secure payment processing and seamless performance across all devices."

    },
    {
        title: 'Website maintenance',
        icon: FaBug,
        text: "Our website maintenance service keeps your website running smoothly with ongoing support, backups, security checks, and updates. We identify areas for improvement and make changes as needed, so you can focus on your business."

    },
    {
        title: 'CMS/CRM/ERP',
        icon: FaRegListAlt,
        text: "We develop customized CMS/CRM/ERP solutions that streamline your business processes. Our user-friendly and visually appealing systems integrate with your existing systems, enabling you to manage your content, customer relationships, and business operations more efficiently.."

    },
    {
        title: 'Mobile apps',
        icon: FaMobileAlt,
        text: "We create visually appealing and optimized mobile apps that engage your customers on the go. Let us help you increase brand awareness and reach your audience wherever they are."

    },
]
export default function ServicesBlock() {
    return (
        <Box p={4} color="brand.secondary" py={{ base: 10, md: 24 }}
            bg={'brand.tertiary'}>
            <Stack as={Container} spacing={4} px={0} position={'relative'} maxW={'7xl'} textAlign={'left'}>
                <Heading fontSize={{ base: 'xl', sm: 'xl' }} fontWeight={'bold'} >
                    Services
                </Heading>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} maxW={'3xl'} fontWeight={'bold'}>
                    Transforming Your Digital Presence: Our Comprehensive Web Agency Services
                </Heading>
                <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'}>
                    We specialize in web development services to help you create and enhance your online presence. Our services include website design and development, e-commerce solutions, and search engine optimization to improve your website&#39;s visibility.
                </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} maxW={'7xl'} mx={'auto'} my={6} gap={{ base: 3, lg: 6 }}>
                {serviceItems.map((service, index) => {
                    return (
                        <Card key={index}
                            heading={service.title}
                            icon={<Icon as={service.icon} w={10} h={10} />}
                            description={
                                service.text
                            }
                            href={'#'}
                        />
                    )
                })}
            </SimpleGrid>
        </Box>
    );
}