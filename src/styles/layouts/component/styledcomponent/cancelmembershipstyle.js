export const updateEmailFormStyle = {
  title: (primaryFontColor) => ({
    color: primaryFontColor,
    font: " bold 18px/30px Inter",
    letterSpacing: "0.25px",
  }),
  subtitle: (primaryFontColor) => ({
    font: "500 14px/20px Inter",
    letterSpacing: "0.19px",
    color: primaryFontColor,
    marginTop: "10px",
  }),
  closeIcon: (primaryFontColor) => ({
    fontSize: "18px",
    color: primaryFontColor,
    textAlign: "right",
    marginLeft: "44%",
    cursor: "pointer"
  }),
  button: (primaryBtnColor) => ({
    background: primaryBtnColor,
    color: "#FFFFFF",
    fontSize: "16px",
    padding: "0.5rem",
    width: "100%",
    marginTop: "2rem",
    border: "0",
    textTransform: "uppercase",
  }),
  input: () => ({
    width: "100%",
    border: `1px solid #707070`,
    height: "30vh",
    borderRadius: "1px",
  }),
  errormessage: () => ({
    color: "red",
    fontSize: "10px",
    margin: "0",
    padding: "0",
  }),
};

export const successscreen = {
  container: () => ({
    marginTop: "4rem",
  }),
  listitem: () => ({
    border: "none",
    background: "transparent"
  }),
  title: (primaryFontColor) => ({
    color: primaryFontColor,
    fontSize: "28px",
    textAlign: "center",
  }),
  subtitle: (primaryFontColor) => ({
    color: primaryFontColor,
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "3rem",
  }),
  imageIcon: (primaryFontColor) => ({
    color: primaryFontColor,
    textAlign: "center",
    marginBottom: "1rem",
    height: "91px",
  }),
};
