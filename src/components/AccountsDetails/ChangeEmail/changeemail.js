import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { pathOr } from "ramda";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateEmailAction } from "../../../actions/changeemailaction";
import SideNav from "react-simple-sidenav";
import {
  Form,
  Button,
  Container,
  Row,
  // Image,
  // ListGroup,
} from "react-bootstrap";
import {
  updateEmailFormStyle,
  // successscreen,
} from "../../../styles/layouts/component/styledcomponent/changeemailstyle";
import GlobalAccountDetailsStyle from "../../../styles/global-styles/globalAccountDetailsStyle";

import { rules } from "../../../helpers/rules";
// import checkLogo from "./assets/checkLogo.png";

// const BackToAccount = ({ handleChangeEmail }) => {
//   const history = useHistory();
//   return (
//     <Container style={successscreen.container()}>
//       <ListGroup>
//         <ListGroup.Item style={successscreen.listitem()}>
//           <div style={successscreen.imageIcon()}>
//             <Image src={checkLogo} alt="check icon" />
//           </div>
//           <h1 style={successscreen.title()}>Email Changed</h1>
//           <p style={successscreen.subtitle()}>
//             You can start using your new email
//           </p>
//           <Button
//             style={updateEmailFormStyle.button()}
//             type="submit"
//             onClick={() => handleChangeEmail(false)}
//           >
//             {`BACK TO ACCOUNT`}
//           </Button>
//         </ListGroup.Item>
//       </ListGroup>
//     </Container>
//   );
// };

const Updateemailform = ({
  handleChangeEmail,
  setUpdateEmailShowNav,
  showUpdateEmailNav,
  primaryBtnColor,
  primaryFontColor
}) => {
  const [inputs, setInputs] = useState({
    newemail: "",
    password: "",
  });

  const dispatch = useDispatch();

  const [capturepwd, setcapturepwd] = useState(false);

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    if (values && values.newemail) {
      setInputs({
        ...inputs,
        newemail: values.newemail,
      });
    } else if (values && values.password) {
      setInputs({
        ...inputs,
        password: values.password,
      });
    }
    if (inputs && inputs.password && inputs.newemail) {
      return dispatch(
        updateEmailAction.updateemail(inputs.newemail, inputs.password)
      );
    }
  };

  useEffect(() => {
    if (!inputs.newemail) return;
    setcapturepwd(true);
  }, [inputs.newemail]);
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
          <h1 className="gradient-text hover-btn-animation" style={updateEmailFormStyle.title()}>
            {!capturepwd ? `Update Email` : `Validate your account`}
          </h1>
          <div
            style={updateEmailFormStyle.closeIcon()}
            className={"float-right"}
            onClick={() => {
              handleChangeEmail(false);
              setInputs({
                newemail: "",
                password: "",
              });
              setcapturepwd(false);
            }}
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
            {!capturepwd
              ? `Enter the new email that you wish to change`
              : `Enter password to change your email`}
          </p>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {!capturepwd ? (
            <Form.Group controlId="newemail">
              <Form.Label>{""}</Form.Label>
              <Form.Control
                name="newemail"
                type="email"
                placeholder="Email"
                ref={register({
                  required: "newemail filed is not filled",
                  pattern: {
                    value: pathOr(null, ["validation", "email"])(rules),
                    message: "invalid email address number",
                  },
                })}
                style={updateEmailFormStyle.input()}
              />
              {errors.newemail && (
                <p style={updateEmailFormStyle.errormessage()}>
                  {errors.newemail.message}
                </p>
              )}
            </Form.Group>
          ) : null}
          {capturepwd ? (
            <Form.Group controlId="password">
              <Form.Label>{""}</Form.Label>
              <Form.Control
                name="password"
                type="password"
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
          ) : null}
          <Button style={updateEmailFormStyle.button(primaryBtnColor)} type="submit">
            {capturepwd ? `Confirm` : `Change`}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export const EmailChangeSuccess = () => {
  return <></>;
};

export default function ChangeEmail({
  showUpdateEmailNav,
  setUpdateEmailShowNav,
  handleChangeEmail,
  primaryBtnColor,
  children,
  bgColor,
  primaryFontColor
}) {
  return (
    <SideNav
      navStyle={GlobalAccountDetailsStyle.navbarstyle(bgColor)}
      showNav={showUpdateEmailNav}
      onHideNav={() => {
        setUpdateEmailShowNav(false);
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
      <Updateemailform
        handleChangeEmail={handleChangeEmail}
        showUpdateEmailNav={showUpdateEmailNav}
        setUpdateEmailShowNav={setUpdateEmailShowNav}
        primaryBtnColor={primaryBtnColor}
        primaryFontColor={primaryFontColor}
      />
      {/* {<BackToAccount handleChangeEmail={handleChangeEmail} />} */}
    </SideNav>
  );
}
