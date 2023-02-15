export const updatepasswordstyle = {
  navbarstyle: () => ({
    minWidth: "30%",
    minHeight: "100%",
    height: "auto",
    backgroundColor: "#FFFFFF",
    padding: "2rem 2%",
    maxWidth: "450px",
  }),
};

export const updateEmailFormStyle = {
  title: () => ({
    font: " bold 18px/30px Inter",
    letterSpacing: "0.25px",
  }),
  subtitle: () => ({
    font: "500 14px/20px Inter",
    letterSpacing: "0.19px",
    color: "#ffffff",
    marginTop: "10px",
  }),
  closeIcon: () => ({
    fontSize: "18px",
    color: "#ffffff",
    textAlign: "center",
    cursor: "pointer",
  }),
  button: (primaryBtnColor) => ({
    background: `${primaryBtnColor}`,
    color: "#FFFFFF",
    fontSize: "18px",
    padding: "0.5rem",
    width: "100%",
    margin: "0",
    border: "0",
    textTransform: "capitalize",
  }),
  input: () => ({
    width: "100%",
    border: `1px solid #707070`,
    height: "3rem",
    marginBottom: "2rem",
    borderRadius: "1px",
    textAlign: "left"
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
  }),
  title: () => ({
    color: "#585858",
    fontSize: "28px",
    textAlign: "center",
  }),
  subtitle: () => ({
    color: "#585858",
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "3rem",
  }),
  imageIcon: () => ({
    textAlign: "center",
    marginBottom: "1rem",
    height: "91px",
  }),
};
