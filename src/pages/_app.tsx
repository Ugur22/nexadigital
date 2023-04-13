import "../styles/global.css"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'


// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FBAE3C",
      secondary: "#1e272e",
      tertiary: "#f5f6fa",
    },
  },
  fonts: {
    heading: `'poppins', sans-serif`,
    body: `'poppins', sans-serif`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: 'black',
      },
      // styles for the `a`
      button: {
        color: 'black',
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
