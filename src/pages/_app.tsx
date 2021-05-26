import 'antd/dist/antd.css';

import { AppProps } from 'next/app';
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container } from '../styles/_app';
import GlobalStyle from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  );
};

export default App;
