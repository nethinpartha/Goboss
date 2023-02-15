import React from "react";
import { pathOr } from "ramda";
import { Global, css } from "@emotion/react";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
export const PlayerLayout = () => {
  const { colors } = __parseThemeSelector();
  const primaryBtnColor = pathOr("#f98a39", ["colors", "primaryBtnColor"])(
    colors
  );
  return (
    <>
      <Global
        styles={css`
          /* player ui skin changes */
          /* Customization css style */
          .theo-primary-color,
          .vjs-selected {
            color: ${primaryBtnColor} !important;
          }
          .vjs-fullscreen-control {
            display: none !important;
          }
        `}
      />
    </>
  );
};
