import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { pathOr } from "ramda";
import HeaderComp from "../../components/Header/HeaderComp";
import Footer from "../../components/Footer/footer";
import { useForm } from "react-hook-form";
import { verifyEmailAction } from "../../actions/verifyemail.action";
// import { LoadingSkeltonTemplate } from "../../frontend-library/atoms/loadingSpinner/loadingskeleton";
import LoadingSpinner from "../../frontend-library/atoms/loadingSpinner";
// import { analyticsService } from '../../services/analyticsapi.service';
import { Container, Image, Row } from "react-bootstrap";
import checkLogo from "../../assets/checkLogo.png";
import { showModalComAction } from "../../actions/showmodal.action";
import "../../styles/layouts/page/scss/resetpwdstyle.scss";
import { ModalComponent } from "../../frontend-library/molecules/Modal";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import { getuserinformationAction } from "../../actions/getuserinformation.action";
import GlobalStyleLayout from "../../styles/global-styles/globalStyle";
import { Toaster } from "../../components/Toaster/toaster";

const ResetPwdBtn = ({ primaryBtnColor, showResetPasswordModal }) => {
  return (
    <Row
      className="justify-content-center mt-3"
      onClick={showResetPasswordModal}
    >
      <div className="submitBtnContainer">
        <button
          type="submit"
          autoComplete="off"
          className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
          placeholder="regForm_button_continue"
          style={{ background: `${primaryBtnColor}` }}
        >
          {`Reset Password`}
        </button>
      </div>
    </Row>
  );
};

function VerifyEmail() {
  const [oobCode, setoobCode] = useState("");
  const [mode, setMode] = useState("");
  const { isEmailVerification } = __parseThemeSelector;

  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    password: "",
  });
  const status = useSelector((state) =>
    pathOr(null, ["PwdResetState", "status", "responseCode"])(state)
  );
  const loading = useSelector((state) =>
    pathOr(false, ["PwdResetState", "loading"])(state)
  );
  const message = useSelector((state) =>
    pathOr("", ["PwdResetState", "status", "message"])(state)
  );
  const trials = useSelector((state) =>
    pathOr(0, ["VerifyEmail", "tried"])(state)
  );
  const failure = useSelector((state) =>
    pathOr(false, ["VerifyEmail", "failure"])(state)
  );
  const emailverificationLoading = useSelector((state) =>
    pathOr(false, ["VerifyEmail", "loading"])(state)
  );
  const success = useSelector((state) =>
    pathOr(false, ["VerifyEmail", "success"])(state)
  );
  const loadingTheme = useSelector((state) =>
    pathOr(false, ["ThemeState", "loading"])(state)
  );

  const { colors } = __parseThemeSelector();
  const primaryBtnColor = pathOr("", ["primaryBtnColor"])(colors);
  // On submit event handler
  const onSubmit = (values) => {
    // TODO: Reset password API call
    dispatch(verifyEmailAction.verifyemail(oobCode));
  };

  const handleHomeRedirect = () => {
    dispatch(getuserinformationAction.getuserinformation());
    return history.push("/home");
  };

  useEffect(() => {
    // analyticsService.addeventanalytics('pageview', 'resetpassword');
    return () => {};
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlParams) {
      if (key.includes("mode") && value.includes("resetPassword")) {
        setMode(value);
        dispatch(showModalComAction.ShowModal("ResetPassword"));
        return;
      }
      if (key.includes("oobCode") && trials > 0) {
        setoobCode(value);
        dispatch(verifyEmailAction.verifyemail(value));
      }
    }
    return () => {};
  }, []);

  const showResetPasswordModal = () => {
    dispatch(showModalComAction.ShowModal("ResetPassword"));
  };

  // useEffect(() => {
  //     if (failure === true) {
  //         dispatch(showModalComAction.ShowModal('forgotpassword'));
  //     }
  // }, [failure])

  if (loadingTheme || loading || emailverificationLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <GlobalStyleLayout />
      <main className="resetpassword">
        <header aria-label="main header section for membership page">
          <HeaderComp />
        </header>
        <section style={{ padding: "1rem", margin: "3rem" }}>
          {failure === true ? (
            <>
              <p
                style={{
                  justifyContent: "center",
                  fontSize: "26px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                Email verified Already!
              </p>
              <div className="submitBtnContainer">
                <button
                  type="submit"
                  autoComplete="off"
                  className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                  placeholder="regForm_button_continue"
                  style={{ background: `${primaryBtnColor}` }}
                  onClick={() => history.push("/home")}
                >
                  {`Home`}
                </button>
              </div>
            </>
          ) : mode.includes("resetPassword") ? (
            <ResetPwdBtn
              showResetPasswordModal={showResetPasswordModal}
              primaryBtnColor={primaryBtnColor}
            />
          ) : (
            <Container className="contact-content mt-4">
              <Row className="justify-content-center">
                <Image src={checkLogo} alt="check icon" />
              </Row>
              <Row
                className="justify-content-center mt-3"
                style={{ color: "#ffffff", fontWeight: "600" }}
              >
                Congratulations! Your Email is verified successfully!
              </Row>
              <Row
                className="justify-content-center mt-3"
                onClick={handleHomeRedirect}
              >
                <div className="submitBtnContainer">
                  <button
                    type="submit"
                    autoComplete="off"
                    className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                    placeholder="regForm_button_continue"
                    style={{ background: `${primaryBtnColor}` }}
                  >
                    {`Home`}
                  </button>
                </div>
              </Row>
            </Container>
          )}
        </section>
        <Toaster />
        <ModalComponent />
      </main>
      <Footer />
    </>
  );
}

export default VerifyEmail;
