import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import rightchev from "../PayPalButton/assets/right-chevron.svg";
import { CardStyle } from "./cardpaymentstyle";

export const PayByCard = ({ handleCardPaymentSelection }) => {
  return (
    <Card style={CardStyle.card()} onClick={handleCardPaymentSelection}>
      <Card.Body style={CardStyle.cardbody()}>
        <Container style={CardStyle.container()}>
          <Row>
            <Col md={6} style={CardStyle.cardText()}>
              {"Credit Card/Debit Card"}
            </Col>
            <Col md={6}>
              <div style={{ textAlign: "right", fontSize: "26px" }}>
                <Image src={rightchev} alt={"pay by card"} />
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};
