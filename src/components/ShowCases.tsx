import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import ShowCase from '../components/ShowCase';
import React from 'react';

const showcaseitems = [
    {
        title: 'Online Reservation System',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/cases/undraw_booking_re_gw4j.svg',
        text: "In this case, our client was a rental car company. The application enables them to receive online reservations. Their clients can see all available vehicles and make a reservation for selected date and time."
    },
    {
        title: 'Online order system',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/cases/undraw_online_payments_re_y8f2.svg',
        text: "This time is an online order system for a catering company who sells food to a specific market. Only registered members can order food every week."

    },
    {
        title: 'Financial calculator',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/cases/undraw_data_processing_yrrv.svg',
        text: "As a business owner in financial sector, a client needed to implement online calculator on their website to make online sales. By implementing their formulas in the application, we provided them financial online calculator, like mortgage, credit, or loan calculator."

    },
    {
        title: 'Digitalized form',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/cases/undraw_my_app_re_gxtj.svg',
        text: "In Europe there is a standard damage report form for claiming their car insurance. In this case we created an app which will automatically generate the form for the users."

    },
    {
        title: 'Signature document generator',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/cases/undraw_forms_re_pkrt.svg',
        text: "In some cases, people will have to sign many documents at once. Furthermore, those documents will be scanned to get digital copies of those documents. For this case, we have made it a lot simpler with our application. After the documents are automatically generated, people can sign those and save. It will automatically put their signatures on the PDF document."

    },
    {
        title: 'Leads generator',
        subtitle: 'Boost your conversion rate',
        imageUrl: '/img/cases/undraw_site_stats_re_ejgy.svg',
        text: "As a mortgage intermediary, this company find potential consumers who are looking for mortgage on the internet and sell their personal data to the mortgage advisors. The product, which contain personal data and interest is called as a lead."

    },
]

export default function ShowCases() {
    return (
        <div>
            <Box id='showcases' _before={{
                width: '100%', height: '100%', top: 0, position: 'absolute',
                left: 0, content: '""', backdropFilter: 'blur(4px) brightness(0.6)', backgroundSize: '100%'
            }} p={4} color="white" py={24} position={'relative'}
                backgroundImage={'url(img/showcase-bg.jpg)'} backgroundSize={'cover'} backgroundAttachment={'fixed'} backgroundPosition={'top'}>
                <Stack as={Container} spacing={4} px={0} position={'relative'} maxW={'6xl'} textAlign={'left'}>
                    <Heading fontSize={{ base: 'xl', sm: 'xl' }} fontWeight={'bold'} >
                        Showcases
                    </Heading>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                        See Our Digital Solutions in Action.
                    </Heading>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }} maxW={'4xl'}>
                        NexaDigital specializes in creating custom digital solutions for businesses. Our portfolio features recent projects in web design, branding, social media management, and content creation. Take a look at our work to see how we have helped our clients succeed and grow.
                    </Text>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} maxW={'6xl'} mx={'auto'} my={6} gap={{ base: 3, lg: 6 }}>
                    {showcaseitems.map((post, index) => {
                        return (
                            <ShowCase key={index} title={post.title} subtitle={post.subtitle} imgUrl={post.imageUrl} text={post.text} />
                        )
                    })}
                </SimpleGrid>
            </Box>
        </div>
    )
}
