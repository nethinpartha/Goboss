import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { cardetailsstyle } from "./plandetailsstyle";
import CancelMembership from "../CancelMembership/cancelmembership";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";
import { UserInfoSelector } from '../../../selectors/getuserinformationselector';

export default function Plandetailssection() {
  const [showCancelMembershipNav, setUpdateMembershipShowNav] = useState(false);
  const { colors } = __parseThemeSelector();
  const { isCancelled } = UserInfoSelector();

  const { primaryBtnColor } = colors;
  const handleCancelMembership = (value) => {
    setUpdateMembershipShowNav(value);
  };
  return (
    <ListGroup style={{
      borderBottom: "0.5px solid #E4E4E4",
      background: "transparent",
      margin: '1rem 0'
    }}>
      <ListGroup.Item style={cardetailsstyle.background()}
      >
        {!isCancelled ? <div
          className="float-left hover-btn-animation"
          style={{
            fontSize: "15px",
            color: "#ffffff",
            background: `${primaryBtnColor}`,
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => handleCancelMembership(true)}
        >
          Cancel Membership
        </div>
          :
          null
        }
        <>
          <CancelMembership
            showCancelMembershipNav={showCancelMembershipNav}
            setUpdateMembershipShowNav={setUpdateMembershipShowNav}
            handleCancelMembership={handleCancelMembership}
          />
        </>
      </ListGroup.Item>
    </ListGroup>
  );
}
