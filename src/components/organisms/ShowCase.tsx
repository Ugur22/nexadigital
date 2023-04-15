import {
    Box,
    Center,
    Heading,
    Image,
    Text,
    Stack,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';

export default function ShowCase({ imgUrl, title, subtitle, text }) {
    return (
        <Center py={{ base: 3, lg: 0 }}>
            <Box
                height={{ md: '600px', lg: '440px' }}
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
                    padding={4}
                        objectFit='contain'
                        boxSize='100%'
                        src={imgUrl}
                        alt={title} title={title}
                    />
                </Box>
                <Stack
                    flexDirection={'column'}
                    gap={4}>
                    <Text
                        color={'brand.secondary'}
                        fontWeight={800}
                        fontSize={'md'}
                        letterSpacing={1.1}>
                        {title}
                    </Text>
                    <Text color={'brand.secondary'} fontSize={'sm'} fontWeight={'500'}>
                        {text.substring(0, 140).concat('...')}
                    </Text>
                    <Link rounded={'full'}
                        px={6}
                        py={2}
                        alignSelf={'right'}
                        color={'brand.secondary'}
                        fontWeight={'bold'}
                        display={'flex'}
                        w={'fit-content'}
                        bg={'brand.tertiary'}
                        transition="all .4s ease"
                        _hover={{ textDecorationLine: 'none' }}>
                        Read case
                    </Link>
                </Stack>
            </Box>
        </Center>
    );
}