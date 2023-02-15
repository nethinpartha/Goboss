import React from 'react';
import { pathOr } from 'ramda';
import { Global, css } from "@emotion/react";
import { __parseThemeSelector } from '../../../selectors/themestyleselector';

export function AlertStyle() {
  const { colors } = __parseThemeSelector();
  const primaryFontColor = pathOr('', ['primaryFontColor'])(colors);
  const primaryBtnColor = pathOr('', ['primaryBtnColor'])(colors);
  const secondaryFontColor = pathOr('', ['secondaryFontColor'])(colors);
  return (
    <>
      <Global
        styles={css`
        .confirmation-alert-header {
            color: ${secondaryFontColor};
            justify-content: center;
            padding: 0.25rem;
        }
        .confirmation-alert-btn {
          width: 100%;
          margin: 0.25rem 0.5rem;
          border-radius: 4px;
          border: none;
          font-weight: bold;
          text-transform: uppercase;
        }
        .confirmation-alert-accept-tn {
          background: ${primaryBtnColor};
          color: ${primaryFontColor};
        }
        .decline-acceptance {
          background: #35414A;
        }
        .decline-acceptance:hover, 
        .decline-acceptance:focus {
          background: #35413A;
          color: #cccccc;
          border: none;
        }

        .confirmation-alert-btn-body {
          color: #ffffff;
          justify-content: center;
          font-size: 15px;
          padding-bottom: 0.5rem;
        }
       `}
      />
    </>
  )
}