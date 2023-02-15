import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
// import { __isThemeOfType } from "../../utils/tenant";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import GlobalFont from "./globalFonts";

const GlobalStyleLayout = () => {
  const web_header_type = useSelector((state) =>
    pathOr("", ["ThemeState", "layout", "header", "web_header_type"])(state)
  );
  const headerBgColor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "layout", "header", "bgColor"])(state)
  );
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor, bgColor } = colors;
  return (
    <>
      <GlobalFont />
      <Global
        styles={css`
          @font-face {
              font-family: "Inter";
              src: local("Inter"), url("../../assets/fonts/Inter.ttf") format("woff");
              font-weight: normal;
              font-display: swap;
          }
          body,
          html {
            font-family: Inter, sans-serif !important;
            height: initial !important;
          }
           .headercomp
           {
            background: ${
              web_header_type === "transparent"
                ? "transparent linear-gradient(180deg, #00000096 0%, #0000001a 100%) 0% 0% no-repeat padding-box !important"
                : headerBgColor
            };
            z-index: 5;
          }
          body {
            background: ${bgColor};
            min-height: 80vh;
            width: 100%;
          }
          .footer {
            background: ${bgColor};
          }
          .basicLayout {
            min-height: 60vh;
          }
          .footer .footer-cols {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: auto;
          }
          .header-logo {  
            margin: 1%;
          }

          // hover animation
          .hover-btn-animation {
            transition: all 0.2s ease-in-out;

          }
          .hover-btn-animation: hover {
            transform: scale(1.1);
          }

          label {
            display: flex;
          }
          ::-webkit-scrollbar {
            width: 4px;
            border-radius: 3px;
            background: #12161a;
          }
        
          ::-webkit-scrollbar-thumb {
            background-color: #222A31;
          }
        
          ::-webkit-scrollbar-thumb:hover {
            background-color: #35414A !important;
          }

          .gradient-text {
            /* Fallback: Set a background color. */
            // background-color: #FFF;
  
            /* Create the gradient. */
            background-color: ${primaryBtnColor ? primaryBtnColor  : '#FFF'};
  
            /* Set the background size and repeat properties. */
            background-size: 100%;
            background-repeat: repeat;
  
            /* Use the text as a mask for the background. */
            /* This will show the gradient as a text color rather than element bg. */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
          }

          /* Change the white to any color */
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
              transition: background-color 5000s ease-in-out 0s;
              -webkit-text-fill-color: white;
          }
          
          @media screen and (max-width: 679px) {
            .footer .footer-cols {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (max-width: 576px) {
            .footer .footer-cols {
              grid-template-columns: repeat(1, 1fr);
            }
          }
          /* Chrome, Safari, Edge, Opera */
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button {
              -webkit - appearance: none;
                margin: 0;
          }
          /* Firefox */
          input[type=number] {
              -moz - appearance: textfield;
           }
      input:focus {
          outline: none !important;
      }
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
           input[type=number] {
           -moz-appearance: textfield;
      }
        `}
      />
    </>
  );
};

export default GlobalStyleLayout;
