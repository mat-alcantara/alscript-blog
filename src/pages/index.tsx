import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  ArticlesContainer,
  AsideContainer,
  Container,
  InfoContainer,
} from '../styles/index';

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
          <article>
            <Typography.Title level={3}>
              <Link href="/diferencas-nextjs">
                As principais diferenças ao criar uma aplicação com Next.JS
              </Link>
            </Typography.Title>
            <InfoContainer>
              <Typography>
                <CalendarOutlined />
                33 de Mai
              </Typography>
              <Typography>
                <ClockCircleOutlined />8 minutos de leitura
              </Typography>
            </InfoContainer>
          </article>
          <article>
            <Typography.Title level={3}>
              <Link href="/diferencas-nextjs">
                As principais diferenças ao criar uma aplicação com Next.JS
              </Link>
            </Typography.Title>
            <InfoContainer>
              <Typography>
                <CalendarOutlined />
                33 de Mai
              </Typography>
              <Typography>
                <ClockCircleOutlined />8 minutos de leitura
              </Typography>
            </InfoContainer>
          </article>

          <article>
            <Typography.Title level={3}>
              <Link href="/diferencas-nextjs">
                As principais diferenças ao criar uma aplicação com Next.JS
              </Link>
            </Typography.Title>
            <InfoContainer>
              <Typography>
                <CalendarOutlined />
                33 de Mai
              </Typography>
              <Typography>
                <ClockCircleOutlined />8 minutos de leitura
              </Typography>
            </InfoContainer>
          </article>
          <article>
            <Typography.Title level={3}>
              <Link href="/diferencas-nextjs">
                As principais diferenças ao criar uma aplicação com Next.JS
              </Link>
            </Typography.Title>
            <InfoContainer>
              <Typography>
                <CalendarOutlined />
                33 de Mai
              </Typography>
              <Typography>
                <ClockCircleOutlined />8 minutos de leitura
              </Typography>
            </InfoContainer>
          </article>
          <article>
            <Typography.Title level={3}>
              <Link href="/diferencas-nextjs">
                As principais diferenças ao criar uma aplicação com Next.JS
              </Link>
            </Typography.Title>
            <InfoContainer>
              <Typography>
                <CalendarOutlined />
                33 de Mai
              </Typography>
              <Typography>
                <ClockCircleOutlined />8 minutos de leitura
              </Typography>
            </InfoContainer>
          </article>
        </ArticlesContainer>
        <AsideContainer>
          <Image
            src="/assets/profile.jpeg"
            alt="Foto de perfil"
            width={150}
            height={150}
          />
          <Typography.Title level={3}>Mateus Alcantara</Typography.Title>
          <Typography>Desenvolvedor fullstack</Typography>
          <Typography>Leitor assíduo</Typography>
          <Typography>Praticante de brazilian jiu jitsu</Typography>
          <Typography>Estoico</Typography>
        </AsideContainer>
      </Container>
    </>
  );
};

export default Home;
