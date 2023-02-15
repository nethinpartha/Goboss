import React from "react";
import { pathOr } from "ramda";
import { rules } from "../../../helpers/rules";
import { ButtonLoadingSpinner } from "../../../frontend-library/atoms/loadingSpinner/buttonloadingspinner";
import { ForgotPasswordGlobalStyle } from "./forgotpasswordformstyle";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";
import { useForgotPwdAuth } from "../../../hooks/useForgotPwdAuth";
require("../SignIn/style.scss");

function ForgotPassword() {
  const {
    inputs,
    setInputs,
    loading,
    emailAddressEntered,
    emailAddress,
    forgotPasswordEmailStatus,
    resetemailsent,
    primaryBtnColor,
    forgotPasswordEmailStatusMessage,
    onSubmit,
    register,
    errors,
    handleSubmit,
  } = useForgotPwdAuth();
  return (
    <>
      <ForgotPasswordGlobalStyle />
      <div className={"forgotpasswordwrapper"}>
        <div className="tentkotta-sans-font-loaded">
          <div className="basicLayout simplicity" dir="ltr">
            <div className="simpleContainer">
              <div className="centerContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="regFormContainer">
                    <div className="stepHeader-container">
                      <div className="stepHeader">
                        {forgotPasswordEmailStatus === 200 && (
                          <p>
                            {`We have sent a reset password link to your e-mail address. 
                                                        ${forgotPasswordEmailStatusMessage}`}
                          </p>
                        )}
                        {!resetemailsent && (
                          <p>
                            {"Enter your email address to reset the password."}
                          </p>
                        )}
                      </div>
                    </div>
                    {!resetemailsent && (
                      <div>
                        <ul className="simpleForm structural ui-grid">
                          <li className="tkFormSpace">
                            <div className="tkInput ">
                              <div className="tkInputPlacement">
                                <label className="input_id" placeholder="email">
                                  <input
                                    type="email"
                                    name="email"
                                    value={inputs.email}
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
                                      display: "block",
                                    }}
                                  >
                                    {errors.email.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  {!resetemailsent && (
                    <div className="submitBtnContainer">
                      <button
                        disabled={loading}
                        type="submit"
                        autoComplete="off"
                        className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                        placeholder="regForm_button_continue"
                        style={{ background: `${primaryBtnColor}` }}
                      >
                        {loading ? <ButtonLoadingSpinner /> : `SUBMIT`}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
