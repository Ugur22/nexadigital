import "../styles/global.css"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'


// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: 'white',
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
