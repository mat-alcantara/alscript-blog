import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Date from '../components/Date';
import { getSortedPostsData } from '../lib/post';
import {
  ArticlesContainer,
  AsideContainer,
  Container,
  InfoContainer,
} from '../styles/index';

interface IPostProps {
  id: string;
  title: string;
  date: string;
  label: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

const Home: React.FC<{ allPostsData: IPostProps[] }> = ({ allPostsData }) => {
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
          {allPostsData.map((post) => (
            <article key={post.id}>
              <Typography.Title level={3}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </Typography.Title>
              <InfoContainer>
                <Typography>
                  <CalendarOutlined />
                  <Date dateString={post.date} />
                </Typography>
                <Typography>
                  <ClockCircleOutlined />8 minutos de leitura
                </Typography>
              </InfoContainer>
            </article>
          ))}
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
