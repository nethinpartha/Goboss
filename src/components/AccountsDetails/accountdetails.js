import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "./Title/title";
import Membershipdetails from "./Membershipdetails/Membershipdetails";
import { accountdetailsstyle } from "./accountdetailsstyle";
import { useMediaQuery } from "../../components/Header/viewportHook";
import { AlertModal } from "../../frontend-library/atoms/alertmodal";
import { useMembershipDetails } from '../../hooks/useMembershipDetails';

export default function Accountdetails() {
  const sm = useMediaQuery("(max-width: 576px)");
  const { handleAcceptanceMem } = useMembershipDetails();
  return (
    <>
      <Row>
        <Title title={"Account Information"} />
      </Row>
      <Row style={{ marginTop: "0rem", marginBottom: "-3rem" }}>
        <Col
          style={{
            ...accountdetailsstyle.background(sm),
            ...accountdetailsstyle.membership(sm),
          }}
        >
          <Membershipdetails />
        </Col>
      </Row>
      <AlertModal
        handleAcceptance={handleAcceptanceMem}
      />
    </>
  );
}
