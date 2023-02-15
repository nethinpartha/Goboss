import React from "react";
import { Col } from 'react-bootstrap';
import { HeaderContext } from "../../../../context/header-context";
import { Nav } from "react-bootstrap";

export default function Category() {
  return (
    <HeaderContext.Consumer>
      {({ category, themename, displaycategories, isSignedIn, originals }) => (
        <>
          {displaycategories && (
            <Col
              xl={2}
              lg={2}
              md={2}
              sm={3}
              xs={3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
              }}>
              <Nav
                className={`${themename}-category category-wrapper`}>
                <Nav.Link
                  href={originals ? `/originals` : "/"}
                  className={"header-categories"}
                  aria-label={"View my list"}
                  style={{ cursor: `${originals ? "pointer" : "default"}` }}
                >
                  {originals ? 'Originals' : ""}
                </Nav.Link>
              </Nav>
            </Col>
          )}
          {!displaycategories && (
            <div className="display-header-category"></div>
          )}
        </>
      )}
    </HeaderContext.Consumer>
  );
}
