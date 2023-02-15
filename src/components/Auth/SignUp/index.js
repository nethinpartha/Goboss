import React from "react";
import { pathOr } from "ramda";
import { rules } from "../../../helpers/rules";
import { RecapCha } from "../GoogleRecapcha/Recapcha";
// import { analyticsService } from "../../../services/analyticsapi.service";
import { ButtonLoadingSpinner } from "../../../frontend-library/atoms/loadingSpinner/buttonloadingspinner";
import { useSignUpAuth } from "../../../hooks/useSignUpAuth";
import { SignUpGlobalStyle } from "./signupstyle";
require("./style.scss");

const recapchaSiteKey = process.env.REACT_APP_GCAPTCHA_SITEKEY;

function SignUp() {
  const {
    recapchaAvailable,
    setRecapchaAvailable,
    emailAddress,
    inputs,
    setInputs,
    handleSubmit,
    register,
    errors,
    loading,
    error,
    reRef,
    history,
    showPassWord,
    primaryBtnColor,
    onSubmit,
    setShowPassword,
  } = useSignUpAuth();
  return (
    <>
      <SignUpGlobalStyle />
      <div className={"signupwrapper"}>
        <div className="tentkotta-sans-font-loaded">
          <div className="basicLayout simplicity" dir="ltr">
            <div className="simpleContainer">
              <div className="centerContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="regFormContainer">
                    <div className="stepHeader-container">
                      <div className="stepHeader">
                        {/* <p className="step-indicator">Step 1 of 3</p> */}
                        <p>
                          Just a few more steps and you're done! We hate
                          paperwork, too.
                        </p>
                      </div>
                    </div>
                    <div>
                      <ul className="simpleForm structural ui-grid">
                        <div className="name-fields-wrapper">
                          <li className="tkFormSpace">
                            <div className="tkInput ">
                              <div className="tkInputPlacement">
                                <label
                                  className="input_id hasText"
                                  placeholder="First Name"
                                >
                                  <input
                                    type="text"
                                    name="firstName"
                                    className={`tkTextField`}
                                    style={{ marginRight: "0.5rem" }}
                                    id="id_firstName"
                                    maxLength="50"
                                    minLength="1"
                                    // value={
                                    //   inputs.firstName !== ""
                                    //     ? inputs.firstName
                                    //     : ""
                                    // }
                                    disabled={loading}
                                    onChange={(e) =>
                                      setInputs({
                                        ...inputs,
                                        [e.target.name]: e.target.value,
                                      })
                                    }
                                    ref={register({
                                      required: "first name is Required",
                                      pattern: {
                                        value: pathOr(null, [
                                          "validation",
                                          "name",
                                        ])(rules),
                                        message: "invalid name",
                                      },
                                    })}
                                  />
                                  <label
                                    htmlFor="id_firstName"
                                    className="placeLabel"
                                  >
                                    First Name
                                  </label>
                                </label>
                                {errors.firstName && (
                                  <p
                                    style={{
                                      color: "red",
                                      fontSize: "14px",
                                      textAlign: "left",
                                    }}
                                  >
                                    {errors.firstName.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </li>
                          <li className="tkFormSpace">
                            <div className="tkInput ">
                              <div className="tkInputPlacement">
                                <label
                                  className="input_id hasText"
                                  placeholder="Last Name"
                                >
                                  <input
                                    type="text"
                                    name="lastName"
                                    className={`tkTextField`}
                                    id="id_lastName"
                                    maxLength="50"
                                    minLength="1"
                                    value={
                                      inputs.lastName !== ""
                                        ? inputs.lastName
                                        : ""
                                    }
                                    disabled={loading}
                                    onChange={(e) =>
                                      setInputs({
                                        ...inputs,
                                        [e.target.name]: e.target.value,
                                      })
                                    }
                                    ref={register({
                                      pattern: {
                                        value: pathOr(null, [
                                          "validation",
                                          "name",
                                        ])(rules),
                                        message: "invalid name entered",
                                      },
                                    })}
                                  />
                                  <label
                                    htmlFor="id_lastName"
                                    className="placeLabel"
                                  >
                                    Last Name
                                  </label>
                                </label>
                                {errors.lastName && (
                                  <p
                                    style={{
                                      color: "red",
                                      fontSize: "14px",
                                      textAlign: "left",
                                    }}
                                  >
                                    {errors.lastName.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </li>
                        </div>
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
                                  className={`tkTextField`}
                                  id="id_email"
                                  maxLength="50"
                                  minLength="5"
                                  value={
                                    inputs.email !== "" ? inputs.email : ""
                                  }
                                  disabled={loading}
                                  onChange={(e) =>
                                    setInputs({
                                      ...inputs,
                                      [e.target.name]: e.target.value,
                                    })
                                  }
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
                        <li className="tkFormSpace">
                          <div className="tkInput ">
                            <div className="tkInputPlacement">
                              <label
                                className="input_id hasText"
                                placeholder="mobile number(optional)"
                              >
                                <input
                                  type="text"
                                  disabled={loading}
                                  name="phone"
                                  className={`tkTextField`}
                                  id="id_phone"
                                  maxLength="50"
                                  minLength="5"
                                  ref={register({
                                    // required: "phone number Required",
                                    pattern: {
                                      value: pathOr(null, [
                                        "validation",
                                        "phoneNumber",
                                      ])(rules),
                                      message: "invalid phone number",
                                    },
                                  })}
                                />
                                <label
                                  htmlFor="id_phone"
                                  className="placeLabel"
                                >
                                  Mobile Number (Optional)
                                </label>
                              </label>
                              {errors.phone && (
                                <p
                                  style={{
                                    color: "red",
                                    fontSize: "14px",
                                    textAlign: "left",
                                  }}
                                >
                                  {errors.phone.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </li>
                        <li className="tkFormSpace">
                          <div className="tkInput tkInputOversize">
                            <div className="tkInputPlacement">
                              <label
                                className="input_id hasText"
                                placeholder="password"
                              >
                                <input
                                  disabled={loading}
                                  type={showPassWord ? "text" : "password"}
                                  name="password"
                                  className={`tkTextField`}
                                  id="id_password"
                                  autoComplete="password"
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
                                  className={`placeLabel`}
                                  style={{
                                    display: "flex",
                                    width: "100%",
                                  }}
                                >
                                  <span
                                    style={{ textAlign: "left", width: "50%" }}
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
                                    fontSize: "20px",
                                  }}
                                  onClick={() => setShowPassword(!showPassWord)}
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
                                <p style={{ color: "red", fontSize: "14px" }}>
                                  {errors.password.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {recapchaSiteKey ? (
                    <RecapCha errorRecapcha={error} reRef={reRef} />
                  ) : null}
                  <div className="submitBtnContainer">
                    <button
                      type="submit"
                      autoComplete="off"
                      disabled={loading}
                      className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                      style={{ background: `${primaryBtnColor}` }}
                      placeholder="regForm_button_continue"
                    >
                      {loading ? <ButtonLoadingSpinner /> : `Create Account`}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
