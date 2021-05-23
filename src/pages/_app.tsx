import '../styles/antd.less';

import { AppProps } from 'next/app';
import React from 'react';

import Header from '../components/Header';
import GlobalStyle from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
