import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import CastDetails from "../CastDetails/CastDetailsCarousalView";
import { DetailsTab } from "./DetailsTab/detail";
import { Tabstyle, ControlledTabGlobalStyle } from "./controlledtabstyle";

export default function Controlledtab({
  production,
  writing,
  crew,
}) {
  const [key, setKey] = useState("home");
  return (
    <>
      <ControlledTabGlobalStyle data-test={"controlledtabcomponent"} />
      <Container className="contentDetailsWrapper">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="tabination-container"
        >
          <Tab
            eventKey="home"
            title="Home"
            style={Tabstyle.tab()}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <CastDetails />
          </Tab>
          <Tab eventKey="profile" title="Details" style={Tabstyle.tab()}>
            <DetailsTab production={production} writing={writing} crew={crew} />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
