import React from "react";
import { useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import Layout from "./components/Layout";
// import Row from "./components/CheckoutComponents/Row";
import CheckoutForm from "./components/CheckoutForm";
import getPrice from "./utils/getPrice";
import { showModalComAction } from "../../actions/showmodal.action";
// import Membershipdetails from "../AccountsDetails/Membershipdetails/membership";
import PaymentRequestButton from './components/PaymentRequestButton/paymentrequestbtn';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { __parseThemeSelector } from '../../selectors/themestyleselector';


const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);


const StripeCheckoutForm = props => {
  // const [price, setPrice] = useState(23.99);
  const history = useHistory();
  const dispatch = useDispatch();
  const membershipdetails = useSelector(state => pathOr('', ['Membership', 'data'])(state));
  const currency = pathOr('', ['currency'])(membershipdetails);
  const selectedplan = pathOr('', ['selectedPlan'])(membershipdetails);
  const planId = pathOr('', ['planId'])(membershipdetails);
  const amount = pathOr('', ['amount'])(membershipdetails);
  const handleonSuccessfulCheckout = () => {
    dispatch(showModalComAction.ShowModal('SubscriptionSuccess'));
  }
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor } = colors;
  return (
    <>
      <Layout title="Get your subscription today" stripePromise={stripePromise}>
        <CheckoutForm
          price={getPrice(amount)}
          currency={currency}
          selectedplan={selectedplan}
          history={history}
          planId={planId}
          primaryBtnColor={primaryBtnColor}
          onSuccessfulCheckout={handleonSuccessfulCheckout}
        />
      </Layout>
      <Elements stripe={stripePromise}>
        <PaymentRequestButton />
      </Elements>
    </>
  );
};

export default StripeCheckoutForm;
