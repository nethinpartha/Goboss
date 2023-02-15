import React from "react";
const GlobalAccountDetailsStyle = {
  navbarstyle: (bgColor) => ({
    minWidth: "30%",
    minHeight: "100%",
    height: "auto",
    backgroundColor: `${bgColor}`,
    padding: "2rem 2%",
    maxWidth: "450px",
  }),
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
  button: () => ({
    background: "#E1540F",
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
  title: () => ({
    color: "#585858",
    font: " bold 18px/30px Inter",
    letterSpacing: "0.25px",
  }),
  subtitle: () => ({
    font: "500 14px/20px Inter",
    letterSpacing: "0.19px",
    color: "#585858",
    marginTop: "10px",
  }),
  closeIcon: () => ({
    fontSize: "18px",
    color: "#585858",
    textAlign: "right",
    marginLeft: "44%",
  }),
  button: () => ({
    background: "#E1540F",
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
  }),
  errormessage: () => ({
    color: "red",
    fontSize: "10px",
    margin: "0",
    padding: "0",
  }),
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

export default GlobalAccountDetailsStyle;
