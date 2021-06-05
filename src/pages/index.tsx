import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Grid, Typography } from 'antd';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Date from '../components/Date';
import { getEstimatedReadingTime, getSortedPostsData } from '../lib/post';
import { ArticlesContainer, InfoContainer } from '../styles/index';

interface IPostProps {
  id: string;
  title: string;
  date: string;
  label: string;
  estimatedTime: number;
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData({ filter: '/' });

  const allPostaWithEstimatedTime = allPostsData.map((postData) => {
    const estimatedTime = getEstimatedReadingTime(postData.content);

    return { ...postData, estimatedTime };
  });

  return {
    props: {
      allPostsData: allPostaWithEstimatedTime,
    },
  };
};

const Home: React.FC<{ allPostsData: IPostProps[] }> = ({ allPostsData }) => {
  const breakpoints = Grid.useBreakpoint();

  return (
    <>
      <Head>
        <title>
          Alscript - Um blog sobre programação, leitura e estoicismo
        </title>
        <meta
          name="description"
          content="Blog pessoal criado para compartilhar conhecimentos sobre programação, leitura e estoicismo"
        />
      </Head>

      <ArticlesContainer>
        {allPostsData.map((post) => (
          <article key={post.id}>
            <Typography.Title level={breakpoints.sm ? 3 : 4}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </Typography.Title>
            <InfoContainer>
              <Typography>
                <CalendarOutlined />
                <Date dateString={post.date} />
              </Typography>
              <Typography>
                <ClockCircleOutlined />
                {post.estimatedTime} minutos de leitura
              </Typography>
            </InfoContainer>
          </article>
        ))}
      </ArticlesContainer>
    </>
  );
};

export default Home;
