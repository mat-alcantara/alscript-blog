import { Typography } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import { ArticlesContainer, AsideContainer, Container } from '../styles/index';

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

      <Container>
        <ArticlesContainer>
          <article />
          <article />
        </ArticlesContainer>
        <AsideContainer>
          <Image
            src="/assets/profile.jpeg"
            alt="Foto de perfil"
            width={150}
            height={150}
          />
          <Typography.Title level={3}>Mateus Alcantara</Typography.Title>
          <Typography>Desenvolvedor Fullstack</Typography>
          <Typography>Praticante de Brazilian Jiu Jitsu</Typography>
          <Typography>Leitor Assíduo</Typography>
        </AsideContainer>
      </Container>
    </>
  );
};

export default Home;
