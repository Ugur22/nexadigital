import { Stat, Flex, StatLabel, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ToolCardProps {
    title: string;
    icon: ReactNode;
    colorIcon: string;
    bgIcon?: string;
}
export default function Card(props: ToolCardProps) {
    const { title, icon, colorIcon, bgIcon = '' } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'2px solid'}
            borderColor={colorIcon}
            rounded={'lg'}>
            <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} fontSize={'xl'} isTruncated>
                        {title}
                    </StatLabel>
                </Box>
                <Box
                    my={'auto'}
                    color={colorIcon}
                    borderRadius={12}
                    bgColor={bgIcon}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}