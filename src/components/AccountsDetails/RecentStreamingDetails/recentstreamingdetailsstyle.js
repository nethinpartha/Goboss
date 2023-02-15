import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
export const recentstreamingstyle = {
  container: (bgColor) => ({
    maxWidth: "100%",
    border: "none",
    margin: "0",
    padding: "0 1rem",
    background: `${bgColor}`
  }),
  title: () => ({
    fontSize: "25px",
    color: "#cccccc",
    fontWeight: "bold",
    textAlign: "center"
  }),
  subtitle: () => ({
    fontSize: "16px",
    color: "#cccccc",
    fontWeight: "400",
    borderBottom: "0.5px solid #cccccc",
    paddingBottom: "1rem",
    paddingTop: "1rem",
    textAlign: "center"
  }),
  devicetitle: () => ({
    fontSize: "18px",
    color: "#cccccc",
    fontWeight: "bold",
    textAlign: "center"
  }),
  devicesubtitle: () => ({
    fontSize: "16px",
    padding: "0.25rem 0",
    margin: "0",
    color: "#cccccc",
    fontWeight: "400",
    textAlign: "center"
  }),
  button: () => ({
    padding: "0.5rem 1rem",
    marginLeft: "1rem",
    background: "#E1540F",
    color: "#FFFFFF",
    border: "none",
    textTransform: "uppercase",
    borderRadius: "4px",
  }),
};

export const RecentStreamingGlobalStyle = () => {
  const theme = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(theme);
  return (
    <>
      <Global
        styles={css`
          @media screen and (max-width: 456px) {
            .${themeName}-recent-streaming-details-Page .navbar-brand img {
              width: 100% !important;
            }
            .${themeName}-recent-streaming-details-Page .headercomp {
              padding: 2% 6% !important;
            }
          }
        `}
      />
    </>
  );
};
