import React from "react";
import { Global, css } from "@emotion/react";

export const Tabstyle = {
  tab: () => ({
    minHeight: "60vh",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  }),
};

export const ControlledTabGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          a:hover {
            color: #ffffff;
          }

          .active a {
            color: #ffffff !important;
          }

          .contentDetailsWrapper .nav-tabs {
            border: none;
          }

          .contentDetailsWrapper .nav-tabs .nav-link {
            color: white;
            font-size: 32px !important;
          }

          .contentDetailsWrapper .tabination-container {
            font-size: 34px;
          }

          .contentDetailsWrapper .nav-tabs .nav-link.active {
            color: #ffffff !important;
            font-size: 32px;
            border-radius: none;
            border: none;
            margin-right: 10%;
          }

          .contentDetailsWrapper .nav-tabs .nav-link:hover {
            border: none;
          }

          .contentDetailsWrapper .nav-tabs {
            margin-left: 35%;
          }

          .details-wrapper {
            margin: 0.2rem 0 1rem 0;
          }

          .details-card-title {
            color: #ffffff;
            border-radius: none;
            border: none;
            font-size: 18px;
          }

          .details-brand-clor {
            color: #feb896;
          }

          //   mobile devices
          @media screen and (max-width: 576px) {
            .contentDetailsWrapper .nav-tabs {
              margin-left: 18% !important;
            }
            .contentDetailsWrapper .nav-tabs .nav-link.active {
              font-size: 18px !important;
            }
            .contentDetailsWrapper .nav-tabs .nav-link {
              font-size: 18px !important;
            }
            .contentDetailsWrapper .nav-tabs .nav-link {
              font-size: 18px !important;
            }

            .contentDetailsWrapper .nav-tabs {
              margin: 0;
              padding-left: 0;
            }

            .contentDetailsWrapper .tabination-container {
              font-size: 24px;
            }

            .details-card-title {
              font-size: 18px;
            }

            .details-brand-clor {
              font-size: 12px;
            }
          }

          //   large screens
          @media screen and (min-width: 1200px) {
            .contentDetailsWrapper {
              max-width: 95%;
            }
          }
        `}
      />
    </>
  );
};
