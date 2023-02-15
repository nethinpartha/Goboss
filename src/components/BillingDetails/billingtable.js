import React from "react";
import { Table, Image } from "react-bootstrap";
import Visa from "../AccountsDetails/icons/Visa.png";
import { billingdetailsstlye } from "../../styles/layouts/component/styledcomponent/billingdetailsstyle";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import { useMediaQuery } from "../../components/Header/viewportHook";
import { GetPaymentMethodSelector } from "../../selectors/getpaymentmethodsselector";
import UserInfoSelector from "../../selectors/getuserinformationselector";
export default function Billingtable() {
  const sm = useMediaQuery("(max-width: 576px)");
  const { colors } = __parseThemeSelector();
  const { bgColor, primaryFontColor, primaryTxtColor } = colors;
  const { nextBillingDate,description, purchase_date, endDate, isCancelled, duration } =
    UserInfoSelector();

  const { paymentMtds } = GetPaymentMethodSelector();

  return (
    <>
      <h3 style={billingdetailsstlye.title(sm, primaryTxtColor)}>
        Purchase Details
      </h3>
      <Table
        hover
        style={{ borderTop: "0", marginTop: "1rem", marginBottom: "4rem" }}
        responsive="sm"
      >
        <thead style={{ borderTop: "0" }}>
          <tr>
            <th className="gradient-text" style={billingdetailsstlye.th()}>
              Date
            </th>
            <th className="gradient-text" style={billingdetailsstlye.th()}>
              Description
            </th>
            <th className="gradient-text" style={billingdetailsstlye.th()}>
              Service period
            </th>
            <th className="gradient-text" style={billingdetailsstlye.th()}>
              Payment method
            </th>
            {/* <th className="gradient-text" style={billingdetailsstlye.th()}>
              Subtotal
            </th> */}
            <th className="gradient-text" style={billingdetailsstlye.th()}>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={billingdetailsstlye.td()}>{purchase_date ? purchase_date : '-'}</td>
            <td style={billingdetailsstlye.td()}>{description ? description : '-'}</td>
            <td style={billingdetailsstlye.td()}>
            {purchase_date ? purchase_date : '-'} - {nextBillingDate ? nextBillingDate : '-'}
            </td>
            <td style={billingdetailsstlye.td()}>
              <Image
                src={Visa}
                style={{ paddingRight: "0.25rem" }}
                alt={"Card type"}
              />
              *** *** *** {paymentMtds[0].card.last4}
            </td>
            {/* <td style={billingdetailsstlye.td()}>$399.99</td> */}
            <td style={billingdetailsstlye.td()}>-</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
