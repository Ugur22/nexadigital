import React from 'react'
import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import ShowCases from '../components/organisms/ShowCases'
import ShowCase from '../components/organisms/ShowCase'
import { showcaseitems } from '../data/showcasesContent'



export default function showcases() {
  return (
    <div>
      <Box id='showcases' _before={{
        width: '100%', height: '100%', top: 0, position: 'absolute',
        left: 0, content: '""', backdropFilter: 'blur(4px) brightness(0.6)', backgroundSize: '100%'
      }} p={4} color="white" py={{ base: 10, md: 10 }} position={'relative'}
        backgroundImage={{ base: 'img/showcases-bg-mobile.jpg', md: 'img/showcase-bg.jpg' }} backgroundSize={{ base: 'cover' }} backgroundAttachment={{ base: 'none', md: 'fixed' }} backgroundPosition={'top'}>
        <Stack as={Container} spacing={4} px={0} position={'relative'} maxW={'7xl'} textAlign={'left'}>
          <Heading fontSize={{ base: 'xl', sm: 'xl' }} fontWeight={'bold'} >
            Showcases
          </Heading>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} >
            See Our Digital Solutions in Action.
          </Heading>
          <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'} >
            NexaDigital specializes in creating custom digital solutions for businesses. Our portfolio features recent projects in web design, branding, social media management, and content creation. Take a look at our work to see how we have helped our clients succeed and grow.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} maxW={'7xl'} mx={'auto'} my={6} gap={{ base: 3, lg: 6 }}>
          {showcaseitems.map((post, index) => {
            return (
              <ShowCase key={index} title={post.title} imgUrl={post.imageUrl} text={post.text} />
            )
          })}
        </SimpleGrid>
      </Box>
    </div>
  )
}
