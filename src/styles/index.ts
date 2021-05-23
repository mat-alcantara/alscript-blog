import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  width: 100vm;
  display: flex;
  flex-direction: row;
`;

export const ArticlesContainer = styled.section`
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 128px;

  h3 {
    margin-top: 8px;
  }

  img {
    border-radius: 50%;
  }
`;
