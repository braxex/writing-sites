import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
// styles
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
