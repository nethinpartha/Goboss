export const billingdetailsstlye = {
  title: (sm, primaryTxtColor) => ({
    color: `#ffffff`,
    fontWeight: "bold",
    fontSize: "23px",
    textTransform: "capitalize",
    marginBottom: "1rem",
    marginTop: "0.5rem",
    textAlign: `${sm ? "center" : ""}`,
    padding: "1rem",
  }),
  card: (sm) => ({
    background: "transparent",
    border: "0",
    width: "100%",
    marginBottom: "3rem",
    textAlign: `${sm ? "center" : ""}`,
  }),
  cardbody: () => ({
    padding: "0",
  }),
  details: (sm) => ({
    fontSize: "15px",
    color: "#cccccc",
    margin: "4px 0",
    fontWeight: "bold",
    textAlign: "left",
    width: "50%",
  }),
  options: (sm) => ({
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "right",
    width: "50%",
  }),
  td: () => ({
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "400",
  }),
  th: () => ({
    fontWeight: "500",
  }),
  tr: () => ({
    color: "#ffffff",
    fontSize: "15px",
  }),
};
