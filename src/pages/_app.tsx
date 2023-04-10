import "../styles/global.css"
import { ChakraProvider } from '@chakra-ui/react'
import Link from "next/link"
import Layout from '../components/layout'


export default function App({ Component, pageProps }) {

  return <>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
}
