import React from "react";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";

export const TrendingNowStyle = () => {
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );

  return (
    <>
      <Global
        styles={css`
          .trendingnowcontainer {
            margin-bottom: 2rem !important;
            .row {
              margin: 0px;
              padding: 0px;
              .trendingnowcol {
                margin-top: 1rem;
              }
            }
          }

          .trending-movies-title {
            width: 100%;
            border: none;
          }
          .nopadding {
            padding: 0 !important;
            margin: 0;
          }

          .trending-movies-title-text {
            color: white;
            font-size: 25px;
            padding:0;
            padding-bottom: 4px;
            padding-left: 0px;
            border: none;
          }

          .filterby {
            font-size: 14px;
            font-size: 11px;
            padding: 0px 0px 0px 23px;
            display: flex;
            cursor: pointer;
          }

          .trendingnowfilterbody {
            background: ${bgcolor};
            border: none;
            text-align: end;
          }
          @media screen and (max-width: 766px) {
            .trending-movies-title-text {
              font-size: 14px;
              padding-left: 0px;
              text-align: left;
            }

            .trendingnowfilterbody {
              padding-bottom: 1.8rem;
              padding-top: 0.1rem;
              margin-left: -10px;
            }
            .filterby {
              padding-left: 0.5rem;
            }
            .trendingnowcontainer .row .trendingnowcol {
              margin: 0;
            }
            .trendingnowfilterbody {
              padding: 0.5rem 1px;
            }
          }
        `}
      />
    </>
  );
};
