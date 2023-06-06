import { Container } from '@chakra-ui/react'
import { servicesCollection } from '../../data/ServicesContent';
import { Link, Icon, VStack, Heading, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from 'next/link'

export default function Post(props) {
  return (
    <Container maxW='7xl' marginY={5}>
      <VStack  spacing="2" alignItems="flex-start">
        <Link as={NextLink} href='/services' rounded={'full'}
          variant={'link'} color={'brand.secondary'}
          fontWeight={'bold'}
          display={'flex'}
          marginY={5}
          py={2}
          width={350}
          px={5}
          bg={'brand.primary'}
          transition="all .4s ease"
          _hover={{ textDecorationLine: 'none' }}>
          Terug naar alle diensten
          <Icon as={ArrowForwardIcon} boxSize={6} />
        </Link>
        <Heading as="h2">{props.title}</Heading>
        <Text as="p" fontSize="lg">
          {props.text}
        </Text>
      </VStack>
    </Container>
  )
}

export async function getStaticPaths() {

  const thePaths = servicesCollection.map(service => {
    return { params: { slug: service.slug } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {

  const collectionServices = servicesCollection.filter(post => post.slug === context.params.slug)[0]


  return {
    props: {
      title: collectionServices.title,
      slug: collectionServices.slug,
      text: collectionServices.text
    }
  }
}