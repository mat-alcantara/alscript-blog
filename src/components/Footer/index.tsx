import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import { Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

import { Container, SocialNetwork } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Typography>Copyright © Mateus Alcantara</Typography>
      <SocialNetwork>
        <Link href="https://www.github.com/mat-alcantara">
          <GithubFilled width={100} height={50} />
        </Link>
        <Link href="https://www.linkedin.com/in/mat-alcantara/">
          <LinkedinFilled />
        </Link>
        <Link href="https://www.instagram.com/mat.alcantara">
          <InstagramFilled />
        </Link>
      </SocialNetwork>
    </Container>
  );
};

export default Footer;
