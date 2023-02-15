import React from "react";
import { Global, css } from "@emotion/react";
import { __parseThemeSelector } from '../../../../selectors/themestyleselector';
import GlobalFont from '../../../../styles/global-styles/globalFonts';


export const accordionStyle = (props) => {
  return {
    background: `${props && props.color ? props.color : "#363A43"}`,
    color: `#E6E6E6`,
  };
};

export const cardBody = (bgColor) => {
  return {
    opacity: 1,
  };
};

export const Items = (props) => {
  return {
    width: "auto",
    background: `#363A43 0% 0% no-repeat padding-box`,
    borderRadius: `5px`,
    fontSize: "12px",
    fontFamily: "Inter",
    opacity: `1`,
    padding: `${1}% ${1}%`,
    margin: `${1}%`,
    color: "#E6E6E6",
    textAlign: "center",
  };
};

export const FilterAccordionGlobalStyle = () => {
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor, primaryFontColor, primaryBtnColor, bgColor } = colors;
  return (
    <>
      <GlobalFont />
      <Global
        styles={css`
          .btn-link {
            color: #e6e6e6;
          }
          .filterclass .card {
            border: none;
            border-radius: 0px;
            background-color: ${bgColor};
          }          
          .filter-header-wrapper > button {
            width: 100%;
            text-align: left;
          }
          .clear-filter-type {
            color: ${primaryFontColor};
            font-weight: normal;
            margin-right: 1rem;
            text-decoration: none;
          }

          .filter-header-wrapper .btn-link:hover, .clear-filter-type:hover {
            color: ${primaryTxtColor};
            text-decoration: none;
          }

          .btn-link:hover {
            color: ${primaryTxtColor};
            text-decoration: none;
          }
          .filter-btn-type-selected {
            /* Fallback: Set a background color. */
            background-color: #e1540f;
  
            /* Create the gradient. */
            background-image: ${primaryBtnColor} !important;
  
            /* Set the background size and repeat properties. */
            background-size: 100% !important;
            background-repeat: repeat;
            font-weight: bold;
            /* Use the text as a mask for the background. */
            /* This will show the gradient as a text color rather than element bg. */
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text !important;
            -moz-text-fill-color: transparent !important;
            cursor: pointer;
            text-decoration: none;
            border: 1px solid white;
          }
          
          .filter-btn-type:hover, .filter-btn-type:active, .filter-btn-type:visited  {
            color: ${primaryTxtColor} !important;
            cursor: pointer;
            text-decoration: none;
          }
          .filterclass .card-header {
            padding: 0;
          }
          .filterclass .card-body {
            padding: 0;
          }
        `}
      />
    </>
  );
};
