import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import { Divider } from 'antd';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getAllPostIds, getPostData } from '../../lib/post';
import { Article, Container, UserInfo } from '../../styles/posts';

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
          <Image
            src="/assets/profile.jpeg"
            alt="Foto de perfil"
            width={50}
            height={50}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>Mateus Alcantara</p>
            <p>24 de Fev</p>
          </div>
          <div>
            <div>
              <Link href="https://www.github.com/mat-alcantara">
                <GithubFilled width={100} height={50} />
              </Link>
              <Link href="https://www.linkedin.com/in/mat-alcantara/">
                <LinkedinFilled />
              </Link>
              <Link href="https://www.instagram.com/mat.alcantara">
                <InstagramFilled />
              </Link>
            </div>
          </div>
        </UserInfo>
        <Article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
      <Divider />
    </>
  );
};

export default Post;
