import React, { useEffect } from "react";
import HeaderComp from "../../components/Header/HeaderComp";
import Footer from "../../components/Footer/footer";
import SignUp from "../../components/Auth/SignUp";
// import { analyticsService } from "../../services/analyticsapi.service";
import "../../styles/layouts/page/scss/signupstyle.scss";

function SignUpPage() {
  useEffect(() => {
    // analyticsService.addeventanalytics("pageview", "singup");
    return () => { };
  }, []);

  return (
    <>
      <main className="SignUp-background">
        <header aria-label="main header section on sign in page">
          <HeaderComp />
        </header>
        <SignUp />
      </main>
      <Footer />
    </>
  );
}

export default SignUpPage;
