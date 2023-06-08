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

export default function TextWithImage() {
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
                left={0}>

                <Flex
                    bgGradient={'linear(to-l, gray.800 20%, transparent)'}
                    w={'full'}
                    h={'full'}
                />
            </Flex>
            <Container maxW={'4xl'}  zIndex={10} marginInlineEnd={0} position={'relative'}  className="testiee">
                <Stack direction={{ base: 'column', lg: 'row' }}>
                    <Stack 
                        color={'gray.400'}
                        justify={{ lg: 'center' }}
                        py={{ base: 4, md: 10 }}>
                        <Box mb={{ base: 8, md: 10 }}>
                            <Text
                                fontFamily={'heading'}
                                fontWeight={700}
                                textTransform={'uppercase'}
                                mb={3}
                                fontSize={'xl'}
                                color={'gray.500'}>
                                Versterk jouw digitale succes met NexaDigital
                            </Text>
                            <Heading
                                color={'white'}
                                mb={5}
                                fontSize={{ base: '3xl', md: '5xl' }}>
                                Onze missie
                            </Heading>
                            <Text fontSize={'xl'} marginY={2} color={'gray.400'}>
                                Bij NexaDigital geloven we sterk in de kracht van technologie om nieuwe kansen te ontsluiten en groei te stimuleren in de snelle zakelijke wereld van vandaag. Ons gepassioneerde team van ervaren ontwikkelaars, ontwerpers en projectmanagers werkt nauw samen met elke klant om hun unieke behoeften en doelen te begrijpen.
                            </Text>
                            <Text fontSize={'xl'} marginY={2} color={'gray.400'}>
                                Met een persoonlijke aanpak leveren we op maat gemaakte oplossingen die voldoen aan de specifieke behoeften van elke klant. Of je nu een nieuwe website wilt bouwen, een indrukwekkende mobiele applicatie wilt ontwikkelen of je digitale marketingstrategie wilt optimaliseren, NexaDigital staat klaar om resultaten te behalen.
                            </Text>
                        </Box>
                    </Stack>
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