import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Box,
    Center,
    Image,
    Text,
    Stack,
    Link,
    Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function ShowCase({ imgUrl, title, text }) {
    return (
        <Center py={{ base: 3, lg: 0 }}>
            <Box
                height={{  lg: '460px' }}
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
                   align={'start'} spacing={2} display={'flex'} flexDirection={'column'} gap={4}>
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
                    href={'#'} variant={'link'} color={'brand.secondary'}
                    fontWeight={'bold'}
                    display={'flex'}
                    mt={4}
                    py={2}
                    px={5}
                    bg={'brand.primary'}
                    transition="all .4s ease"
                    _hover={{ textDecorationLine: 'none' }}>
                    Learn more
                    <motion.div
                      whileHover={{ x: 10 }}
                      whileTap={{
                          x: 10
                      }}
                    >
                        <Icon as={ArrowForwardIcon} boxSize={6} />

                    </motion.div>
                </Link>
                </Stack>
            </Box>
        </Center>
    );
}