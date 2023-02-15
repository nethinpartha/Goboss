import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { __parseFooterContent } from "../../selectors/footerselector";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import "../../styles/layouts/component/scss/footer.scss";

const QuickLinks = ({ quickLinks }) => {
  return (
    <>
      <ul>
        <li>
          <p className="footer-title">
            <span className="gradient-text">{quickLinks.title}</span>
          </p>
        </li>
        {quickLinks.content.length > 0
          ? quickLinks.content.map((content) => (
              <li key={content.url}>
                <a href={`${content.url}`} aria-label={"terms of use"}>
                  {content.title}
                </a>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

const Support = ({ support }) => {
  return (
    <>
      <ul>
        <li>
          <a
            href="#footer"
            aria-label={"we provide 24/7 support"}
            style={{ textDecoration: "none", cursor: "auto" }}
          >
            <p className="footer-title">
              <span className="gradient-text">{support.title}</span>
            </p>
          </a>
        </li>
        {support.content.length > 0
          ? support.content.map((content) => (
              <li key={content.url}>
                <a href={`${content.url}`} aria-label={"terms of use"}>
                  {content.title}
                </a>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

const SocialLinks = ({ socialicons, socialiconstitle }) => {
  const iconstyle = {
    width: "36px",
    height: "36px",
    marginRight: "4%",
  };
  return (
    <>
      <ul>
        <li>
          <a
            href="#footer"
            style={{ textDecoration: "none" }}
            aria-label={"we provide 24/7 support"}
          >
            <p
              className="footer-socialgroup"
              style={{ textAlign: "left", cursor: "auto" }}
            >
              <span className=" gradient-text">{socialiconstitle}</span>
            </p>
          </a>
        </li>
        <li>
          <p className="icons" style={{ textAlign: "left" }}>
            {socialicons && socialicons.length > 0
              ? socialicons.map((data, index) => (
                  <span key={index}>
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={data.icon}
                        alt={data.title}
                        style={iconstyle}
                        className="hover-btn-animation"
                      />
                    </a>
                  </span>
                ))
              : null}
          </p>
        </li>
      </ul>
    </>
  );
};

export const AppLinks = ({ appLinks }) => {
  return (
    <>
      <ul style={{ textAlign: "center" }}>
        <li style={{ marginLeft: "0px" }}>
          <p className="icons appIcons">
            {appLinks && appLinks.content?.length > 0
              ? appLinks.content.map((data, index) => (
                  <span
                    key={index}
                    style={{
                      paddingRight: "0.5rem",
                    }}
                  >
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={data.img}
                        alt={data.title}
                        className="hover-btn-animation"
                        // style={iconstyle}
                      />
                    </a>
                  </span>
                ))
              : null}
          </p>
        </li>
      </ul>
    </>
  );
};

function Footer() {
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;
  const { quickLinks, support, socialicons, socialiconstitle, appLinks } =
    __parseFooterContent();
  return (
    <footer className="footer" id="footer">
      <nav className="footer-cols" aria-label="Footer navigation links">
        <QuickLinks quickLinks={quickLinks} primaryTxtColor={primaryTxtColor} />
        <Support support={support} primaryTxtColor={primaryTxtColor} />
        <SocialLinks
          socialicons={socialicons}
          socialiconstitle={socialiconstitle}
          primaryTxtColor={primaryTxtColor}
        />
      </nav>
      <Container fluid>
        <Row className="p-0 m-0">
          <Col md="12" className="p-0 m-0">
            <AppLinks appLinks={appLinks} />
          </Col>
          <Col className="p-0 m-0" md="12">
            <p className="callus" style={{ textAlign: "center" }}>
              Copyright 2023 @ Entertainment App
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
