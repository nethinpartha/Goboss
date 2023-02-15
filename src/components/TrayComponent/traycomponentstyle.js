import React from "react";
import { Global, css } from "@emotion/react";
import { __isThemeOfType } from "../../utils/tenant";

export const TrayComponentGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          .tray-wrapper {
            .carousel-content .card-setup {
              height: 45vh;
              cursor: pointer;
            }
            .carousel-content .card-setup {
              margin: 0;
            }
            .carousel-content .card-setup {
              margin-bottom: 4rem;
              margin-top: 1rem;
            }
          }
          .traycomp {
          }
          .carousel-item-styling {
            margin: 2% 0 6% 0;
          }
          /* Portrait and Landscape */
          @media only screen and (min-device-width: 834px) and (max-device-width: 3000px) and (-webkit-min-device-pixel-ratio: 2) {
            .tray-wrapper {
              .carousel-content .card-setup {
                height: 34vh;
              }
              .carousel-content .card-setup {
                margin: 0 2%;
              }
              .carousel-content .card-setup {
                margin-bottom: 0;
              }
            }
            .traycomp {
            }
          }
          .tray-wrapper {
            .carousel-content .card-setup {
              height: 17rem;
            }
            .carousel-content .card-setup {
              margin: 0;
            }

            .carousel-item-styling-dorm {
              margin-top: 1rem;
              margin-bottom: 3.5rem;
            }
          }
          @media screen and (max-width: 768px) {
            .tray-wrapper {
              .carousel-content .card-setup {
                height: 25vh;
              }
            }
            .carousel-content {
              margin-top: 1rem;
            }
          }

          @media screen and (max-width: 766px) {
            .traycomp {
            }
          }

          @media screen and (max-width: 576px) {
            .carousel-item-styling {
              margin: 1% 0 0 0;
            }
          }

          @media screen and (max-width: 375px) {
            .tray-wrapper {
              .carousel-content {
                .carousel-itemWrapper-dorm {
                  width: 26%;
                }
              }
            }
          }
        `}
      />
    </>
  );
};
