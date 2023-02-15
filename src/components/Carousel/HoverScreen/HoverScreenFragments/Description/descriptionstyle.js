export const descriptionstyle = {
  description: (smallsize) => ({
    fontSize: `${smallsize ? "8px" : "12px"}`,
    color: "#949CB0",
    margin: "0",
    padding: "0",
    lineHeight: `${smallsize ? "0.7rem" : "1.5rem"}`,
    height: '70px'
  }),
  subdescription: (smallsize) => ({
    fontSize: `${smallsize ? "8px" : "10px"}`,
    margin: `${smallsize ? "0" : "0.5rem -1rem"}`,
    padding: `8px 0 ${smallsize ? "6px" : "0"} 0`,
    lineHeight: `${smallsize ? "0.7rem" : "0.5rem"}`,
  }),
};
