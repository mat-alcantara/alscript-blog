import styled, { css } from 'styled-components';

import IBreakpoints from '../types/IBreakpoints';

interface IBreakpointsProps {
  breakpoints: IBreakpoints;
}

export const Container = styled.main<IBreakpointsProps>`
  max-width: 750px;
  width: 100%;
  padding: 0px 32px;
  margin: 0 auto;
  ${(props) =>
    props.breakpoints.sm
      ? css`
          margin-top: 64px;
        `
      : css`
          margin-top: 32px;
        `}
`;

export const Article = styled.article<IBreakpointsProps>`
  pre {
    background: #021627;
    padding: 16px;

    code {
      color: #fff;
    }
  }

  ${(props) =>
    props.breakpoints.sm
      ? css`
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

          hr {
            margin-top: 16px - 1em;
            margin-bottom: 16px;
          }
        `
      : css`
          h1 {
            font-size: 24px;
            font-weight: 700;
          }

          h2 {
            font-size: 18px;
            font-weight: 500;
          }

          p {
            font-weight: 300;
            font-size: 16px;
            line-height: 27px;
          }

          hr {
            margin-top: 16px - 1em;
            margin-bottom: 16px;
          }
          code {
            font-size: 10px;
          }
        `}
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 32px;
  font: 'Roboto';
`;

export const UserInfo = styled.div<IBreakpointsProps>`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 50%;
  }
`;

export const SocialNetworkContainer = styled.div<IBreakpointsProps>`
  span {
    color: #595959;

    & + span {
      ${(props) =>
        props.breakpoints.sm
          ? css`
              margin-left: 16px;

              svg {
                width: 25px;
                height: 25px;
              }
            `
          : css`
              margin-left: 8px;

              svg {
                width: 15px;
                height: 15px;
              }
            `}
    }
  }
`;
