import React from "react";
import { HeaderContext } from "../../../../context/header-context";
import { Row, Col } from "react-bootstrap";
import NavBarComponent from "../../../searchBar/NavBar";
import UserAuth from "../UserAuthentication/userauth";

export default function SearchForm() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <HeaderContext.Consumer>
      {({ displaysearch, isSignIn }) => (
        <>
          <Col
            onSubmit={(e) => handleClick(e)}
            className={"searchform-container"}
            lg={3}
            sm={4}
            md={3}
            xs={3}
            xl={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {displaysearch && <NavBarComponent />}
          </Col>
          {isSignIn && (
            <Col
              lg={1}
              sm={2}
              md={1}
              xs={2}
              xl={1}
              className="header-userauth-btn-wrapper"
            >
              <UserAuth />
            </Col>
          )}
        </>
      )}
    </HeaderContext.Consumer>
  );
}
