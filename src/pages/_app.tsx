import 'antd/dist/antd.css'; // CSS files needed to AntD

import { AppProps } from 'next/app';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
