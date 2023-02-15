import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updatepwdAction } from "../../../actions/changepwdaction";
import SideNav from "react-simple-sidenav";
import { ProfileInfoSelector } from "../../../selectors/profileinfoselector";
import { ButtonLoadingSpinner } from "../../../frontend-library/atoms/loadingSpinner/buttonloadingspinner";
import {
  Form,
  Button,
  Container,
  Row,
  Image,
  ListGroup,
} from "react-bootstrap";
import {
  updateEmailFormStyle,
  successscreen,
} from "../../../styles/layouts/component/styledcomponent/changepasswordstyle";
import GlobalAccountDetailsStyle from "../../../styles/global-styles/globalAccountDetailsStyle";
import { pathOr } from "ramda";
import { rules } from "../../../helpers/rules";
import checkLogo from "../../../assets/checkLogo.png";

const BackToAccount = ({
  handleChangepassword,
  handleModalClose,
  primaryBtnColor,
}) => {
  // const history = useHistory();
  return (
    <Container style={successscreen.container()}>
      <ListGroup>
        <ListGroup.Item style={successscreen.listitem()}>
          <div style={successscreen.imageIcon()}>
            <Image src={checkLogo} alt="check icon" />
          </div>
          <h1 style={successscreen.title()}>Password Changed</h1>
          <p style={successscreen.subtitle()}>
            You can start using your new password
          </p>
          <Button
            style={updateEmailFormStyle.button(primaryBtnColor)}
            type="submit"
            onClick={() => {
              handleChangepassword(false);
              handleModalClose();
            }}
          >
            {`BACK TO ACCOUNT`}
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

const Updatepasswordform = ({
  handleChangepassword,
  showUpdatepasswordNav,
  setUpdatepasswordShowNav,
  setShowNewPwdPassword,
  setShowOldPwdPassword,
  setShowCOnfPwdPassword,
  handleSubmit,
  inputs,
  register,
  errors,
  setInputs,
  showNewPwd,
  showOldPwd,
  showConfPwd,
  onSubmit,
  handleModalClose,
  pwdMisMatch,
  primaryBtnColor,
  loading,
}) => {
  return (
    <>
      <Container>
        <Row
          style={{
            marginLeft: "0.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="gradient-text" style={updateEmailFormStyle.title()}>
            Update Password
          </h1>
          <div
            style={updateEmailFormStyle.closeIcon()}
            className={"float-right"}
            onClick={handleModalClose}
          >
            X
          </div>
        </Row>
        <Row
          style={{
            marginLeft: "0.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={updateEmailFormStyle.subtitle()}>
            if you update password, you will be logged out of all devices.
          </p>
          {/* <p style={updateEmailFormStyle.subtitle()}>Enter your new password</p> */}
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            controlId="currentpassword"
            style={updateEmailFormStyle.formGroup()}
          >
            <Form.Label>{""}</Form.Label>
            <Form.Control
              name="currentpassword"
              type={showOldPwd ? "text" : "password"}
              placeholder="password"
              ref={register({
                required: "password is not filled",
                validate: (value) => value.length,
              })}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
              value={inputs.currentpassword}
              style={updateEmailFormStyle.input()}
            />
            <span
              style={updateEmailFormStyle.showPwd()}
              onClick={() => setShowOldPwdPassword(!showOldPwd)}
            >
              <i
                className={showOldPwd ? "bi bi-eye-slash" : "bi-eye"}
                id="togglePassword"
              ></i>
            </span>
            {errors.currentpassword && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.currentpassword.message}
              </p>
            )}
          </Form.Group>
          <Form.Group
            style={updateEmailFormStyle.formGroup()}
            controlId="newpassword"
          >
            <Form.Label>{""}</Form.Label>
            <Form.Control
              name="newpassword"
              type={showNewPwd ? "text" : "password"}
              placeholder="new password"
              maxLength="61"
              minLength="1"
              ref={register({
                required: "newpassword filed is not filled",
                validate: (value) => value.length,
              })}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  [e.target.name]: e.target.value,
                })
              }
              value={inputs.newpassword}
              style={updateEmailFormStyle.input()}
            />
            <span
              style={updateEmailFormStyle.showPwd()}
              onClick={() => setShowNewPwdPassword(!showNewPwd)}
            >
              <i
                className={showNewPwd ? "bi bi-eye-slash" : "bi-eye"}
                id="togglePassword"
              ></i>
            </span>
            {errors.newpassword && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.newpassword.message}
              </p>
            )}
          </Form.Group>
          <Form.Group
            style={updateEmailFormStyle.formGroup()}
            controlId="confirmpassword"
          >
            <Form.Label>{""}</Form.Label>
            <Form.Control
              name="confirmpassword"
              type="password"
              type={showConfPwd ? "text" : "password"}
              placeholder="confirm password"
              minLength="1"
              ref={register({
                required: "newpassword filed is not filled",
                validate: (value) => value.length,
              })}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
              value={inputs.confirmpassword}
              style={updateEmailFormStyle.input()}
            />
            <span
              style={updateEmailFormStyle.showPwd()}
              onClick={() => setShowCOnfPwdPassword(!showConfPwd)}
            >
              <i
                className={showConfPwd ? "bi bi-eye-slash" : "bi-eye"}
                id="togglePassword"
              ></i>
            </span>
            {errors.confirmpassword && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.confirmpassword.message}
              </p>
            )}
            {pwdMisMatch && (
              <p style={updateEmailFormStyle.errormessage()}>{pwdMisMatch}</p>
            )}
          </Form.Group>
          <Button
            style={updateEmailFormStyle.button(primaryBtnColor)}
            disabled={loading}
            type="submit"
          >
            {loading ? <ButtonLoadingSpinner /> : `Change`}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default function ChangePassword({
  showUpdatepasswordNav,
  setUpdatepasswordShowNav,
  handleChangepassword,
  primaryBtnColor,
  bgColor,
  children,
}) {
  const [inputs, setInputs] = useState({
    newpassword: "",
    currentpassword: "",
    confirmpassword: "",
  });

  const dispatch = useDispatch();
  const [capturepwd, setcapturepwd] = useState(false);

  const { handleSubmit, register, errors } = useForm();
  const { email } = ProfileInfoSelector();
  const [showNewPwd, setShowNewPwdPassword] = useState(false);
  const [showOldPwd, setShowOldPwdPassword] = useState(false);
  const [showConfPwd, setShowCOnfPwdPassword] = useState(false);
  const showSuccess = useSelector((state) =>
    pathOr("", ["ChangePassword", "showSuccess"])(state)
  );
  const loading = useSelector((state) =>
    pathOr("", ["ChangePassword", "loading"])(state)
  );
  const [pwdMisMatch, setPwdMisMatch] = useState("");

  const onSubmit = (values) => {
    if (values) {
      setInputs({
        ...inputs,
        newpassword: values.newpassword,
        currentpassword: values.currentpassword,
        confirmpassword: values.confirmpassword,
      });
      if (
        email &&
        values.currentpassword &&
        values.newpassword &&
        values.confirmpassword
      ) {
        if (values.currentpassword === values.newpassword) {
          setPwdMisMatch("new password and old password must be diffrent");
          return;
        }
        if (values.confirmpassword === values.newpassword) {
          return dispatch(
            updatepwdAction.updatepwd({
              emailid: email,
              oldPassword: inputs.currentpassword,
              newPassword: inputs.newpassword,
            })
          );
        } else if (values.confirmpassword !== values.newpassword) {
          setPwdMisMatch("new password and confirm password must be same");
        }
      }
    }
  };

  const handleModalClose = () => {
    handleChangepassword(false);
    setInputs({
      ...inputs,
      newpassword: "",
      currentpassword: "",
      confirmpassword: "",
    });
    setcapturepwd(false);
    setShowNewPwdPassword(false);
    setShowOldPwdPassword(false);
    setShowCOnfPwdPassword(false);
    dispatch({ type: "UPDATE_PASSWORD_ADDRESS_RESET" });
  };

  useEffect(() => {
    if (!inputs.currentpassword) return;
    setcapturepwd(true);
  }, [inputs.currentpassword]);

  return (
    <SideNav
      navStyle={GlobalAccountDetailsStyle.navbarstyle(bgColor)}
      showNav={showUpdatepasswordNav}
      onHideNav={() => {
        setUpdatepasswordShowNav(false);
      }}
      titleStyle={{
        backgroundColor: bgColor,
      }}
      itemStyle={{
        backgroundColor: bgColor,
        padding: "0 2%",
      }}
      openFromRight={true}
      itemHoverStyle={{
        backgroundColor: bgColor,
      }}
    >
      {!showSuccess ? (
        <Updatepasswordform
          handleChangepassword={handleChangepassword}
          showUpdatepasswordNav={showUpdatepasswordNav}
          setUpdatepasswordShowNav={setUpdatepasswordShowNav}
          handleSubmit={handleSubmit}
          inputs={inputs}
          register={register}
          errors={errors}
          setInputs={setInputs}
          showNewPwd={showNewPwd}
          showOldPwd={showOldPwd}
          showConfPwd={showConfPwd}
          onSubmit={onSubmit}
          handleModalClose={handleModalClose}
          setShowOldPwdPassword={setShowOldPwdPassword}
          setShowNewPwdPassword={setShowNewPwdPassword}
          setShowCOnfPwdPassword={setShowCOnfPwdPassword}
          pwdMisMatch={pwdMisMatch}
          loading={loading}
          primaryBtnColor={primaryBtnColor}
        />
      ) : (
        <BackToAccount
          handleChangepassword={handleChangepassword}
          handleModalClose={handleModalClose}
          primaryBtnColor={primaryBtnColor}
        />
      )}
    </SideNav>
  );
}
