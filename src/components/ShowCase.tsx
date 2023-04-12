import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

export default function ShowCase({ imgUrl, title, subtitle, text }) {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                className="showcase-card"
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={imgUrl}
                        layout={'fill'} alt={''} />
                </Box>
                <Stack>
                    <Text
                        color={'#1e272e'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {title}
                    </Text>
                    <Heading
                        color={useColorModeValue('white', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {subtitle}
                    </Heading>
                    <Text color={'white'}>
                        {text}
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
}