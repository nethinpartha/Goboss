import React from "react";
import { Global, css } from "@emotion/react";
import { useLocation } from 'react-router-dom';
import { __parseThemeSelector } from '../../selectors/themestyleselector';

const StaticPage = () => {
  const location = useLocation();
  let displayBlock = false;
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor } = colors;
  if (location.pathname.toLowerCase().includes('about')) {
    displayBlock = true;
  };

  return (
    <>
      <Global
        styles={css`
        .staticpage-background .static-page-content a {
          /* Fallback: Set a background color. */
          background-color: #e1540f;

          /* Create the gradient. */
          background-image: ${primaryBtnColor};

          /* Set the background size and repeat properties. */
          background-size: 100%;
          background-repeat: repeat;

          /* Use the text as a mask for the background. */
          /* This will show the gradient as a text color rather than element bg. */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          display: ${displayBlock ? "block" : ""};
          padding: ${displayBlock ? "0.5rem 0" : ""};
        }
        `}
      />
    </>
  );
};

export default StaticPage;