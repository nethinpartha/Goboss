import React from "react";
import { pathOr } from "ramda";
import { useSelector, useDispatch } from "react-redux";
import PromoCode from "./promoCode";
import { useHistory } from "react-router-dom";
import { PayByCard } from "./CardPaymentSelection/cardpayment";
import PayPalButton from "./PayPalButton/PayPalButton";
import "./style.scss";
import { showModalComAction } from '../../actions/showmodal.action';
import UserInfoSelector from '../../selectors/getuserinformationselector';

export const PaymentOptions = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const membershipdetails = useSelector((state) =>
    pathOr("", ["Membership", "data"])(state)
  );
  const isVerified = useSelector((state) =>
    pathOr("", ["Emailvalidation", "emailaddress", "isVerified"])(state)
  );
  let { isSubscribed } = UserInfoSelector();
  let isSubscription = useSelector(state => pathOr(false, ['ThemeState', 'isSubscription'])(state));

  const handleAccount = () => {
    if (!isVerified) {
      dispatch(showModalComAction.ShowModal('signupsucess'));
      return;
    }
    if (isSubscription) {
      if (!isSubscribed && isVerified) {
        dispatch(showModalComAction.ShowModal('membership'));
        return;
      } else if (!isVerified) {
        dispatch(showModalComAction.ShowModal('signupsucess'));
        return;
      }
    }
  }

  const currency = pathOr("", ["currency"])(membershipdetails);
  const selectedplan = pathOr("", ["selectedPlan"])(membershipdetails);
  const handleCardPaymentSelection = () => {
    history.push("/cardcheckout");
  };
  return (
    <>
      <section className={"paymentoptions"}>
        <div className="tentkotta-sans-font-loaded">
          <div className="basicLayout simplicity" dir="ltr">
            <div className="simpleContainer">
              <div className="centerContainer">
                <div className="regFormContainer">
                  <div className="payment-ease-text">
                    {/* <p>Step 3 of 3</p> */}
                    <h2>Set up your payment.</h2>
                    <p className="membership-sub-title">
                      Your membership starts as soon as you set up payment.
                    </p>
                    <p>
                      <span className="emphasise">No commitments.</span>
                    </p>
                    <p>
                      <span className="emphasise">Cancel online anytime.</span>
                    </p>
                  </div>
                  <div className="price-section">
                    <div className="price-left-section">
                      <div>{currency}</div>
                      <div>{selectedplan}</div>
                    </div>
                    <div
                      className="price-right-section"
                      onClick={handleAccount}
                    >
                      <span>Change</span>
                    </div>
                  </div>
                  <div className="promobtn">
                    <PromoCode />
                  </div>
                  <PayByCard
                    handleCardPaymentSelection={handleCardPaymentSelection}
                  />
                  {/* <PayPalButton /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentOptions;
