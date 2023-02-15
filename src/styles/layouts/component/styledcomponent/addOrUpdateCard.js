export const addOrUpdateCard = {
  formAddressLine: () => ({
    background: "transparent",
    color: "#ffffff",
    border: "none",
    borderBottom: "1px solid #ccc",
    outline: "none",
    marginRight: "1rem",
    textAlign: "left"
  }),
  zipcode: () => ({
    background: "transparent",
    color: "#ffffff",
    border: "none",
    borderBottom: "1px solid #ccc",
    outline: "none",
    width: "40%",
    textAlign: "left"
  }),
  flex: () => ({
    display: "flex",
  }),
  error: () => ({
    color: "red",
    fontSize: "14px",
    margin: "0.25rem",
    textAlign: "left",
    padding: "0.25rem",
  }),
  groupitem: (bgColor) => ({
    marginTop: "1rem",
    color: "rgb(225, 84, 15)",
    fontWeight: "bold",
    background: `${bgColor}`,
    border: "1px solid grey",
  }),
  formControl: () => ({
    background: "transparent",
    color: "#ffffff",
    border: "none",
    borderBottom: `1px solid #ccc`,
    outline: "none",
    textAlign: "left"
  }),
  label: () => ({
    paddingLeft: "0.25rem",
    fontSize: "12px",
    textAlign: "left"
  }),

  cancelButton: () => ({
    width: "45%",
    border: "none",
  }),
  submit: (primaryBtnColor) => ({
    background: primaryBtnColor,
    color: "#ffffff",
    width: "45%",
    marginLeft: "0.5rem",
    border: "none",
  }),
};
