import React from "react";
import { pathOr } from "ramda";
import { rules } from "../../../helpers/rules";
import { SignInGlobalStyle } from "./signinstyle";
import { ButtonLoadingSpinner } from "../../../frontend-library/atoms/loadingSpinner/buttonloadingspinner";
import { RecapCha } from "../GoogleRecapcha/Recapcha";
import { SocialLoginSection } from "../SocialSigns/socialsignin";
import { useSignInAuth } from "../../../hooks/useSignInAuth";
import { AuthMessage } from "./AuthMessage";
import "./style.scss";

const recapchaSiteKey = process.env.REACT_APP_GCAPTCHA_SITEKEY;

function SignIn() {
  const {
    history,
    handleForgotPassword,
    inputs,
    reRef,
    isExists,
    onSubmit,
    primaryBtnColor,
    errorRecapcha,
    loading,
    socialSignIn,
    emailverificationdone,
    emailverificationpending,
    facebookAuthAvailable,
    googleAuthEnabled,
    setgoogleAuthEnabled,
    handleSubmit,
    register,
    errors,
    showPassWord,
    setShowPassword,
    currentpagetoshow,
    isSocialLogin,
    incorrectPassword,
    isVerified,
    message,
    setInputs,
    showEmailPreventiveMsg,
    socialLoginError,
    isEmailVerification,
    emailAddress,
  } = useSignInAuth();
  return (
    <div>
      <SignInGlobalStyle />
      <div className="tentkotta-sans-font-loaded">
        <div className="basicLayout simplicity" dir="ltr">
          <div className="simpleContainer">
            <div className="centerContainer">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="regFormContainer">
                  <div className="stepHeader-container">
                    <div className="stepHeader">
                      <p>
                        <AuthMessage
                          isExists={isExists}
                          isVerified={isVerified}
                          message={message}
                          isSocialLogin={isSocialLogin}
                          showEmailPreventiveMsg={showEmailPreventiveMsg}
                          socialLoginError={socialLoginError}
                          emailAddress={emailAddress}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                {!emailverificationpending ? (
                  <>
                    <div className="regFormContainer">
                      <ul className="simpleForm structural ui-grid">
                        <li className="tkFormSpace">
                          <div className="tkInput ">
                            <div className="tkInputPlacement">
                              <label
                                className="input_id hasText"
                                placeholder="email"
                              >
                                <input
                                  type="email"
                                  name="email"
                                  value={
                                    inputs.email !== "" ? inputs.email : ""
                                  }
                                  disabled={loading}
                                  className={`tkTextField`}
                                  onChange={(e) => {
                                    setInputs({
                                      ...inputs,
                                      [e.target.name]: e.target.value,
                                    });
                                  }}
                                  id="id_email"
                                  maxLength="50"
                                  minLength="5"
                                  ref={register({
                                    required: "E-mail ID is Required",
                                    pattern: {
                                      value: pathOr(null, [
                                        "validation",
                                        "email",
                                      ])(rules),
                                      message: "invalid email address",
                                    },
                                  })}
                                />
                                <label
                                  htmlFor="id_email"
                                  className="placeLabel"
                                >
                                  Email
                                </label>
                              </label>
                              {errors.email && (
                                <p
                                  style={{
                                    color: "red",
                                    fontSize: "14px",
                                    textAlign: "left",
                                  }}
                                >
                                  {errors.email.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </li>
                        {emailverificationdone === true &&
                        isSocialLogin === false ? (
                          <li className="tkFormSpace">
                            <div className="tkInput tkInputOversize">
                              <div className="tkInputPlacement">
                                <label
                                  className="input_id"
                                  placeholder="password"
                                >
                                  <input
                                    type={showPassWord ? "text" : "password"}
                                    name="password"
                                    className={`tkTextField`}
                                    id="id_password"
                                    autoComplete="password"
                                    disabled={loading}
                                    maxLength="61"
                                    minLength="4"
                                    dir=""
                                    ref={register({
                                      required: "password is not filled",
                                      validate: (value) => value.length,
                                    })}
                                  />
                                  <label
                                    htmlFor="id_password"
                                    className={"placeLabel"}
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                    }}
                                  >
                                    <span
                                      style={{
                                        textAlign: "left",
                                        width: "50%",
                                      }}
                                    >
                                      Password
                                    </span>
                                  </label>
                                  <div
                                    style={{
                                      position: "absolute",
                                      textAlign: "right",
                                      right: "12px",
                                      top: "1rem",
                                    }}
                                    onClick={() =>
                                      setShowPassword(!showPassWord)
                                    }
                                  >
                                    <i
                                      style={{ color: "white" }}
                                      className={
                                        showPassWord
                                          ? "bi bi-eye-slash"
                                          : "bi-eye"
                                      }
                                      id="togglePassword"
                                    ></i>
                                  </div>
                                </label>
                                {errors.password && (
                                  <p
                                    style={{
                                      color: "red",
                                      fontSize: "14px",
                                      textAlign: "left",
                                    }}
                                  >
                                    {errors.password.message}
                                  </p>
                                )}
                                {incorrectPassword && (
                                  <p
                                    style={{
                                      color: "red",
                                      fontSize: "14px",
                                      textAlign: "left",
                                    }}
                                  >
                                    {incorrectPassword}
                                  </p>
                                )}
                              </div>
                            </div>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                    {recapchaSiteKey &&
                    emailverificationdone === true &&
                    isSocialLogin === false ? (
                      <RecapCha
                        emailverificationdone={emailverificationdone}
                        isSocialLogin={isSocialLogin}
                        errorRecapcha={errorRecapcha}
                        reRef={reRef}
                      />
                    ) : null}
                    <div className="submitBtnContainer">
                      <button
                        type="submit"
                        disabled={loading}
                        autoComplete="off"
                        className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                        placeholder="regForm_button_continue"
                        style={{ background: `${primaryBtnColor}` }}
                      >
                        {loading ? (
                          <ButtonLoadingSpinner />
                        ) : isExists && isSocialLogin ? (
                          "Sign In"
                        ) : (
                          `Continue`
                        )}
                      </button>
                    </div>
                    {emailverificationdone === true &&
                    isSocialLogin === false ? (
                      <div className="forgotpassword">
                        <span
                          alt="forgot password"
                          className="link-forgot-password"
                          onClick={() => handleForgotPassword()}
                        >
                          Forgot Password ?
                        </span>
                      </div>
                    ) : null}
                  </>
                ) : null}
              </form>
              <SocialLoginSection
                socialSignIn={socialSignIn}
                facebookAuthAvailable={facebookAuthAvailable}
                currentpagetoshow={currentpagetoshow}
                emailverificationdone={emailverificationdone}
                isExists={isExists}
                googleAuthEnabled={googleAuthEnabled}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
