import {
    Box,
    Center,
    Image,
    Text,
    Stack,
    Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
                    bg={'white'}
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
                    <motion.div
                        whileHover={{  x: 10 }}
                        whileTap={{
                            x: 10
                        }}
                    >
                        <Link rounded={'full'}
                            px={6}
                            py={2}
                            w={'fit-content'}
                            alignSelf={'right'}
                            color={'brand.secondary'}
                            fontWeight={'bold'}
                            display={'flex'}
                            bg={'brand.tertiary'}
                            transition="all .4s ease"
                            _hover={{ textDecorationLine: 'none' }}>
                            Read case
                        </Link>
                    </motion.div>
                </Stack>
            </Box>
        </Center>
    );
}