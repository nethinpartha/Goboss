import React from 'react';
import GlobalStyles from "./CheckoutComponents/GlobalStyles";
import { Elements } from "@stripe/react-stripe-js";

const Layout = ({ children, title, stripePromise }) => {
  return (
    <>
      <GlobalStyles />
      <header>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </header>
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export const iframeStyles = {
  base: {
    color: "#E1540F",
    fontSize: "16px",
    iconColor: "#cccccc",
    "::placeholder": {
      color: "#cccccc"
    }
  },
  invalid: {
    color: "#E1540F",
    fontSize: "16px",
    iconColor: "#cccccc",
    "::placeholder": {
      color: "#cccccc"
    }
  },
  complete: {
    color: "#E1540F",
    fontSize: "16px",
    iconColor: "#cccccc",
    "::placeholder": {
      color: "#cccccc"
    }
  }
};

export const cardElementStyle = {
  border: `2px solid #cccccc`,
  margin: `10px 0.25rem`,
  borderRadius: `4px`,
  backgroundColor: `transparent`,
  position: `relative`
}
export const cardstyle = {
  border: `2px solid #cccccc`,
  background: `transparent 0% 0% no-repeat padding-box`,
  margin: '1rem 0 1rem 0'
}

export const cardBodyLeft = {
  font: `normal normal medium 20px Inter`,
  letterSpacing: `0px`,
  color: `#ffffff`,
  marginTop: '0.5rem',
  fontSize: "18px"
};
export const cardBodyRight = {
  font: `normal normal medium 17px Inter`,
  letterSpacing: `0px`,
  color: `#E1540F`,
  textAlign: 'right',
  marginTop: '0.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: "18px"
}

export const cardBodyStyle = {
  display: 'flex',
  padding: '0.45rem'
}

export const contentwidth = {
  width: '45%'
}

export default Layout;
