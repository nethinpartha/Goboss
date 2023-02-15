import React from 'react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fade = keyframes`
  from {
    opacity: 0;
    transform: scale3D(0.95, 0.95, 0.95);
  }
  to {
    opacity: 1;
    transform: scale3D(1, 1, 1);
  }
`;

const ErrorContainer = styled.div`
  color: red;
  display: flex;
  justify-content: left;
  padding: 0 15px;
  font-size: 13px;
  margin: 0px auto 0px auto;
  width: 100%;
  max-width: 450px;
  opacity: 90;
  animation: ${fade} 150ms ease-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
  will-change: opacity;

  & svg {
    margin-right: 10px;
  }
`;

const CheckoutError = ({ children }) => (
  <ErrorContainer role="alert">
    {children}
  </ErrorContainer>
);

export default CheckoutError;
