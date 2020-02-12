import { css, createGlobalStyle } from 'styled-components';

import firaCode from './firaCode.ttf';

const Font = css`
  @font-face {
    font-family: 'FiraCode-Retina';
    font-style: normal;
    font-weight: normal;
    src: url(${firaCode});
  }
`;

export const FontStyle = createGlobalStyle`
  ${Font}
`;
