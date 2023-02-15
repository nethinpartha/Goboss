import React from "react";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { __isThemeOfType } from "../../../utils/tenant";

export const CardContainer = {
  image: (url) => ({
    backgroundImage: `linear-gradient(360deg, #000000 0%, #00000024 100%), url(${url})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "50% 50%",
    backgroundColor: "#131722",
    border: "0",
  }),
  topmargin: () => ({
    marginTop: "1rem",
  }),
  positionrelative: () => ({
    position: "relative",
  }),
  positionabsolute: () => ({
    position: "absolute",
  }),
  bottomright: () => ({
    position: `absolute`,
    bottom: `8px`,
    right: `16px`,
    fontSize: `18px`,
    color: "white",
  }),
};

export const Moviecardsstyle = () => {
  const theme = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(theme);
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
          .tray-with-filter {
            .card-movie-setup {
              .card-setup {
                cursor: pointer;
              }
            }
          }
          .trayfilterleft {
            min-height: 55vh;
            cursor: pointer;
          }

          .smaller-resize {
            min-height: 28vh;
            margin: 0 1rem;
            cursor: pointer;
          }

          .releasedate {
            position: absolute;
            bottom: 8px;
            left: 16px;
            font-size: 14px;
            color: white;
          }

          .carousel-itemsWrapper {
            // padding: 1rem 0 3rem 0;
          }
          // .traytitlelarge {
          //   padding: 1rem 0 3rem 0;
          // }
          @media only screen and (max-device-width: 3000px) {
            .tray-with-filter {
              .card-movie-setup {
                .card-setup {
                  width: 19vh;
                }
              }
            }
            .carousel-title {
              hr {
                display: none;
              }
            }

            .tray-with-filter {
              .card-setup {
                height: 17rem;
              }
            }

            .trayfiltertitle {
              border: none;
              width: 100%;
              padding: 0;
              background: ${bgcolor};
              fontweight: 600;
            }

            .trayfiltertxt {
              width: 100%;
              background: ${bgcolor};
              color: white;
            }

            .trayfilterby {
              font-size: 14px;
              padding-right: 2rem;
            }

            .trayfiltertxt {
              font-size: 24px;
              text-align: left;
            }

            .first-img {
              position: absolute;
              bottom: 8px;
              right: 16px;
              font-size: 18px;
              color: white;
            }

            .filtercardbody {
              display: block !important;
              padding: 0;
            }

            .trayfilterby {
              font-size: 12px;
              cursor: pointer;
            }

            .textsize {
              font-size: 14px !important;
            }

            .trayfiltertitle {
              padding: 0 !important;
            }

            body .${themeName}-Home-Page.trayInfoWrapper {
              padding-left: 1rem !important;
            }
          }

          @media screen and (max-width: 768px) {
            .trayfilterby {
              padding: 0px;
            }
            // .trayfiltertxt {
            //   font-size: 16px;
            // }
            .popular-movies-mob {
              padding-left: 4px;
              display: block;
            }
            .carousel-itemsWrapper {
              padding: 0;
            }
          }

          @media screen and (max-width: 766px) {
            .carousel-itemsWrapper {
              padding-bottom: 0;
            }

            .trayfilterleft,
            .trayfilterright {
              min-height: 30vh;
              padding-right: 0;
              padding-left: 0;
              margin-bottom: 0.5rem;
            }

            .smaller-resize {
              margin: 0 0.2rem;
            }
            .releasedate {
              font-size: 12px;
            }

            .first-img {
              width: 12%;
              position: absolute;
              bottom: 8px;
              right: 16px;
              font-size: 18px;
              color: white;
            }

            .carousalWrapper {
              .title {
                font-size: 17px;
              }
            }
            .trayfiltertxt {
              width: 100%;
              font-size: 14px;
              padding: 0px;
              text-align: left;
              color: white;
            }
            .trayfiltertitle {
              border: none;
              width: 100%;
              padding: 0;
              background: ${bgcolor};
              fontweight: 600;
            }

            .tray-with-filter {
              .card-setup {
                height: 25vh;
              }
            }

            .tray-with-filter {
              .card-movie-setup {
                .card-setup {
                  width: 18vh;
                }
              }
            }

            .trayfilterby {
              padding-right: 0.5rem;
              font-size: 11px;
            }

            .filtercardbody {
              display: block !important;
            }

            .textsize {
              font-size: 11px !important;
            }
          }

          @media screen and (min-width: 580px) and (max-width: 766px) {
            .trayfilterleft,
            .trayfilterright {
              min-height: 50vh;
            }
          }
          @media screen and (min-width: 1200px) {
            .moviecardwidth {
              max-width: 100%;
            }
          }
        `}
      />
    </>
  );
};
