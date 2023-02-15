import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import styled from "@emotion/styled";
import Row from "./CheckoutComponents/Row";
import BillingDetailsFields from "./CheckoutComponents/BillingDetailsFields";
import PaymentRequestButton from './PaymentRequestButton/paymentrequestbtn';
import SubmitButton from "./CheckoutComponents/SubmitButton";
import CheckoutError from "./CheckoutComponents/CheckoutError";
import { showModalComAction } from '../../../actions/showmodal.action';
import { buySubscriptionPlan } from '../../../actions/buySubscriptionPlan.action';
import { showErrorAlertAction } from '../../../actions/erroralert.action';
import {
  iframeStyles,
  cardElementStyle,
  cardstyle,
  cardBodyLeft,
  cardBodyRight,
  cardBodyStyle,
  contentwidth
} from './Layout';
import { pathOr } from 'ramda';


const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const CheckoutForm = ({
  price,
  onSuccessfulCheckout,
  selectedplan,
  currency,
  history,
  primaryBtnColor,
  planId
}) => {

  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        line1: ev.target.address.value,
        postal_code: ev.target.zip.value
      }
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails
      });

      if (error) {
        // console.log('[error]', error);
        setCheckoutError(error.message);
        setProcessingTo(false);
      } else {
        stripePaymentHandler(paymentMethod);
      }

    } catch (err) {
    }
  };

  const stripePaymentHandler = (paymentMethod) => {
    if (paymentMethod && paymentMethod.error) {
      setCheckoutError('payment failed');
    }
    let paymentMethodId = pathOr('', ['id'])(paymentMethod);
    let billingDetails = pathOr('', ['billing_details'])(paymentMethod);
    if (paymentMethodId) {
      dispatch(buySubscriptionPlan.buySubscriptionPlanAction({
        planId, paymentMethod: paymentMethodId, billingDetails, cb: (error, response) => {
          let responseCode = pathOr('', ['responseCode'])(response);
          if (responseCode === 200) {
            onSuccessfulCheckout();
          }
          else if (error) {
            dispatch(showModalComAction.CloseModal('signin'));
            dispatch(showErrorAlertAction.ShowErrorAlert("Something Went Wrong. Please try again after sometime."))
          }
        }
      }));
    }

  }

  const handlePlanChange = () => {
    dispatch(showModalComAction.ShowModal('membership'));
  }


  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };



  return (
    <form onSubmit={handleFormSubmit}>
      <>
        <BillingDetailsFields />
      </>
      <div style={cardElementStyle}>
        <CardElementContainer>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
        </CardElementContainer>
      </div>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <div>
        <Card style={cardstyle}>
          <Card.Body style={cardBodyStyle}>
            <div style={contentwidth}>
              <p style={cardBodyLeft}>{`${currency} `}{` /${selectedplan}`}</p>
            </div >
            <div style={contentwidth}>
              <p
                style={cardBodyRight}
                className="gradient-text"
                onClick={handlePlanChange}>
                Change
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Row>
        <SubmitButton disabled={isProcessing || !stripe} style={{ background: primaryBtnColor }}>
          {isProcessing ? "Processing..." : `PAY ${currency}`}
        </SubmitButton>
      </Row>
    </form >
  );
};

export default CheckoutForm;
