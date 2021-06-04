import { Row } from 'antd';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding-top: 16px;
  height: 100%;

  box-shadow: 0 2px 8px #f0f1f2;
`;

export const GridContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  a {
    color: #0f3c4c;
  }

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  article {
    /* margin-left: 16px; */
  }
`;
