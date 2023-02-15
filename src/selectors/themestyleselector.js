import React from "react";
import { path, pathOr } from "ramda";
import { useSelector } from "react-redux";
import { __isThemeOfType } from "../utils/tenant";
function ThemeLayout() {
  return useSelector((state) => pathOr(null, ["ThemeState"])(state));
}

// construct the primary font style
const __constructprimaryfont = ({
  colors,
  valueToBParsed = "primaryFontColor",
}) => {
  //  parse the parameters to construct the css === for linear gradient type === degree, start,end
  const primaryfontclr = pathOr("", [`${valueToBParsed}`])(colors);

  // get the type of button color
  const type = pathOr("solid", [`${valueToBParsed}`, "type"])(colors);

  // get the linear gradient button type realted values
  const primaryfntdegree = pathOr(0, ["color", "degree"])(primaryfontclr);
  const primaryfntstart = pathOr("#cccccc", ["color", "start"])(primaryfontclr);
  const primaryfntend = pathOr("#cccccc", ["color", "end"])(primaryfontclr);

  if (type === "solid") {
    return pathOr("#131722", ["color", "value"])(primaryfontclr);
  }
  return `linear-gradient(${primaryfntdegree}deg,${primaryfntstart}, ${primaryfntend})`;
};

const __constructprimaryTxtClr = ({
  colors,
  valueToBParsed = "primaryFontColor",
}) => {
  //  parse the parameters to construct the css === for linear gradient type === degree, start,end
  const primaryfontclr = pathOr("", [`${valueToBParsed}`])(colors);

  // get the type of button color
  const type = pathOr("solid", [`${valueToBParsed}`, "type"])(colors);

  // get the linear gradient button type realted values
  const primaryfntstart = pathOr("#cccccc", ["color", "start"])(primaryfontclr);
  const primaryfntend = pathOr("#cccccc", ["color", "end"])(primaryfontclr);
  if (type === "solid") {
    return pathOr("rgb(255, 81, 47)", ["color", "value"])(primaryfontclr);
  }
  return `${!__isThemeOfType() ? primaryfntstart : primaryfntstart}`;
};

export function __parseThemeSelector() {
  const themes = ThemeLayout();
  const colors = pathOr(null, ["colors"])(themes);
  // get primary styles
  const primaryBtnColor = __constructprimaryfont({
    colors,
    valueToBParsed: "primaryBtnColor",
  });
  const primaryTxtColor = __constructprimaryTxtClr({
    colors,
    valueToBParsed: "primaryBtnColor",
  });
  const primaryFontColor = __constructprimaryfont({
    colors,
    valueToBParsed: "primaryFontColor",
  });
  const secondaryFontColor = __constructprimaryfont({
    colors,
    valueToBParsed: "secondaryFontColor",
  });

  const bgColor = __constructprimaryfont({ colors, valueToBParsed: "bgColor" });

  return {
    themeId: pathOr("", ["themeId"])(themes),
    logoImg: pathOr("", ["logoImg"])(themes),
    id: pathOr("", ["id"])(themes),
    isEmailVerification: pathOr(false, ["isEmailVerification"])(themes),
    colors: {
      type: pathOr("solid", ["solid"])(colors),
      getbgColorType: () => pathOr("solid", ["solid"])(colors),
      bgColor,
      primaryBtnColor,
      primaryFontColor,
      secondaryFontColor,
      primaryTxtColor,
    },
    font: pathOr("Inter", ["font", "global"])(themes),
    socialSignIn: pathOr(false, ["socialSignIn"])(themes),
    isSubscription: pathOr(false, ["isSubscription"])(themes),
    isSignIn: pathOr(false, ["isSignIn"])(themes),
    playerCss: pathOr("", ["layout", "playerCss"])(themes),
  };
}
