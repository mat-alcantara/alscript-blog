import { Col, Row } from 'antd';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col span={4}>Logotipo</Col>
        <Col span={20}>NavBar</Col>
      </Row>
    </Container>
  );
};

export default Header;
