import { ReactNode } from 'react';
import {
    Stack,
    Container,
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react';

export default function StatsGridWithImage() {
    return (
        <Box bg={'gray.800'} position={'relative'}>
            <Flex
                flex={1}
                zIndex={0}
                display={{ base: 'none', lg: 'flex' }}
                backgroundImage="url('img/aboutus.jpg')"
                backgroundSize={'cover'}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position={'absolute'}
                width={'50%'}
                insetY={0}
                right={0}>
                <Flex
                    bgGradient={'linear(to-r, gray.800 10%, transparent)'}
                    w={'full'}
                    h={'full'}
                />
            </Flex>
            <Container maxW={'7xl'} zIndex={10} position={'relative'}>
                <Stack direction={{ base: 'column', lg: 'row' }}>
                    <Stack
                        flex={1}
                        color={'gray.400'}
                        justify={{ lg: 'center' }}
                        py={{ base: 4, md: 20, xl: 60 }}>
                        <Box mb={{ base: 8, md: 20 }}>
                            <Text
                                fontFamily={'heading'}
                                fontWeight={700}
                                textTransform={'uppercase'}
                                mb={3}
                                fontSize={'xl'}
                                color={'gray.500'}>
                                Technology
                            </Text>
                            <Heading
                                color={'white'}
                                mb={5}
                                fontSize={{ base: '3xl', md: '5xl' }}>
                                Our mission
                            </Heading>
                            <Text fontSize={'xl'} marginY={2} color={'gray.400'}>
                                At NexaDigital, we believe that technology is the key to unlocking new
                                opportunities and driving growth in todays fast-paced business world. We are
                                passionate about leveraging our expertise and experience to help our clients
                                succeed in their respective industries.
                            </Text>
                            <Text fontSize={'xl'} marginY={2} color={'gray.400'}>
                                Our team of skilled developers, designers, and project managers work closely
                                with each client to understand their unique needs and goals. We take a
                                personalized approach to every project, ensuring that our solutions are
                                tailored to meet the specific needs of each client.
                            </Text>
                            <Text fontSize={'xl'} marginY={2}  color={'gray.400'}>
                                Whether you re looking to build a new website, develop a mobile application,
                                or optimize your digital marketing strategy, NexaDigital has the expertise and
                                skills to deliver results. Our team is dedicated to providing outstanding
                                service and support to ensure that your project is completed on time, within
                                budget, and to the highest standards of quality.
                            </Text>
                        </Box>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {stats.map((stat) => (
                                <Box key={stat.title}>
                                    <Text
                                        fontFamily={'heading'}
                                        fontSize={'3xl'}
                                        color={'white'}
                                        mb={3}>
                                        {stat.title}
                                    </Text>
                                    <Text fontSize={'xl'} color={'gray.400'}>
                                        {stat.content}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Stack>
                    <Flex flex={1} />
                </Stack>
            </Container>
        </Box>
    );
}

const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'white'}>
        {children}
    </Text>
);

const stats = [
    {
        title: '10+',
        content: (
            <>
                <StatsText>Software modules</StatsText> for detailed monitoring and
                real-time analytics
            </>
        ),
    },
    {
        title: '24/7',
        content: (
            <>
                <StatsText>Analytics</StatsText> enabled right in your dashboard without
                history limitations
            </>
        ),
    },
    {
        title: '13%',
        content: (
            <>
                <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
                their management solution
            </>
        ),
    },
    {
        title: '250M+',
        content: (
            <>
                <StatsText>Plants</StatsText> currently connected and monitored by the
                NewLife™ software
            </>
        ),
    },
];