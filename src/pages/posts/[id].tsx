import {
  CalendarOutlined,
  ClockCircleOutlined,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import { Divider, Grid, Typography } from 'antd';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Date from '../../components/Date';
import { getAllPostIds, getPostData } from '../../lib/post';
import {
  Article,
  Container,
  SocialNetworkContainer,
  UserInfo,
} from '../../styles/posts';

interface IPostProps {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    estimatedTime: number;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

const Post: React.FC<IPostProps> = ({ postData }) => {
  const breakpoints = Grid.useBreakpoint();

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container breakpoints={breakpoints}>
        <UserInfo breakpoints={breakpoints}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Image
              src="/assets/profile.jpeg"
              alt="Foto de perfil"
              width={breakpoints.sm ? 60 : 45}
              height={breakpoints.sm ? 60 : 45}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '8px',
              }}
            >
              <Typography.Title level={5}>Mateus Alcantara</Typography.Title>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: breakpoints.sm ? '14px' : '10px',
                }}
              >
                <Typography>
                  <CalendarOutlined
                    style={{ marginRight: breakpoints.sm ? '8px' : '2px' }}
                  />
                  <Date dateString={postData.date} />
                </Typography>
                <Typography
                  style={{ marginLeft: breakpoints.sm ? '16px' : '8px' }}
                >
                  <ClockCircleOutlined
                    style={{ marginRight: breakpoints.sm ? '8px' : '2px' }}
                  />
                  {`${postData.estimatedTime} minutos de leitura`}
                </Typography>
              </div>
            </div>
          </div>

          <SocialNetworkContainer breakpoints={breakpoints}>
            <Link href="https://www.github.com/mat-alcantara">
              <GithubFilled
                width={breakpoints.sm ? 100 : 50}
                height={breakpoints.sm ? 50 : 25}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/mat-alcantara/">
              <LinkedinFilled />
            </Link>
            <Link href="https://www.instagram.com/mat.alcantara">
              <InstagramFilled />
            </Link>
          </SocialNetworkContainer>
        </UserInfo>
        <Article
          breakpoints={breakpoints}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Container>
      <Divider />
    </>
  );
};

export default Post;
