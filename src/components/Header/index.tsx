import { Col, Divider, Grid, Menu, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

import { Container, GridContainer, Title } from './styles';

const Header: React.FC = () => {
  const breakpoints = Grid.useBreakpoint();

  return (
    <Container style={{ marginTop: breakpoints.md ? '16px' : '8px' }}>
      <GridContainer align="middle" justify="center">
        <Col lg={6} sm={24}>
          <Title>
            <Typography.Title
              level={3}
              style={{
                textAlign: breakpoints.sm ? 'left' : 'center',
              }}
            >
              <Link href="/">MatScript</Link>
            </Typography.Title>
          </Title>
        </Col>
        <Col md={24} sm={24}>
          <Divider />
        </Col>
        <Col lg={18} sm={24}>
          <Menu
            mode="horizontal"
            style={{
              textAlign: breakpoints.sm ? 'right' : 'center',
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
