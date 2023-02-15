import React from "react";
import { Navbar, Image } from "react-bootstrap";
import { HeaderContext } from "../../../../context/header-context";

export default function Brandlogo() {
  return (
    <HeaderContext.Consumer>
      {({ logo, themename }) => (
        <div className="header-logo-setup">
        <Navbar.Brand
          href={"/"}
          className="headerv1-logo"
          aria-label={"Navigate to home"}
        >
          <div className="figure-wrapper">
            <Image
              className={`${themename}-logo-image`}
              alt={"brand logo"}
              src={`${logo}`}
            ></Image>
          </div>
        </Navbar.Brand></div>
      )}
    </HeaderContext.Consumer>
  );
}
