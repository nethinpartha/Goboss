import React from "react";
import { Global, css } from "@emotion/react";
import GlobalFont from '../../../styles/global-styles/globalFonts';

export const SignInGlobalStyle = () => {
  return (
    <>
      <GlobalFont />
      <Global
        styles={css`
          label {
            display: flex;
          }
          .SignIn-background .basicLayout {
            min-height: 60vh;
          }
          .footer .footer-cols {
            grid-template-columns: repeat(3, 1fr);
          }
          .header-logo {
            margin: 1%;
          }
          
          @media screen and (max-width: 480px) {
            .footer .footer-cols {
              grid-template-columns: repeat(1, 1fr);
            }

            .header-logo {
              width: 44% !important;
              margin: 8%;
            }
          }
          @media screen and (max-width: 768px) {
            .header-logo {
              width: 44% !important;
            }
          }
        `}
      />
    </>
  );
};
