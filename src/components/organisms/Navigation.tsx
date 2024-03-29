import {
    Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover,
    PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon,
} from '@chakra-ui/icons';
import Logo from '../atoms/Logo';
import MenuItem from '../molecules/MenuItem';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Navigation() {
    const { isOpen, onToggle } = useDisclosure();

    const router = useRouter();

    const [clientWindowHeight, setClientWindowHeight] = useState(0);

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <Box className='header-nav' position={{ base: clientWindowHeight !== 0 ? 'fixed' : 'relative', sm: router.pathname == "/" ? clientWindowHeight !== 0 ? 'fixed' : 'absolute' : 'relative' }} bg={{ base: 'brand.secondary', md: router.pathname == "/" ? 'transparent' : 'brand.secondary' }} boxShadow={{ base: 'md', md: 'none' }} >
            <Flex
                color={useColorModeValue('white.600', 'white')}
                height={{ base: '70px', md: '100px' }}
                boxShadow={clientWindowHeight !== 0 ? '0 10px 12px 0 #01010157' : ''}
                background={clientWindowHeight !== 0 ? 'brand.secondary' : 'transparent'}
                borderRadius={0}
                transition="all 0.5s ease"
                p={4}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={8} h={8} color={"white"} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Logo />
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                <Stack display={{ base: 'none', md: 'block' }}
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button rounded={'full'} transition="all .4s ease" px={6} >
                        contact
                    </Button>
                </Stack>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('white.600', 'gray.200');
    const linkHoverColor = useColorModeValue('white.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4} alignItems="center">
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <MenuItem linkColor={linkColor} linkHoverColor={linkHoverColor} to={navItem.href} isLast={undefined}>{navItem.label}</MenuItem>
                        </PopoverTrigger>
                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            position={"fixed"}
            width={'100%'}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    spacing={8}
                    align="center"
                    direction={["column", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    {children &&
                        children.map((child, index) => (
                            <MenuItem key={index} linkColor={undefined} linkHoverColor={undefined} to={child.href} isLast={undefined}>{child.label}</MenuItem>
                        ))}


                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Over ons',
        href: '/about',
    },
    {
        label: 'Digitale oplossingen',
        href: '/solutions',
    },
    {
        label: 'Diensten',
        href: '/services',
    },
    {
        label: 'Offerte aanvraag',
        href: '/quote',
    },
];