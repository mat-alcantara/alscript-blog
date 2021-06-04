import styled from 'styled-components';

export const Container = styled.footer`
  padding: 32px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  section {
  }
`;

export const SocialNetwork = styled.div`
  span {
    color: #595959;

    svg {
      width: 20px;
      height: 20px;
    }

    & + span {
      margin-left: 16px;
    }
  }
`;
