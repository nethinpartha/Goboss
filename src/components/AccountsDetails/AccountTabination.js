import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Accountdetails from "./accountdetails";
import LoadingSpinner from "../../frontend-library/atoms/loadingSpinner";
import Billingdetailssection from "../BillingDetails/billingdetailssection";
import ProfileInfoSelector from "../../selectors/profileinfoselector";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import Accountdetailsglobalstyle from "./accountdetailsglobalstyle";
import SettingsTabination from "./SettingsTabination";

const AccountTabination = () => {
  const [key, setKey] = useState("profile");
  const { firstName, loading } = ProfileInfoSelector();
  const { colors, isSubscription, isEmailVerification } =
    __parseThemeSelector();
  const { primaryTxtColor } = colors;
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Accountdetailsglobalstyle />
      <h1 className="sacromento" style={{ marginBottom: "1rem" }}>
        Welcome,
        <span className="gradient-text sacromento">
          {" "}
          {firstName ? firstName : "Stranger"}
        </span>{" "}
        !
      </h1>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        fill
      >
        <Tab eventKey="profile" title="Profile">
          {key === "profile" ? <Accountdetails /> : null}
        </Tab>
        {isSubscription && isEmailVerification === true ? (
          <Tab eventKey="billing" title="Billing">
            {key === "billing" ? <Billingdetailssection /> : null}
          </Tab>
        ) : (
          <></>
        )}
        <Tab eventKey="settings" title="Settings">
          {key === "settings" ? <SettingsTabination /> : null}
        </Tab>
      </Tabs>
    </>
  );
};

export default AccountTabination;
