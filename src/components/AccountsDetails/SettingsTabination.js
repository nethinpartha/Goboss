import React from "react";
import { Tab, Col, Row, Nav, Container } from "react-bootstrap";
import Activatedevicedetails from "./ActivateDeviceScreen/activatedevicedetails";

const SettingsTabination = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row style={{ margin: "2rem 0.5rem" }}>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className="event-setup" eventKey="first">
                Activate a device
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} sm={10}>
          <Tab.Content
            style={{ border: "1px solid #ffffff", padding: "1.5rem" }}
            className="tab-content-setup"
          >
            <Tab.Pane eventKey="first" className="tab-pane-setup">
              <Container>
                <Activatedevicedetails />
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default SettingsTabination;
