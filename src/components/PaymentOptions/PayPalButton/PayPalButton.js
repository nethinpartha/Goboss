import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Button, Image } from "react-bootstrap";
import { paypalbtn } from "./buttonstyle";
import paypal from "./assets/paypal.svg";

export default function PayPalButton() {
  const history = useHistory();
  return (
    <Container
      style={paypalbtn.container()}
      onClick={() => history.push("/paypal")}
    >
      <Button style={paypalbtn.button()}>
        <Image src={paypal} alt="pay with paypal" width="25%" height="25%" />
      </Button>
    </Container>
  );
}
