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
        <Center py={{ base: 3, lg: 6 }}>
            <Box
                maxW={{ md: '600px', lg: '445px' }}
                w={'full'}
                className="showcase-card"
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                border={0}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={imgUrl}
                        objectFit={'cover'}
                        layout={'fill'} alt={'project'} />
                </Box>
                <Stack>
                    <Text
                        color={'brand.secondary'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'lg'}
                        letterSpacing={1.1}>
                        {title}
                    </Text>
                    <Heading
                        color={useColorModeValue('brand.secondary', 'white')}
                        fontSize={'xl'}>
                        {subtitle}
                    </Heading>
                    <Text color={'brand.secondary'} fontSize={'sm'} fontWeight={'500'}>
                        {text}
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
}