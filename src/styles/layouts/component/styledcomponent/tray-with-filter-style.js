import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { __isThemeOfType } from "../../../../utils/tenant";

export const TrayFilterGlobalStyle = () => {
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
          .carousel-item-styling {
            cursonr: pointer;
          }
          .carousalWrapper {
            .card-movie-setup {
              .cast-carousel-setup {
                .carousel-itemWrapper {
                  width: 20vh;
                }
              }
              .card-setup {
                height: 22vh;
                cursor: pointer;
              }

              width: 100%;
              .title {
                font-size: 1.5rem;
                font-weight: 600;
                color: #ffffff;
                padding: 1rem;
              }
              .filter {
                margin-right: 18px;

                display: flex;
                right: 0;
                ul {
                  display: flex;
                  li {
                    list-style-type: none;
                    text-emphasis: none;
                    margin: 10px 15px;
                    a:hover {
                      font: normal normal normal 14px / 38px Inter, sans-serif;
                      color: #ff8b53;
                    }
                    a {
                      font: normal normal normal 14px / 38px Inter, sans-serif;
                      color: #949cb0;
                    }
                  }
                }
                hr {
                  height: 0;
                  margin-top: 43px;
                  margin-right: 18px;
                }
                h1 {
                  margin-left: 28px;
                }
              }

              .carousel-title {
                font: normal normal normal 25px / 38px Inter, sans-serif;
                letter-spacing: 0px;
                color: #ffffff;
                width: 50%;
              }
            }

            .tray-with-filter {
              h1 {
                font: normal normal normal 32px / 38px Inter, sans-serif;
                letter-spacing: 0px;
              }
            }

            .filtercardbody {
              border: none;
              background: ${bgcolor};
            }

            @media only screen and (min-device-width: 1024px) and (max-device-width: 3000px) {
              .carousalWrapper {
                .title {
                  padding: 1rem 0 1rem 2rem;
                }
              }
              .carousel-item-styling {
                margin: 2% 0 6% 0;
              }
              .card-movie-setup {
                .cast-carousel-setup {
                  .carousel-itemWrapper {
                    width: 21vh;
                  }
                  .card-setup {
                    height: 24vh;
                  }
                }
              }
            }
            @media screen and (max-width: 1020px) {
              .carousalWrapper {
                .title {
                  padding: 1rem 0 1rem 1.5rem;
                }
              }
            }

            // small devices
            @media screen and (max-width: 640px) {
              .carousalWrapper {
                .title {
                  padding: 1rem 0 1rem 1.3rem;
                }
              }
            }

            // ipad view
            @media screen and (max-width: 768px) {
              .carousel-title {
                font-size: 16px;
              }
              .card-movie-setup {
                .cast-carousel-setup {
                  .carousel-itemWrapper {
                    width: 20vh;
                  }
                  .card-setup {
                    height: 22vh;
                  }
                }
              }
            }

            // mobile
            @media screen and (max-width: 576px) {
              .card-movie-setup {
                .cast-carousel-setup {
                  .carousel-itemWrapper {
                    width: 17vh;
                  }
                  .card-setup {
                    height: 20vh;
                  }
                }
              }
            }
            .card-movie-setup {
              .carousel-container {
                margin: 0 0 2rem 0;
              }
            }
            .card-movie-setup {
              .cast-carousel-setup {
                .carousel-itemWrapper {
                  width: 20vh;
                }
                .card-setup {
                  height: 22vh;
                }
              }
            }
          }
        `}
      />
    </>
  );
};
