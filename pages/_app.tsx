import Head from 'next/head';
import type { AppProps } from 'next/app';
// styles
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Head>
      <title>Writing Sites</title>
      <meta name="description" content="Writing Sites" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
