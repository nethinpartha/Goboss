import React from "react";
import { Global, css } from "@emotion/react";
import { __isThemeOfType } from "../../../../utils/tenant";

export const activatedevicestyle = {
  container: (sm) => ({
    maxWidth: `${sm ? "100%" : "40%"}`,
    textAlign: "center",
    marginBottom: "3rem",
  }),

  inputField: () => ({
    border: "0",
    fontWeight: "bold",
  }),
};

export const Activatedevicestylenew = () => {
  return (
    <>
      <Global
        styles={css`
          .container-panel-setup {
            justify-content: center;
            display: flex;
            margin-bottom: 7rem;
          }
          .form-control {
            text-align: center;
          }
          .form-control:focus {
            border: none;
            box-shadow: none;
          }
          @media screen and (min-width: 577px) {
            .event-setup {
              margin-right: 15px;
              margin-left: -23px;
              font-size: 14px;
            }

            .tab-content-setup {
              margin-left: -2rem;
              margin-right: -1rem;
            }

            .formInput {
              width: 51px;
              height: 64px;
              margin-right: 0.5rem;
              border: 1px solid #707070;
              background: #ffffff;
            }

            .container-setup .title-setup {
              font-size: 18px;
              color: #ffffff;
              font-weight: bold;
              text-align: center;
            }

            .activate-tv .title-setup {
              margin-left: 1rem;
            }

            .container-setup .subtitle-setup {
              font-size: 13px;
              color: #ffffff;
              text-align: center;
            }

            .activate-tv .subtitle-setup {
              margin-left: 1rem;
            }

            .activate-tv .activate-btn {
              .Button-new {
                margin: 0 1rem 0 -0.5rem;
              }
            }

            .container-setup .activate-btn {
              .Button-new {
                background: #e1540f;
                color: #ffffff;
                font-size: 19px;
                padding: 1rem;
                width: 120%;
                margin: 0 1rem 0 -1rem;
                border: 0;
                line-height: 1;
                text-transform: uppercase;
              }
            }

            .header-logo {
              width: 14% !important;
            }
            .formgroup-setup {
              margin: 0 -6rem 0 -3rem;
            }
          }

          @media screen and (min-width: 577px) and (max-width: 767px) {
            .event-setup {
              margin-right: 0rem;
              margin-left: -2rem;
              font-size: 13px;
            }
          }

          @media screen and (min-width: 1024px) {
            .formgroup-setup {
              margin: 0 -3rem 0 -1rem;
            }
            .container-panel {
              .formInput {
                width: 63px;
                height: 70px;
                margin-right: 0.5rem;
                border: 1px solid #707070;
                background: #ffffff;
              }

              .container-setup .title-setup {
                font-size: 25px;
                color: #ffffff;
                font-weight: bold;
                text-align: center;
                margin-left: 0.5rem;
              }

              .container-setup .subtitle-setup {
                font-size: 15px;
                color: #ffffff;
                text-align: center;
                margin-left: 1.5rem;
              }

              .activate-btn {
                .Button-new {
                  background: #e1540f;
                  color: #ffffff;
                  font-size: 19px;
                  padding: 1rem;
                  width: 100%;
                  margin: 0 0 0 1rem;
                  border: 0;
                  line-height: 1;
                  text-transform: uppercase;
                }
              }
            }
          }

          @media screen and (max-width: 576px) {
            .form-styling {
              justify-content: center;
            }
            .container-panel-setup {
              margin-bottom: 1rem;
              margin-left: 1rem;
            }
            .tab-content-setup {
              height:35%;
              margin-right: -1.5rem;
              margin-left: -1.5rem;
            }

            .tab-pane-setup {
              margin-right: -1.3rem;
              margin-left: -2.5rem;
            }

            .event-setup {
              margin-right: -1.5rem;
              margin-left: -1.5rem;
              font-size: 14px;
            }

            .container-setup .title-setup {
              font-size: 15px;
              color: #ffffff;
              font-weight: bold;
              text-align: center;
            }

            .container-setup .subtitle-setup {
              font-size: 10px;
              color: #ffffff;
              text-align: center;
            }

            .footer .footer-cols {
              grid-template-columns: repeat(1, 1fr);
            }
            .header-logo {
              width: 24% !important;
              margin: 8%;
            }

            .container-setup .formInput {
              width: ${__isThemeOfType() ? "30px" : "42px"};
              height: ${__isThemeOfType() ? "60px" : " 55px"};
              margin-right: 0.5rem;
              border: 1px solid #707070;
              background: #ffffff;
            }
            .activate-btn {
              text-align: center;
            }

            .container-setup .activate-btn {
              .Button-new {
                background: #e1540f;
                color: #ffffff;
                padding: 1rem;
                width: ${__isThemeOfType() ? "73%" : "66%"};
                line-height: 0.5;
                font-size: 13px;
                margin:0 0 4rem;
                border: 0;
                text-transform: uppercase;
              }
            }

            .activate-tv .activate-btn {
              .Button-new {
                margin: ${__isThemeOfType() ? "0 5.5rem 8.2rem" : ""};
              }
            }
          }

          @media screen and (max-width: 425px) {            
            .container-setup .formgroup-setup {
              margin: 0 0 0 10px;
            }
            .container-setup .formInput {
              width: ${__isThemeOfType() ? "27px" : "38px"};
              height: ${__isThemeOfType() ? "53px" : " 48px"};
            }
            .container-setup .activate-btn {
              .Button-new {
                width: ${__isThemeOfType() ? "80%" : "65%"};
                line-height: ${__isThemeOfType() ? "0" : "0.5"};
              }
            }
          }
          @media screen and (max-width: 375px) {
            .container-setup .activate-btn {
              .Button-new {
                width: ${__isThemeOfType() ? "80%" : "66%"};
              }
            }
            .container-setup .formgroup-setup {
              margin: 0 0 0 6px;
            }
            .container-setup .formInput {
              width: ${__isThemeOfType() ? "27px" : "33px"};
            }
            .formgroup-setup{
              .formInput{
                .formControl{
                  font-size: 0.88rem;
                }
              }
              
            }
          }
        `}
      />
    </>
  );
};
