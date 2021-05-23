import Head from 'next/head';
import React from 'react';

import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mateus Alcantara</title>
        <meta
          name="description"
          content="Blog pessoal criado para compartilhar conhecimentos sobre programação, jiu jitsu, leitura e estoicismo"
        />
      </Head>

      <main>
        <header>
          <Header />
        </header>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Home;
