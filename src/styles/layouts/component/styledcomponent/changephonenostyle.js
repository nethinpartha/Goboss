export const activatedevicestyle = {
  container: (sm) => ({
    maxWidth: `${sm ? "100%" : "40%"}`,
    textAlign: "center",
    marginBottom: "3rem",
  }),
  title: (sm) => ({
    fontSize: "25px",
    color: "#585858",
    fontWeight: "bold",
    textAlign: `${sm ? "center" : "left"}`,
  }),
  subtitle: (sm) => ({
    fontSize: "15px",
    color: "#585858",
    textAlign: `${sm ? "center" : "left"}`,
  }),
  button: (primaryBtnColor) => ({
    background: `${primaryBtnColor}`,
    color: "#FFFFFF",
    fontSize: "18px",
    padding: "1rem",
    width: "100%",
    margin: "1rem",
    border: "0",
    textTransform: "uppercase",
  }),
  formInput: () => ({
    width: `46px`,
    height: `52px`,
    marginRight: "0.5rem",
    border: `1px solid #707070`,
  }),
  inputField: () => ({
    border: "0",
    fontWeight: "bold",
  }),
};
export const updateEmailFormStyle = {
  title: () => ({
    color: "#ffffff",
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
    textAlign: "right",
    width: "40%",
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
    textAlign: "left",
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
    color: "#ffffff",
    fontSize: "28px",
    textAlign: "center",
  }),
  subtitle: () => ({
    color: "#ffffff",
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
