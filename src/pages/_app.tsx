import "../styles/global.css"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'


// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: `'poppins', sans-serif`,
    body: `'poppins', sans-serif`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: '#000',
      },
      // styles for the `a`
      button: {
        color: '#000',
      },
    },
  },
})

export default function App({ Component, pageProps }) {

  return <>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
}
