import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import TextWithImage from '../components/organisms/TextWithImage';
import Technologies from '../components/organisms/Technologies';

export default function About() {
  return (
    <div>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack minH={'800px'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'blue.400',
                    zIndex: -1,
                  }}>
                  Over Ons
                </Text>
                <br />{' '}
                <Text color={'blue.400'} as={'span'}>
                  Digital made simple
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                Welkom bij NexaDigital, een jong en dynamisch bedrijf dat gespecialiseerd is in website- en applicatieontwikkeling. Ons bedrijf is gevestigd in Nederland en we zijn toegewijd aan het leveren van uitzonderlijke digitale oplossingen die de verwachtingen van onze klanten overtreffen.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  ik wil een applicatie
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} paddingRight={20}>
            <Image
              alt={'about us image'}
              objectFit={'contain'}
              src={
                'img/undraw_team_work_k-80-m.svg'
              }
            />
          </Flex>
        </Stack>
      </Container>
      <TextWithImage />
      <Technologies />
    </div>
  );
}