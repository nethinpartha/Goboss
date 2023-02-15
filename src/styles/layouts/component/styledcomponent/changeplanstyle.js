import React from "react";
import { Global, css } from "@emotion/react";
import GlobalStyleLayout from "../../../global-styles/globalStyle";
// import { useSelector } from 'react-redux';
// import { pathOr } from 'ramda';

export const ChangePlanGlobalStyle = () => {
  // const themes = useSelector(state => pathOr(null, ['ThemeState'])(state));

  // const themeName = pathOr('default', ['themeName'])(themes);
  return (
    <>
      <GlobalStyleLayout />
      <Global
        styles={css`
          body {
            .changeplan-background {
              min-height: 60vh;
              background: white;
              width: 100%;
            }
          }
          .changeplan-background {
            .headercomp {
              background: transparent
                linear-gradient(180deg, #e1540f 0%, #fbb08b 100%) 0% 0%
                no-repeat padding-box !important;
            }
            .upgrade {
              background: #e1540f !important;
            }
          }
          .footer ul li p {
            color: #212121;
            font-weight: bold;
          }
          .footer,
          .footer a {
            color: black;
          }
          .callus {
            color: #212121;
            font-weight: bold;
          }
         
          .changeplan-background .basicLayout {
            min-height: 60vh;
          }
          .footer {
            background: #f8f8f8;
            border: none;
          }
         

          @media screen and (max-width: 480px) {
            .footer .footer-cols {
              grid-template-columns: repeat(2, 1fr);
            }
            .header-logo {
              width: 44% !important;
              margin: 8%;
            }
          }
        
          }
        `}
      />
    </>
  );
};
