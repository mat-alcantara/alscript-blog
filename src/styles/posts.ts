import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 750px;

  margin-top: 16px;
`;

export const Article = styled.article`
  font: 'Roboto';
  padding: 0px 32px;

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  h2 {
    font-size: 21px;
    font-weight: 500;
  }

  p {
    font-weight: 300;
    font-size: 21px;
    line-height: 32px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
