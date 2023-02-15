export const CardTitleStyle = (primaryTxtColor, bgColor) => {
  return {
    width: "100%",
    background: `${bgColor}`,
    color: `${primaryTxtColor ? primaryTxtColor : ""}`,
    border: "none",
    borderRadius: "0",
  };
};

export const CardBodyStyle = (bp) => {
  return {
    border: "none",
    borderRadius: "0",
    width: "100%",
  };
};
