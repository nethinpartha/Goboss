import React, { useState, useEffect } from "react";
import { pathOr } from "ramda";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updatephonenoAction } from "../../../actions/changeephonenoaction";
import { updateProfileInfoAction } from '../../../actions/updateProfileInfo.action';
import { updateUserInfoAction } from '../../../actions/updateuser.action';
import { ButtonLoadingSpinner } from '../../../frontend-library/atoms/loadingSpinner/buttonloadingspinner';

import SideNav from "react-simple-sidenav";
import {
  Form,
  Button,
  Container,
  Row,
  Image,
  ListGroup,
  // Image,
  // ListGroup
} from "react-bootstrap";
import {
  updateEmailFormStyle,
  successscreen,
  activatedevicestyle,
} from "../../../styles/layouts/component/styledcomponent/changephonenostyle";
import { rules } from "../../../helpers/rules";
import GlobalStyleLayout from "../../../styles/global-styles/globalStyle";
import GlobalAccountDetailsStyle from "../../../styles/global-styles/globalAccountDetailsStyle";
import checkLogo from './assets/checkLogo.png';

const BackToAccount = ({ handleChangepassword, handleModalClose, primaryBtnColor }) => {
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

const ChangePhoneNoOtp = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
  };
  return (
    <Container>
      <GlobalStyleLayout />
      <Row style={{ marginLeft: "0.25rem" }}>
        <h1 style={updateEmailFormStyle.title()}>{`Change Phone Number`}</h1>
        <div
          style={updateEmailFormStyle.closeIcon()}
          className={"float-right"}
          onClick={() => {
            // handleUpdatePhoneNumber(false);
            // setInputs({
            //     newphonenumber: "",
            //     password: "",
            // });
            // setcapturepwd(false);
          }}
        >
          X
        </div>
      </Row>
      <Row
        style={{
          marginLeft: "0.25rem",
        }}
      >
        <p style={updateEmailFormStyle.subtitle()}>
          {`Verify your new phone number. Please enter six digit code which you received in +91-8976543210`}
        </p>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row
            style={{
              marginLeft: "0.25rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form.Group
              style={activatedevicestyle.formInput()}
              controlId="forminput1"
            >
              <Form.Label>{""}</Form.Label>
              <Form.Control
                name="forminput1"
                type="number"
                placeholder=""
                style={activatedevicestyle.inputField()}
                maxLength={1}
                ref={register({
                  pattern: {
                    value: "",
                    message: "invalid number",
                  },
                })}
              />
            </Form.Group>
            <Form.Group
              controlId="forminput2"
              style={activatedevicestyle.formInput()}
            >
              <Form.Label>{""}</Form.Label>
              <Form.Control
                name="forminput2"
                type="number"
                placeholder=""
                style={activatedevicestyle.inputField()}
                maxLength={1}
                ref={register({
                  pattern: {
                    value: "",
                    message: "invalid number",
                  },
                })}
              />
            </Form.Group>
            <Form.Group style={activatedevicestyle.formInput()}>
              <Form.Label>{""}</Form.Label>
              <Form.Control
                id="forminput3"
                name="forminput3"
                type="number"
                placeholder=""
                style={activatedevicestyle.inputField()}
                ref={register({
                  pattern: {
                    value: "",
                    message: "invalid number",
                  },
                })}
              />
            </Form.Group>
            <Form.Group style={activatedevicestyle.formInput()}>
              <Form.Label>{""}</Form.Label>
              <Form.Control
                id="forminput4"
                name="forminput4"
                type="number"
                placeholder=""
                style={activatedevicestyle.inputField()}
                maxLength={1}
                ref={register({
                  pattern: {
                    value: "",
                    message: "invalid number",
                  },
                })}
              />
            </Form.Group>
            <Form.Group style={activatedevicestyle.formInput()}>
              <Form.Label>{""}</Form.Label>
              <Form.Control
                type="number"
                id="forminput5"
                name="forminput5"
                placeholder=""
                style={activatedevicestyle.inputField()}
                maxLength={1}
                ref={register({
                  pattern: {
                    value: "",
                    message: "invalid phone number",
                  },
                })}
              />
            </Form.Group>
            <Form.Group style={activatedevicestyle.formInput()}>
              <Form.Label>{""}</Form.Label>
              <Form.Control
                id="forminput6"
                name="forminput6"
                type="number"
                placeholder=""
                style={activatedevicestyle.inputField()}
                maxLength={1}
                ref={register({
                  pattern: {
                    value: "",
                    message: "invalid phone number",
                  },
                })}
              />
            </Form.Group>
          </Row>
          <Button style={activatedevicestyle.button()} type="submit">
            NEXT
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

// const BackToAccount = ({ handleChangeEmail }) => {
//     const history = useHistory();
//     return (
//         <Container style={successscreen.container()}>
//             <ListGroup>
//                 <ListGroup.Item style={successscreen.listitem()}>
//                     <div style={successscreen.imageIcon()}>
//                         <Image src={checkLogo} alt="check icon" />
//                     </div>
//                     <h1 style={successscreen.title()}>
//                         Phone number changed
//                     </h1>
//                     <p style={successscreen.subtitle()}>
//                         You can start using your new phone number
//                     </p>
//                     <Button
//                         style={updateEmailFormStyle.button()}
//                         type='submit'
//                         onClick={() => handleChangeEmail(false)}
//                     >
//                         {`BACK TO ACCOUNT`}
//                     </Button>
//                 </ListGroup.Item>
//             </ListGroup>
//         </Container>
//     )
// };

const Updatephonenoform = ({
  handleUpdatePhoneNumber,
  setUpdatephonenoShowNav,
  showUpdatephonenoNav,
  primaryBtnColor
}) => {
  const [inputs, setInputs] = useState({
    newphonenumber: "",
    // password: "",
  });
  const loading = useSelector(state => pathOr(false, ['updateProfileInfo', 'loading'])(state));
  const dispatch = useDispatch();

  // const [capturepwd, setcapturepwd] = useState(false);

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    if (values?.newphonenumber) {
      setInputs({
        ...inputs,
        newphonenumber: values.newphonenumber,
      });
    }
    if (values?.newphonenumber) {
      let payload = {
        phoneNumber: values.newphonenumber
      }
      dispatch(updateUserInfoAction.updateUserInfo(payload));
      handleUpdatePhoneNumber(false);
      setInputs({
        newphonenumber: "",
        // password: "",
      });
      return;
    }
  };

  useEffect(() => {
    if (!inputs.newphonenumber) return;
    // setcapturepwd(true);
  }, [inputs.newphonenumber]);

  return (
    <>
      <Container>
        <Row style={{ marginLeft: "0.25rem" }}>
          <h1
            className="gradient-text hover-btn-animation"
            style={updateEmailFormStyle.title()}>
            {/* {capturepwd ? `Validate your account` : `Update Phone number`} */}
            {`Update Phone number`}
          </h1>
          <div
            style={updateEmailFormStyle.closeIcon()}
            className={"float-right"}
            onClick={() => {
              handleUpdatePhoneNumber(false);
              setInputs({
                newphonenumber: "",
                // password: "",
              });
              // setcapturepwd(false);
            }}
          >
            X
          </div>
        </Row>
        <Row style={{ marginLeft: "0.25rem" }}>
          <p style={updateEmailFormStyle.subtitle()}>
            {/* {capturepwd
              ? `Enter password to change your phone number`
              : `Enter the new phone number that you wish to change`} */}
            {`Enter the new phone number that you wish to change`}
          </p>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {
            // !capturepwd ? 
            (
              <Form.Group controlId="newphonenumber">
                <Form.Label>{""}</Form.Label>
                <Form.Control
                  name="newphonenumber"
                  type="text"
                  placeholder="Phone Number"
                  autoComplete="off"
                  ref={register({
                    required: "phonenumber filed is not filled",
                    pattern: {
                      value: pathOr(null, ["validation", "phoneNumber"])(rules),
                      message: "invalid phone number",
                    },
                  })}
                  style={updateEmailFormStyle.input()}
                />
                {errors.newphonenumber && (
                  <p style={updateEmailFormStyle.errormessage()}>
                    {errors.newphonenumber.message}
                  </p>
                )}
              </Form.Group>
            )
            //  : null
          }
          {/* {capturepwd ? (
            <Form.Group controlId="password">
              <Form.Label>{""}</Form.Label>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
                placeholder="password"
                maxLength="61"
                minLength="4"
                ref={register({
                  required: "password is not filled",
                  validate: (value) => value.length,
                })}
                onChange={(e) =>
                  setInputs({ ...inputs, [e.target.name]: e.target.value })
                }
                style={updateEmailFormStyle.input()}
              />
              {errors.password && (
                <p style={updateEmailFormStyle.errormessage()}>
                  {errors.password.message}
                </p>
              )}
            </Form.Group>
          ) : null} */}
          <Button style={updateEmailFormStyle.button(primaryBtnColor)} type="submit">
            {/* {capturepwd ? `Confirm` : `Change`} */}
            {loading ? <ButtonLoadingSpinner /> : `Change`}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default function ChangePhoneNo({
  showUpdatephonenoNav,
  handleUpdatePhoneNumber,
  setUpdatephonenoShowNav,
  primaryBtnColor,
  children,
  bgColor
}) {
  const showSuccess = false;
  return (
    <SideNav
      navStyle={GlobalAccountDetailsStyle.navbarstyle(bgColor)}
      showNav={showUpdatephonenoNav}
      onHideNav={() => {
        setUpdatephonenoShowNav(false);
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
      {!showSuccess ? <Updatephonenoform
        handleUpdatePhoneNumber={handleUpdatePhoneNumber}
        showUpdatephonenoNav={showUpdatephonenoNav}
        setUpdatephonenoShowNav={setUpdatephonenoShowNav}
        primaryBtnColor={primaryBtnColor}
      />
        : <BackToAccount handleChangeEmail={handleUpdatePhoneNumber} />}
      {/* <ChangePhoneNoOtp /> */}
    </SideNav>
  );
}
