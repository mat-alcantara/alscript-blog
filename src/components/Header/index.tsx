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
              <Link href="/programacao">Programação</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/literatura">Literatura</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/estoicismo">Estoicismo</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/sobre">Sobre mim</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </GridContainer>
    </Container>
  );
};

export default Header;
