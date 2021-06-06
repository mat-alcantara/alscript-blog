import { shade } from 'polished';
import styled, { css } from 'styled-components';

import IBreakpoints from '../types/IBreakpoints';

interface IArticlesContainerProps {
  breakpoints: IBreakpoints;
}

export const ArticlesContainer = styled.main<IArticlesContainerProps>`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  ${(props) =>
    props.breakpoints.sm
      ? css``
      : css`
          padding-left: 16px;
          padding-right: 16px;
        `}

  > article + article {
    ${(props) =>
      props.breakpoints.sm
        ? css`
            margin-top: 64px;
          `
        : css`
            margin-top: 32px;
          `}
  }

  a {
    color: #0f3c4c;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#0f3c4c')};
    }
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
