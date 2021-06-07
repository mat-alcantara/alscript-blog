import { MenuOutlined } from '@ant-design/icons';
import { Col, Grid, Menu, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

import { Container, GridContainer, NavMenu, Title } from './styles';

const Header: React.FC = () => {
  const breakpoints = Grid.useBreakpoint();

  return (
    <Container style={{ marginTop: breakpoints.md ? '16px' : '8px' }}>
      <GridContainer align="middle" justify="space-between">
        <Col xs={20} sm={20} md={5} lg={5} xl={5} xxl={5}>
          <Title>
            <Typography.Title
              level={3}
              style={{
                textAlign: breakpoints.sm ? 'left' : 'center',
              }}
            >
              <Link href="/">matscript</Link>
            </Typography.Title>
          </Title>
        </Col>

        <Col xs={4} sm={4} md={19} lg={19} xl={19} xxl={19}>
          <NavMenu
            mode="horizontal"
            overflowedIndicator={<MenuOutlined />}
            triggerSubMenuAction={breakpoints.sm ? 'hover' : 'click'}
            style={{
              textAlign: breakpoints.sm ? 'right' : 'center',
              borderBottom: breakpoints.sm ? '2px solid transparent' : '',
              width: breakpoints.sm ? '' : '10px',
              marginRight: breakpoints.sm ? '' : '32px',
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
