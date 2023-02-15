import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pathOr } from "ramda";
import { useForm } from "react-hook-form";
import { cancelsubscription } from "../../../actions/cancelmembershipaction";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";
import SideNav from "react-simple-sidenav";
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
} from "../../../styles/layouts/component/styledcomponent/cancelmembershipstyle";
import GlobalAccountDetailsStyle from "../../../styles/global-styles/globalAccountDetailsStyle";
import { getCancellationReasonAction } from "../../../actions/getcancellationreason.action";
import { GetCancellationReasons } from "../../../selectors/getcancellationreasonSelector";

import { rules } from "../../../helpers/rules";
import checkLogo from "../ChangeEmail/assets/checkLogo.png";

const BackToAccount = ({
  handleCancelMembership,
  primaryBtnColor,
  primaryFontColor,
}) => {
  return (
    <Container style={successscreen.container()}>
      <ListGroup>
        <ListGroup.Item style={successscreen.listitem()}>
          <div style={successscreen.imageIcon(primaryFontColor)}>
            <Image src={checkLogo} alt="check icon" />
          </div>
          <h1 style={successscreen.title(primaryFontColor)}>
            Subscription Cancelled
          </h1>
          <p style={successscreen.subtitle(primaryFontColor)}>
            Subscription will be active till end date!
          </p>
          <Button
            style={updateEmailFormStyle.button(primaryBtnColor)}
            type="submit"
            onClick={() => handleCancelMembership(false)}
          >
            {`BACK TO ACCOUNT`}
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

const Cancelmembershipform = ({
  handleCancelMembership,
  showCancelMembershipNav,
  setUpdateMembershipShowNav,
  primaryBtnColor,
  primaryFontColor,
}) => {
  const [inputs, setInputs] = useState({
    briefinfo: "",
    cancellationreason: "",
  });
  const { loading, reasons } = GetCancellationReasons();
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    if (values) {
      setInputs({
        ...inputs,
        briefinfo: values.briefinfo,
        cancellationreason: values.cancellationreason,
      });
      return dispatch(
        cancelsubscription.cancelsubscriptionrequest(
          inputs.briefinfo,
          inputs.cancellationreason
        )
      );
    }
  };

  useEffect(() => {
    if (reasons.length === 0) {
      dispatch(getCancellationReasonAction.getCancellationReason());
    }
  }, []);

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
          <h1 style={updateEmailFormStyle.title(primaryFontColor)}>
            Cancel Membership
          </h1>
          <div
            style={updateEmailFormStyle.closeIcon(primaryFontColor)}
            className={"float-right"}
            onClick={() => {
              setUpdateMembershipShowNav(false);
              setInputs({
                briefinfo: "",
                cancellationreason: "",
              });
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
          <p style={updateEmailFormStyle.subtitle(primaryFontColor)}>
            Cancel your membership by providing us few details
          </p>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="cancellationreason">
            <select
              style={{
                width: "100%",
                color: "#585858",
                fontSize: "15px",
                padding: "0.5rem 0.25rem",
              }}
              value={inputs.cancellationreason}
              onChange={(e) =>
                setInputs({ ...inputs, cancellationreason: e.target.value })
              }
            >
              <option
                value="Select Cancellation Reason"
                key="cancelReason"
                style={{
                  padding: "0.5rem",
                  color: primaryFontColor,
                  background: "#35414A",
                  borderBottom: "1px solid #cccc",
                }}
              >
                Select Cancellation Reason
              </option>
              {reasons.length > 0 &&
                reasons.map((reason) => (
                  <option
                    value={reason.title}
                    key={reason.id}
                    style={{
                      padding: "0.5rem",
                      color: primaryFontColor,
                      background: "#35414A",
                      borderBottom: "1px solid #cccc",
                    }}
                  >
                    {reason.title}
                  </option>
                ))}
            </select>
            {/* <DropdownButton
                            title="Select Cancellation Reason"
                            name="cancellationreason"
                            onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}>
                            <Dropdown.Item eventKey="Streaming issue">Streaming issue</Dropdown.Item>
                            <Dropdown.Item eventKey="Content not up to mark">Content not up to mark</Dropdown.Item>
                            <Dropdown.Item eventKey="Moving out of state">Moving out of state</Dropdown.Item>
                        </DropdownButton> */}
            {errors.cancellationreason && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.cancellationreason.message}
              </p>
            )}
          </Form.Group>
          <Form.Group controlId="briefinfo">
            <Form.Label>{""}</Form.Label>
            <Form.Control
              name="briefinfo"
              as="textarea"
              placeholder="Please provide a brief message and your contact #"
              maxLength="61"
              minLength="4"
              ref={register({
                required: "briefinfo filed is not filled",
                validate: (value) => value.length,
              })}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
              style={updateEmailFormStyle.input()}
            />
            {errors.briefinfo && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.briefinfo.message}
              </p>
            )}
          </Form.Group>
          <Button
            style={updateEmailFormStyle.button(primaryBtnColor)}
            type="submit"
          >
            {`Submit Cancellation Request`}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default function CancelMembership({
  showCancelMembershipNav,
  setUpdateMembershipShowNav,
  handleCancelMembership,
  children,
}) {
  const showSuccess = useSelector((state) =>
    pathOr("", ["CancelMembership", "showSuccess"])(state)
  );
  const { colors } = __parseThemeSelector();
  const { bgColor, primaryBtnColor, primaryFontColor } = colors;
  return (
    <SideNav
      navStyle={GlobalAccountDetailsStyle.navbarstyle(bgColor)}
      showNav={showCancelMembershipNav}
      onHideNav={() => {
        setUpdateMembershipShowNav(false);
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
        <Cancelmembershipform
          handleCancelMembership={handleCancelMembership}
          showCancelMembershipNav={showCancelMembershipNav}
          setUpdateMembershipShowNav={setUpdateMembershipShowNav}
          primaryBtnColor={primaryBtnColor}
          primaryFontColor={primaryFontColor}
        />
      ) : (
        <BackToAccount
          handleCancelMembership={handleCancelMembership}
          primaryBtnColor={primaryBtnColor}
          primaryFontColor={primaryFontColor}
        />
      )}
    </SideNav>
  );
}
