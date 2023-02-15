import React from "react";
import { Global, css } from "@emotion/react";

export const MembershipGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          .membership-background {
            min-height: 80vh !important;
          }
        `}
      />
    </>
  );
};
