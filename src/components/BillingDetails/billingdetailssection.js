import React from "react";
import { Card } from "react-bootstrap";
import { billingdetailsstlye } from "../../styles/layouts/component/styledcomponent/billingdetailsstyle";
import Billingtable from "./billingtable";
import { useMediaQuery } from "../../components/Header/viewportHook";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import UserInfoSelector from "../../selectors/getuserinformationselector";
import Plandetailssection from "../AccountsDetails/PlansDetails/plandetailssection";
import Moment from "react-moment";

export default function Billingdetailssection() {
  const sm = useMediaQuery("(max-width: 576px)");
  const { colors } = __parseThemeSelector();
  const { nextBillingDate, endDate, isCancelled, duration } =
    UserInfoSelector();
  const { bgColor, primaryFontColor, primaryTxtColor } = colors;
  return (
    <>
      <h3 style={billingdetailsstlye.title(sm, primaryTxtColor)}>
        Billing Details
      </h3>
      <Card style={billingdetailsstlye.card(sm)}>
        <Card.Body
          style={{
            background: `transparent`,
            border: "0",
            borderRadius: "4px",
          }}
        >
          <Card.Title
            style={{
              fontSize: "19px",
              color: "#cccccc",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          >
            Your Membership
          </Card.Title>
          <Card.Body style={billingdetailsstlye.cardbody()}>
            <div
              style={{
                padding: "0.5rem",
                display: "flex",
                width: "100%",
              }}
            >
              <div style={billingdetailsstlye.details(sm)}>{"Your plan"}</div>
              <div style={billingdetailsstlye.options(sm)}>
                <span className="gradient-text">
                  {duration === "year" ? "Annual" : "Monthly"}
                </span>
              </div>
            </div>
            <div
              style={{
                padding: "0.5rem",
                display: "flex",
                width: "100%",
              }}
            >
              <p style={billingdetailsstlye.details(sm)}>{"Your next bill"}</p>
              <p
                className="gradient-text"
                style={billingdetailsstlye.options(sm)}
              >
                {isCancelled && endDate && (
                  <>
                    <Moment format="YYYY-MM-DD" withTitle>
                      {endDate}
                    </Moment>
                    {" (Cancelled)"}
                  </>
                )}
                {!isCancelled && (
                  <span className="gradient-text">{nextBillingDate}</span>
                )}
              </p>
            </div>
          </Card.Body>
          <Plandetailssection />
        </Card.Body>
      </Card>
      <Billingtable />
    </>
  );
}
