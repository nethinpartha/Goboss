import React, { useState } from "react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { ListGroup } from "react-bootstrap";
import { membershipstyle } from "../../../styles/layouts/component/styledcomponent/membershipstyle";
import { billingdetailstyle } from "../../../styles/layouts/component/styledcomponent/billinddetailstyle";
import "../../../styles/layouts/component/scss/billinddetailstyle.scss";
import { getCookie } from "../../../helpers/authentication";
import ChangeEmail from "../ChangeEmail/changeemail";
import ChangePassword from "../ChangePassword/changepassword";
import Updatephonenoform from "../ChangePhoneNumber/ChangePhoneNo";
import UserInfoSelector from "../../../selectors/getuserinformationselector";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";

export default function Billingdetails() {
  const [showUpdateEmailNav, setUpdateEmailShowNav] = useState(false);
  const [showUpdatepasswordNav, setUpdatepasswordShowNav] = useState(false);
  const [showUpdatephonenoNav, setUpdatephonenoShowNav] = useState(false);

  const usernameCookie = getCookie("username");
  const { email, phoneNumber } = UserInfoSelector();
  const { colors, isEmailVerification } = __parseThemeSelector();
  const { primaryTxtColor, primaryBtnColor, bgColor, primaryFontColor } =
    colors;
  const handleChangeEmail = (value) => {
    setUpdateEmailShowNav(value);
  };

  const handleChangepassword = (value) => {
    setUpdatepasswordShowNav(value);
  };
  const handleUpdatePhoneNumber = (value) => {
    setUpdatephonenoShowNav(value);
  };

  return (
    <ListGroup style={billingdetailstyle.listgroup()}>
      {email && (
        <ListGroup.Item
          className="list-setup"
          style={{
            background: "transparent",
            padding: "0.5rem 1rem 1rem 0.5rem",
            border: "none",
          }}
        >
          <div className="leftsection">
            {email ? email : ""}
            {/* <div
              className="rightsection gradient-text"
              onClick={() => handleChangeEmail(true)}
            >
              Change Email
            </div> */}
          </div>
          <>
            <ChangeEmail
              showUpdateEmailNav={showUpdateEmailNav}
              setUpdateEmailShowNav={setUpdateEmailShowNav}
              handleChangeEmail={handleChangeEmail}
              primaryBtnColor={primaryBtnColor}
              bgColor={bgColor}
              primaryFontColor={primaryFontColor}
            />
          </>
        </ListGroup.Item>
      )}
      <ListGroup.Item
        className="list-setup"
        style={{
          background: "transparent",
          padding: "0.5rem 1rem 1rem 0.5rem",
          borderBottom: "none",
        }}
      >
        <div className="leftsection">
          Password: *********
          <div
            className="rightsection gradient-text"
            onClick={() => handleChangepassword(true)}
          >
            Change Password
          </div>
        </div>

        <>
          <ChangePassword
            showUpdatepasswordNav={showUpdatepasswordNav}
            setUpdatepasswordShowNav={setUpdatepasswordShowNav}
            handleChangepassword={handleChangepassword}
            primaryBtnColor={primaryBtnColor}
            bgColor={bgColor}
          />
        </>
      </ListGroup.Item>
      <ListGroup.Item
        className="list-setup"
        style={{
          background: "transparent",
          padding: "0.5rem 1rem 1rem 0.5rem",
          border: "none",
        }}
      >
        <div className="leftsection-phone">
          Phone: {phoneNumber ? phoneNumber : "Not Registered"}
          <div
            className="rightsection-phone gradient-text"
            onClick={() => handleUpdatePhoneNumber(true)}
          >
            {phoneNumber ? "Change phone number" : "Add Number"}
          </div>
        </div>

        <>
          <Updatephonenoform
            showUpdatephonenoNav={showUpdatephonenoNav}
            handleUpdatePhoneNumber={handleUpdatePhoneNumber}
            setUpdatephonenoShowNav={setUpdatephonenoShowNav}
            primaryBtnColor={primaryBtnColor}
            bgColor={bgColor}
          />
        </>
      </ListGroup.Item>
    </ListGroup>
  );
}
