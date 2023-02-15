import React from "react";
import { Global, css } from "@emotion/react";

export const MovieCardGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          .cardcontent-container {
            position: absolute;
            padding-left: 0.25rem;
            bottom: 8px;
            left: 12px;
            color: white;
            font-size: 18px;
          }

          .movie-data {
            color: #949cb0;
            font-size: 14px;
          }

          @media screen and (max-width: 640px) {
            .cardcontent-container {
              font-size: 12px;
            }
            .movie-data {
              font-size: 10px;
            }
            .oncardtitle {
              font-size: 11px;
            }
          }
          @media only screen and (min-width: 600px) and (max-width: 768px) {
            .oncardtitle {
              font-size: 12px;
            }
          }

          @media screen and (max-width: 375px) {
            .movie-data {
              font-size: 8px;
            }
            .oncardtitle {
              font-size: 9px;
            }
          }
        `}
      />
    </>
  );
};
