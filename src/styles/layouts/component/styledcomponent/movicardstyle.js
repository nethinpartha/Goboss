import React from "react";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";

export const moviecard = {
  background: (profileUrl) => ({
    width: `$sm ? : 'auto'`,
    background: `linear-gradient(360deg, #000000 0%, #00000024 100%),
         url(${profileUrl})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "50% 50%",
    backgroundColor: "#131722",
    border: "0",
  }),
  container: () => ({
    padding: "0",
  }),
  beneathCardText: () => ({
    background: "#131722",
    border: "0",
    fontSize: "14px",
    color: "white",
  }),
};

export const CarousalStyle = () => {
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
          .icon-background,
          .euKzJn {
            // background: ${bgcolor};
            background: none;
          }

          .hoverscreen-wrapper {
            background: ${bgcolor};
            border-radius: 1rem;
            box-shadow: "6px 3px 12px #362F2FD1";
            right: 1.5rem;
          }
          .hoverscreen-wrapper:first-of-type {
            right: 0.8rem;
          }

          .textbeneath {
            background: ${bgcolor};
            border: 0;
            font-size: 14px;
            color: white;
          }

          @media screen and (width: 768px) {
            .hoverscreen-wrapper {
              display: none;
            }
          }
        `}
      />
    </>
  );
};
