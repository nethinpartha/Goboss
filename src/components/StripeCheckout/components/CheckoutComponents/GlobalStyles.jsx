import { Global, css } from "@emotion/react";
import React from 'react';

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}
    />
    <Global
      styles={css`
        input,
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          border-style: none;
        }
      `}
    />
    <Global
      styles={css`
        body,
        html {
          font-size: 18px;
        }
      `}
    />
  </>
);

export default GlobalStyles;
