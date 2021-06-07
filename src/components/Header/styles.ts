import { Menu, Row } from 'antd';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding-top: 16px;
  height: 100%;
`;

export const GridContainer = styled(Row)`
  div {
    ul {
      li {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
`;

export const Title = styled.div`
  width: 100%;

  h3 {
    margin-bottom: 0px;
  }

  a {
    color: #0f3c4c;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#0f3c4c')};
    }
  }
`;

export const NavMenu = styled(Menu)`
  li {
    margin: 0px 10px !important;
  }
`;
