export const JubotronStyle = (url = "../../assets/masterPoster.png") => {
  return {
    backgroundImage: ` linear-gradient(to bottom, rgba(19,23,34, 0.62), rgba(19,23,34, 0.83)), url(${url})`,
  };
};

export const CardStyle = {
  cardwrapper: (bp) => ({
    marginTop: "19%",
    marginLeft: "10%",
    background: "transparent",
  }),
  subscription: () => ({
    marginTop: "18%",
    marginLeft: "10%",
    background: "transparent",
  }),
  subtitle: (bp) => ({
    color: "#FFFFFF",
    fontSize: "14px",
    padding: "",
    margin: "18px 0",
    marginBottom: "4rem",
    textTransform: "uppercase",
    fontWeight: "300",
  }),
  addToList: () => ({
    background:
      "transparent linear-gradient(180deg, #4D4D4D 0%, #6B6562 100%) 0% 0% no-repeat padding-box",
    border: "1px solid #ffffff",
  }),
};
