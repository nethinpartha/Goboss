import React, { useState, useEffect } from 'react';
import {
  useStripe,
  PaymentRequestButtonElement,
} from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
// import { browser } from '../../../../helpers/browser';
import { showModalComAction } from "../../../../actions/showmodal.action";
import { showErrorAlertAction } from '../../../../actions/erroralert.action';
import { buySubscriptionPlan } from '../../../../actions/buySubscriptionPlan.action';
import { classes } from './paymentrequestbtnstyle';

const PaymentRequestButton = () => {
  // const history = useHistory();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const membershipdetails = useSelector(state => pathOr('', ['Membership', 'data'])(state));
  const currency = pathOr('', ['currency'])(membershipdetails);
  const selectedplan = pathOr('', ['selectedPlan'])(membershipdetails);
  const planId = pathOr('', ['planId'])(membershipdetails);
  const amount = pathOr('', ['amount'])(membershipdetails);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [checkoutError, setCheckoutError] = useState();

  useEffect(() => {
    if (stripe && amount) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: amount * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });
      // Check the availability of the Payment Request API.
      pr.canMakePayment().then(result => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe, amount]);

  useEffect(() => {
    if (paymentRequest) {
      paymentRequest.on('paymentmethod', async (ev) => {
        try {
          let id = pathOr('', ['paymentMethod', 'id'])(ev);
          if (!id) return;
          let paymentMethodId = id;
          let billingDetails = '';
          if (paymentMethodId) {
            dispatch(buySubscriptionPlan.buySubscriptionPlanAction({
              planId, paymentMethod: paymentMethodId, billingDetails, cb: (error, response) => {
                let responseCode = pathOr('', ['responseCode'])(response);
                if (responseCode === 200) {
                  dispatch(showModalComAction.ShowModal('SubscriptionSuccess'));
                }
                else if (error) {
                  dispatch(showModalComAction.CloseModal('signin'));
                  dispatch(showErrorAlertAction.ShowErrorAlert("Something Went Wrong. Please try again after sometime."))
                }
              }
            }));
          }
        } catch (e) {

        }
      });
    }
    return () => {
      if (paymentRequest) {
        paymentRequest.off('paymentmethod', () => { });
      }
    };
  }, [paymentRequest]);

  if (!paymentRequest) {
    return <div></div>;
  }
  if (paymentRequest) {
    return (
      <>
        <div style={classes.delimeterWrapper()}>
          OR
        </div>
        <div style={{ marginTop: "10px" }}>
          <PaymentRequestButtonElement
            options={{
              paymentRequest,
              style: {
                paymentRequestButton: {
                  theme: 'light-outline',
                  height: '40px',
                },
              },
            }} />
        </div>
      </>
    )
  }

}

export default PaymentRequestButton;