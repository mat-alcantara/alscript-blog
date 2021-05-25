import styled from 'styled-components';

export const Container = styled.main`
  max-width: 750px;
  padding: 0px 32px;
  margin: 0 auto;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 32px;
  font: 'Roboto';

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
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 50%;
  }
`;

export const SocialNetworkContainer = styled.div`
  span {
    color: #595959;

    & + span {
      margin-left: 16px;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
