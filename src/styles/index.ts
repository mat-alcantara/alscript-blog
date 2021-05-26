import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  width: 100vm;
  display: flex;
  flex-direction: row;
`;

export const ArticlesContainer = styled.section`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  > article + article {
    margin-top: 64px;
  }
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 64px;

  h3 {
    margin-top: 8px;
  }

  img {
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    margin-right: 8px;
  }

  article {
    h2 {
      margin-bottom: 8px;
    }

    & + article {
      margin-left: 32px;
    }
  }
`;
