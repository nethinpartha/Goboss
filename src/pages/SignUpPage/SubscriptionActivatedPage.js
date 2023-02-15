import React from "react";
import HeaderComp from "../../components/Header/HeaderComp";
import Footer from "../../components/Footer/footer";
import Subscription from "../../components/Auth/SignUp/Subscription";

import "../../styles/layouts/page/scss/signupstyle.scss";

function SubscriptionActivated() {
  return (
    <>
      <main className="Subscription-activated">
        <header aria-label="main header section on subscription activation screen">
          <HeaderComp />
        </header>
        <Subscription />
      </main>
      <Footer />
    </>
  );
}

export default SubscriptionActivated;
