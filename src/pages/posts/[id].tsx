import {
  CalendarOutlined,
  ClockCircleOutlined,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import { Divider, Typography } from 'antd';
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
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Divider />
      <Container>
        <UserInfo>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Image
              src="/assets/profile.jpeg"
              alt="Foto de perfil"
              width={60}
              height={60}
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
                  fontSize: '14px',
                }}
              >
                <Typography>
                  <CalendarOutlined style={{ marginRight: '4px' }} />
                  <Date dateString={postData.date} />
                </Typography>
                <Typography style={{ marginLeft: '8px' }}>
                  <ClockCircleOutlined style={{ marginRight: '4px' }} />8
                  minutos de leitura
                </Typography>
              </div>
            </div>
          </div>

          <SocialNetworkContainer>
            <Link href="https://www.github.com/mat-alcantara">
              <GithubFilled width={100} height={50} />
            </Link>
            <Link href="https://www.linkedin.com/in/mat-alcantara/">
              <LinkedinFilled />
            </Link>
            <Link href="https://www.instagram.com/mat.alcantara">
              <InstagramFilled />
            </Link>
          </SocialNetworkContainer>
        </UserInfo>
        <Article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
      <Divider />
    </>
  );
};

export default Post;
