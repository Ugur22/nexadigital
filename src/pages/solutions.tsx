import React from 'react'
import { Box, Card, Container, Heading, Icon, ListItem, SimpleGrid, Stack, Text, UnorderedList } from "@chakra-ui/react"


export default function technologies() {
    return (
        <Box p={4} color="brand.secondary" py={{ base: 10, md: 10 }}
            bg={'brand.tertiary'}>
            <Stack as={Container} spacing={4} px={0} position={'relative'} maxW={'7xl'} textAlign={'left'}>
                <Heading fontSize={{ base: 'xl', sm: 'xl' }} fontWeight={'bold'} >
                    Digitale oplossingen
                </Heading>
                <Heading fontSize={{ base: 'l', sm: '2xl' }} maxW={'3xl'} fontWeight={'bold'} >
                    Je wilt weten welke digitale oplossing het beste bij jouw behoeften past. Het hangt af van wat je precies wilt bereiken.        </Heading>
                <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'}>
                    Bij ons vind je gespecialiseerde webontwikkelingsservices waarmee je jouw online aanwezigheid kunt creëren en versterken. Wij bieden website-ontwerp en -ontwikkeling, e-commerce oplossingen en zoekmachineoptimalisatie om de zichtbaarheid van jouw website te vergroten. Zet vandaag nog de stap naar een succesvolle online aanwezigheid!
                </Text>
                <UnorderedList spacing={4} maxW={'4xl'}>
                    <ListItem>Als je informatie wilt presenteren en een online aanwezigheid wilt opbouwen, dan is een website de juiste keuze. Dit stelt je in staat om je bedrijf, producten of diensten te presenteren aan een breed publiek.</ListItem>
                    <ListItem>Als je specifieke taken wilt uitvoeren via een internetverbinding, zoals het beheren van gegevens, het uitvoeren van complexe berekeningen of het automatiseren van processen, dan is een webapplicatie de beste optie. Het biedt geavanceerdere functionaliteit en interactie dan een traditionele website.</ListItem>
                    <ListItem>Als je een bredere reeks functionaliteiten nodig hebt, zoals het integreren van verschillende systemen, het delen van gegevens tussen gebruikers of het bieden van real-time informatie, dan kan een online applicatie de oplossing zijn. Dit omvat verschillende vormen van software die via internet worden geleverd.</ListItem>
                    <ListItem>Als je specifiek wilt targeten op gebruikers van mobiele apparaten, zoals smartphones en tablets, en profiteren van functies zoals pushmeldingen en locatiegebaseerde diensten, dan is een mobiele applicatie geschikt. Het biedt een optimale gebruikerservaring op mobiele apparaten.</ListItem>
                </UnorderedList>
                <Text maxW={'4xl'}>
                    Bij NexaDigital staan we klaar om je te helpen bij het bepalen welke oplossing het beste aansluit bij jouw behoeften. We kunnen je adviseren en begeleiden bij het kiezen tussen software, een website, webapplicatie, online applicatie, mobiele applicatie of andere oplossingen. Neem gerust contact met ons op zodat we samen kunnen kijken naar jouw specifieke doelen en de beste digitale oplossing voor jou kunnen bepalen.
                </Text>
            </Stack>
        </Box>
    )
}
