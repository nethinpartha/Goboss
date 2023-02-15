export const castdetailssidenav = {
  sidenavbar: (e) => ({
    minWidth: "30%",
    minHeight: "111vh",
    height: "auto",
    backgroundColor: "#131722",
  }),
  sidenavitem: () => ({
    backgroundColor: "#131722",
  }),
  sidenavhover: () => ({
    backgroundColor: "#CDDC39",
  }),
  container: () => ({
    padding: "1rem 1.5rem",
  }),
  closeiconrow: () => ({
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffffff",
    justifyContent: "flex-end",
    padding: "1rem 0.5rem",
    cursor: "pointer",
  }),
  closeicon: () => ({
    textAlign: "right",
    cursor: "pointer",
  }),
  resetPadding: () => ({ padding: "0" }),
  profileImgWidth: () => ({ width: "80%" }),
  castDetailsText: () => ({ color: "#ffffff", fontSize: "1rem" }),
  descriptionTitle: () => ({
    padding: "1rem 0 0 1rem",
    color: "#ffffff",
    textAlign: "justify",
  }),
  description: () => ({
    padding: "0.5rem 1rem",
    color: "#ffffff",
    textAlign: "justify",
  }),
};
