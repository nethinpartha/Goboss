import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { ShouldShowLogo } from "../../utils/headerlogoshow.config";
import { __parseThemeSelector } from '../../selectors/themestyleselector';
export default function Accountdetailsglobalstyle() {
  const theme = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(theme);
  let showHeaderLogo = ShouldShowLogo();
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor } = colors;
  return (
    <>
      <Global
        styles={css`
          .${themeName}-account-details-Page .nav-tabs .nav-link.active {
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
            border: none;
          }
          .${themeName}-account-details-Page .nav-fill .nav-item,
          .nav-fill > .nav-link {
            color: white;
            font-weight: bold;
          }
          .${themeName}-account-details-Page .nav-pills .nav-link {
            /* Fallback: Set a background color. */
            background-color: #e1540f;
            font-weight: bold;
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
            border: none;
          }
          .${themeName}-account-details-Page .nav-pills .nav-link:active {
            color: ${primaryBtnColor};
            border: none;
            font-weight: bold;
          }

          h1 {
            text-align: center;
            font-size: 46px;
            color: #ffffff;
            text-transform: capitalize;
          }

          .account-title-setup {
            h4 {
              padding-left: 16px;
              border: none;
              text-transform: capitalize;
              color: #ffffff;
              font-size: 26px;
              margin-top: 1rem;
              text-align: left;
            }
          }

          @media screen and (max-width: 320px) {
            .account-title-setup {
              h4 {
                font-size: 22px;
              }
            }
          }

          @media screen and (max-width: 546px) {
            .${themeName}-account-details-Page .navbar-brand img {
              width: ${showHeaderLogo ? "100%" : "100%"};
            }

            .${themeName}-account-details-Page .headercomp {
              padding: 2% 6% !important;
            }

            h1 {
              text-align: center;
              font-size: 40px;
              color: #ffffff;
              text-transform: capitalize;
            }

            .${themeName}-account-details-Page .nav-tabs .nav-link.active {
              background-color: transparent;
              color: ${primaryBtnColor};
              font-weight: bold;
              font-size: 12px;
              
            }

            .${themeName}-account-details-Page .nav-fill .nav-item,
            .nav-fill > .nav-link {
              color: white;
              font-weight: bold;
              font-size: 12px;
            }
          }

          .form-control:disabled {
            cursor: not-allowed;
            opacity: 0.6;
            background: red;
          }

          @media screen and (max-width: 420px) {
            h1 {
              font-size: 33px;
            }
          }
        `}
      />
    </>
  );
}
