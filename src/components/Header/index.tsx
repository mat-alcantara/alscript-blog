import { Col, Menu, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Container, GridContainer, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GridContainer>
        <Col span={4}>
          <Title>
            <Image
              src="/assets/profile.jpeg"
              alt="Foto de perfil de Mateus Alcantara"
              width={40}
              height={40}
            />
            <Typography style={{ fontWeight: 'bold', fontSize: 18 }}>
              <Link href="/">Alscript</Link>
            </Typography>
          </Title>
        </Col>
        <Col span={20}>
          <Menu
            mode="horizontal"
            style={{
              textAlign: 'right',
              borderBottom: '2px solid transparent',
            }}
          >
            <Menu.Item>
              <Link href="/programming">Programação</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/books">Literatura</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/stoicism">Estoicismo</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/about">Sobre mim</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </GridContainer>
    </Container>
  );
};

export default Header;
