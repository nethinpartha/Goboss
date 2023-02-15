export const CardTitleStyle = (sm) => {
  return {
    width: "100%",
    background: "#131722",
    color: "white",
    fontSize: `${sm ? "18px" : "32px"}`,
    border: "none",
    borderRadius: "0",
    margin: `${sm ? "0" : ""}`,
    padding: `${sm ? "0" : ""}`,
  };
};

export const CardBodyStyle = (bp) => {
  return {
    border: "none",
    borderRadius: "0",
    width: "100%",
    margin: "2rem 0",
  };
};
