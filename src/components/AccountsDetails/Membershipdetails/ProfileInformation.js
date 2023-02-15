import React from "react";
import { pathOr } from "ramda";
import { ListGroup, Form, Dropdown, Button } from "react-bootstrap";
import { addOrUpdateCard } from "../../../styles/layouts/component/styledcomponent/addOrUpdateCard";
import { rules } from "../../../helpers/rules";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";
import { useProfileInfo } from "../../../hooks/useProfileInfo";
import "../../../styles/layouts/component/scss/addOrUpdateCard.scss";
const GenderDropDownList = ({
  gender,
  handleGenderSelect,
  selectedGender,
  primaryTxtColor,
}) => {
  return (
    <Dropdown className="dropdown-wrapper">
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className="dropdown"
      >
        {selectedGender}
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        {gender &&
          gender.map((genderVal) => (
            <Dropdown.Item
              eventKey={genderVal.id}
              key={genderVal.id}
              onSelect={(eventKey, event) =>
                handleGenderSelect(eventKey, event)
              }
            >
              {genderVal.value}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const ProfileInformation = ({ showCard = true }) => {
  const {
    setEnableUpdate,
    profileInfoValue,
    handleChange,
    handleUpdate,
    handleGenderSelect,
    primaryBtnColor,
    enableUpdate,
    handleSubmit,
    register,
    gender,
    errors,
    selectedGender,
    primaryTxtColor,
    bgColor,
  } = useProfileInfo();

  return showCard ? (
    <>
      <h1 style={{ display: "flex", marginTop: "3rem" }}>
        <div
          style={{
            textAlign: "left",
            width: "50%",
            fontFamily: "Inter, sans-serif",
            display: "flex",
            alignItems: "center",
          }}
          className="profile-info-setup"
        >
          Profile Information
        </div>
        <div
          className="update-btn-setup"
          style={{
            textAlign: "right",
            width: "50%",
            fontFamily: "Inter, sans-serif",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer",
          }}
        >
          <Button
            // onClick={() => setShowCard(false)}
            variant="link"
            style={{
              border: "none",
              fontFamily: "Inter,sans-serif",
              textDecoration: "none",
              textAlign: "right",
            }}
            disabled={enableUpdate}
            onClick={handleUpdate}
          >
            <div className="update-btn">
              <span className="gradient-text">
                Update
              </span>
            </div>
          </Button>
        </div>
      </h1>
      <ListGroup>
        <ListGroup.Item style={{ ...addOrUpdateCard.groupitem(bgColor) }}>
          <Form>
            <div style={{ display: "flex" }}>
              <Form.Group
                controlId="firstName"
                style={{ width: "50%", marginRight: "1rem" }}
              >
                <Form.Label

                  style={addOrUpdateCard.label()}
                >
                  <span
                    className="gradient-text"
                  >First Name</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  style={{ ...addOrUpdateCard.formControl(primaryTxtColor) }}
                  ref={register({
                    pattern: {
                      value: pathOr(null, ["validation", "name"])(rules),
                      message: "invalid name",
                    },
                  })}
                  value={profileInfoValue.firstName}
                  onChange={(e) => handleChange(e)}
                />
                {errors.password && (
                  <p style={addOrUpdateCard.error()}>
                    {errors.firstName.message}
                  </p>
                )}
              </Form.Group>
              <Form.Group controlId="lastName" style={{ width: "50%" }}>
                <Form.Label
                  style={addOrUpdateCard.label()}
                >
                  <span
                    className="gradient-text"
                  >Last Name</span>
                </Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Last Name"
                  name="lastName"
                  style={{ ...addOrUpdateCard.formControl(primaryTxtColor) }}
                  ref={register({
                    required: "Last Name is not entered",
                    pattern: {
                      value: pathOr(null, ["validation", "name"])(rules),
                      message: "invalid name",
                    },
                  })}
                  onChange={(e) => handleChange(e)}
                  value={profileInfoValue.lastName}
                />
                {errors.email && (
                  <p style={addOrUpdateCard.error()}>
                    {errors.lastName.message}
                  </p>
                )}
              </Form.Group>
            </div>
            {/* <Form.Group controlId="age">
              <Form.Label
                style={{ ...addOrUpdateCard.label(), width: "100%" }}
              >
                <span
                  className="gradient-text"
                >
                  Gender
                </span>
              </Form.Label>
              <GenderDropDownList
                gender={profileInfoValue.gender}
                handleGenderSelect={handleGenderSelect}
                selectedGender={selectedGender}
                primaryTxtColor={primaryTxtColor}
              />
            </Form.Group> */}
          </Form>
        </ListGroup.Item>
      </ListGroup>
    </>
  ) : null;
};

export default ProfileInformation;
