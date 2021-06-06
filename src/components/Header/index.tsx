import { Col, Grid, Menu, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

import { Container, GridContainer, NavMenu, Title } from './styles';

const Header: React.FC = () => {
  const breakpoints = Grid.useBreakpoint();

  return (
    <Container style={{ marginTop: breakpoints.md ? '16px' : '8px' }}>
      <GridContainer
        align="middle"
        justify={breakpoints.sm ? 'space-between' : 'center'}
      >
        <Col lg={5} sm={24}>
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

        <Col lg={19} sm={24}>
          <NavMenu
            mode="horizontal"
            style={{
              textAlign: breakpoints.sm ? 'right' : 'center',
              borderBottom: breakpoints.sm ? '2px solid transparent' : '',
              fontSize: breakpoints.sm ? '' : '10px',
              display: breakpoints.sm ? '' : '',
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
              <Link href="/about">Sobre</Link>
            </Menu.Item>
          </NavMenu>
        </Col>
      </GridContainer>
    </Container>
  );
};

export default Header;
