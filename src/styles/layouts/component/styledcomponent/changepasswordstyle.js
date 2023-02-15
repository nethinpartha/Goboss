export const updateEmailFormStyle = {
  title: () => ({
    color: "#585858",
    font: " bold 18px/30px Inter",
    letterSpacing: "0.25px",
  }),
  subtitle: () => ({
    font: "500 14px/20px Inter",
    letterSpacing: "0.19px",
    color: "#ffffff",
    marginTop: "10px",
    textAlign: "left"
  }),
  formGroup: () => ({
    marginBottom: "0"
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
    marginTop: "1rem",
    border: "0",
    textTransform: "capitalize",
  }),
  input: () => ({
    width: "100%",
    border: `1px solid #707070`,
    height: "3rem",
    borderRadius: "1px",
    textAlign: "left"
  }),
  showPwd: () => ({
    textAlign: "right",
    width: "40%",
    top: "1rem",
    position: "relative",
    left: "90%",
    top: "-2.5rem"
  }),
  errormessage: () => ({
    color: "red",
    fontSize: "10px",
    margin: "0",
    padding: "0",
    marginTop: "-1rem"
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
  title: () => ({
    color: "#ffffff",
    fontSize: "28px",
    textAlign: "center",
    fontFamily: "Inter, sans-serif"
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
