import { ArrowForwardIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Link, Flex, Heading, Stack, Text, IconButton, Button, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
}

export default function Card({ heading, description, icon, href }: CardProps) {
    return (
        <Box className='card-service'
            maxW={{ base: 'full', md: '460px' }}
            w={'full'}
            overflow="hidden"
            p={8}>
            <Stack align={'start'} spacing={2} display={'flex'} flexDirection={'column'} gap={4}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg={'white'}>
                    {icon}
                </Flex>
                <Box mt={2} color={'#FFF'}>
                    <Heading size="md" >{heading}</Heading >
                    <Text mt={1} fontSize={'sm'} wordBreak={'break-all'}>
                        {description.substring(0, 120).concat('...')}
                    </Text>
                </Box>


                <Link rounded={'full'}
                    href={href} variant={'link'} color={'brand.secondary'}
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
    );
};
