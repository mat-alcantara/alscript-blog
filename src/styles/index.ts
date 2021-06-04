import styled from 'styled-components';

export const ArticlesContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  > article + article {
    margin-top: 64px;
  }

  a {
    color: #0f3c4c;
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
