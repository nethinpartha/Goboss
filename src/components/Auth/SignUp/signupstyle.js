import React from "react";
import { Global, css } from "@emotion/react";

export const SignUpGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          label {
            display: flex;
          }
          .signupwrapper .basicLayout {
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
              width: 24% !important;
              margin: 8%;
            }
          }
          @media screen and (max-width: 768px) {
            .header-logo {
              width: 24% !important;
            }
          }
        `}
      />
    </>
  );
};
