import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { __isThemeOfType } from "../../../../utils/tenant";
import GlobalStyleLayout from "../../../global-styles/globalStyle.js";

const HomePageLayout = () => {
  const theme = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(theme);
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  const bgImage = __isThemeOfType() ? "" : "";
  return (
    <>
      <GlobalStyleLayout />
      <Global
        styles={css`
          body,
          html {
            height: initial !important;
          }

          body {
            .${themeName}-Home-Page {
              width: 100% !important;
              position: inherit;
              background: ${bgImage ? `url(${bgImage})` : bgcolor};
              min-height: 90vh !important;
              .headerShadow {
                position: initial;
              }
            }
            .${themeName}-homepage-section {
              position: relative;
              background: ${bgcolor};
              padding: 2rem;
              min-height: 80vh;
              margin-top: ${!__isThemeOfType() ? '2rem' : '0'};
            }

            .${themeName}-Home-Page header {
              position: ${process.env.REACT_APP_THEMETYPE === "classic"
            ? ""
            : "absolute"};
              width: 100%;
              top: 0;
              z-index: 10;
            }



            .${themeName}-Home-Page .trayInfoWrapper {
              // padding-left: 1.5rem;
            }

            .upgrade {
              background: #e1540f !important;
            }
          }
          @media screen and (min-width:1024px) and (max-width:1440px) {
            body .${themeName}-homepage-section {
              margin-top: ${!__isThemeOfType() ? '2rem' : '0'};
            }
          }

          @media only screen and (max-width: 768px) {
            body .${themeName}-homepage-section {
              padding: ${__isThemeOfType() ? "2rem" : "1rem"};
              margin-top: ${!__isThemeOfType() ? '2rem' : '0'};
            }
            .${themeName}-Home-Page .trayInfoWrapper {
              padding-left: 0px !important;
            }
          }
        `}
      />
    </>
  );
};

export default HomePageLayout;
