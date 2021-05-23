import '../styles/antd.less';

import { Button } from 'antd';
import { AppProps } from 'next/app';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Button type="primary">Ok</Button>
    </>
  );
};

export default App;
