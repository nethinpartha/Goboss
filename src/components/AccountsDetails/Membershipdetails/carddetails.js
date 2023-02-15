import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pathOr } from "ramda";
import { ListGroup, Image } from "react-bootstrap";
import { membershipstyle } from "../../../styles/layouts/component/styledcomponent/membershipstyle";
import "../../../styles/layouts/component/scss/savedcard.scss";
import LoadingSpinner from "../../../frontend-library/atoms/loadingSpinner";
import { getPaymentMethodList } from "../../../actions/getpaymentmethods.action";
import { GetPaymentMethodSelector } from "../../../selectors/getpaymentmethodsselector";
import { __parseThemeSelector } from '../../../selectors/themestyleselector';
import Visa from "../icons/Visa.png";

export const PaymentOptions = ({
  paymentMtds,
  setShowCard,
  updateCardHnadler,
  handleUpdateConfirm,
  primaryTxtColor
}) => {
  return paymentMtds.map((methods) => (
    <ListGroup as="ul" key={methods.id} style={{ border: "1px solid #ccc" }}>
      <ListGroup.Item
        style={{ ...membershipstyle.background(), marginTop: "0.5rem", background: "transparent" }}
      >
        <div
          className="float-left"
          style={{
            fontSize: "15px",
            color: "#cccccc",
            fontWeight: "bold",
          }}
        >
          <Image
            src={`${Visa}`}
            alt="card type logo"
            style={{ paddingRight: "1rem", color: "#cccccc" }}
          />
          *** *** *** {methods.card.last4}
        </div>
        <div
          className="float-right"
          style={{
            color: primaryTxtColor,
            fontSize: "12px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          <span
            onClick={() => {
              updateCardHnadler(methods.id);
              setShowCard(true);
            }}
            className="gradient-text"
          >
            Update
          </span>{" "}
          | <span onClick={() => handleUpdateConfirm(methods.id)}
            className="gradient-text"
          >Remove</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item style={membershipstyle.background()}>
        <p
          style={{
            fontSize: "15px",
            color: "#cccccc",
            maxWidth: "100%",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {`${pathOr("", ["billing_details", "email"])(methods)}`}
        </p>
        <div
          className="float-left"
          style={{
            fontSize: "15px",
            color: "#cccccc",
            maxWidth: "40%",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {`${pathOr("", ["billing_details", "address", "line1"])(methods)}
           ${pathOr("", ["billing_details", "address", "line2"])(methods)} 
           ${pathOr("", ["billing_details", "address", "postal_code"])(
            methods
          )}`}
        </div>
      </ListGroup.Item>
    </ListGroup>
  ));
};

export default function Carddetails({
  setShowCard,
  updateCardHnadler,
  handleUpdateConfirm,
}) {

  const dispatch = useDispatch();
  const { loading, paymentMtds } = GetPaymentMethodSelector();
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;

  useEffect(() => {
    dispatch(getPaymentMethodList.getPaymentMethodAction());
  }, []);

  if (loading) return <LoadingSpinner />;
  if (paymentMtds.length === 0) return null;

  return (
    <>
      <div className="savedcard-setup">
        <h4
          style={{
            textAlign: "left",
            marginTop: "2rem",
            marginBottom: "2rem",
            fontFamily: "Inter, sans-serif",
            color: "#ffffff"
          }}
        >
          My Saved Cards
        </h4>
      </div>
      <PaymentOptions
        setShowCard={setShowCard}
        paymentMtds={paymentMtds}
        updateCardHnadler={updateCardHnadler}
        handleUpdateConfirm={handleUpdateConfirm}
        primaryTxtColor={primaryTxtColor}
      />
    </>
  );
}
