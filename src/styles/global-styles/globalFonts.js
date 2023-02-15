import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { __isThemeOfType } from "../../utils/tenant";
import { __parseThemeSelector } from '../../selectors/themestyleselector';

const GlobalFont = () => {
  const { font } = __parseThemeSelector();
  let GlobalFontFamily = font;
  return (
    <>
      <Global
        styles={css`
          @font-face {
              font-family: ${GlobalFontFamily};
                src: url("../../assets/fonts/${GlobalFontFamily}.eot?#iefix") format('embedded-opentype'), /* IE6-IE8 */
                     url("../../assets/fonts/${GlobalFontFamily}.woff2") format('woff2'), /* Super Modern Browsers */
                     url("../../assets/fonts/${GlobalFontFamily}.woff") format('woff'), /* Modern Browsers */
                     url("../../assets/fonts/${GlobalFontFamily}.ttf") format('truetype'), /* Safari, Android, iOS */
                     url("../../assets/fonts/${GlobalFontFamily}.svg") format('svg'); /* Legacy iOS */
              font-weight: normal;
              font-display: swap;
          }
          body {
            height: initial !important;
          }
          body,h1,h2,h3,h4,h5,h6,div,section,span,p,footer,label,main {
            font-family: ${GlobalFontFamily}, sans-serif !important;
          }
          .sacromento {
            font-family: Sacramento, Helvetica, Arial, sans-serif !important;
          }
        `}
      />
    </>
  );
};

export default GlobalFont;
