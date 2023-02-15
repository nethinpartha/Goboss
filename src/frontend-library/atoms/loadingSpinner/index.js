import React from "react";
import Loader from "react-loader-spinner";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";
import "./style.scss";

export function LoadingSpinner() {
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;
  return (
    <div className="spinner-container" style={{ minHeight: "100vh" }}>
      <Loader type="TailSpin" color={primaryTxtColor} height={80} width={80} />
    </div>
  );
}

export default LoadingSpinner;
