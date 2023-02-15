import React, { useState, useEffect } from 'react';
import { pathOr } from 'ramda';
import { useDispatch } from 'react-redux';
import { ListGroup, Form, Button, Container } from "react-bootstrap";
import { updatePaymentMtdAction } from "../../../actions/updatePaymentMethod.action";
import { useForm } from "react-hook-form";
import { addOrUpdateCard } from '../../../styles/layouts/component/styledcomponent/addOrUpdateCard';
import { __parseThemeSelector } from '../../../selectors/themestyleselector';

import { rules } from "../../../helpers/rules";

const initialState = {
  paymentMethod: "",
  email: "",
  address: {
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: ""
  }
}

const AddressFields = ({ errors, register, primaryTxtColor, bgColor }) => {
  return (
    <>
      <Form.Group controlId="address" style={{ display: "flex" }}>
        <Form.Control
          type="text"
          placeholder="Address line 1"
          name="line1"
          style={addOrUpdateCard.formAddressLine()}
          ref={register({
            pattern: {
              value: pathOr(null, ["validation", "name"])(rules),
              message: "invalid address field address",
            },
          })}
        />
        {errors.line1 && (
          <p
            style={addOrUpdateCard.error()}
          >
            {errors.line1.message}
          </p>
        )}
        <Form.Control
          type="text"
          placeholder="Address line 2"
          name="line2"
          style={addOrUpdateCard.formAddressLine()}
          ref={register({
            pattern: {
              value: pathOr(null, ["validation", "name"])(rules),
              message: "invalid  address",
            },
          })}
        />
        {errors.line2 && (
          <p
            style={addOrUpdateCard.error()}
          >
            {errors.line2.message}
          </p>
        )}

      </Form.Group>
      <Form.Group style={{ display: "flex" }}>
        <Form.Control
          type="text"
          placeholder="City"
          name="city"
          style={addOrUpdateCard.formAddressLine()}
          ref={register({
            pattern: {
              value: pathOr(null, ["validation", "name"])(rules),
              message: "invalid city",
            },
          })}
        />
        {errors.city && (
          <p
            style={addOrUpdateCard.error()}
          >
            {errors.city.message}
          </p>
        )}
        <Form.Control
          type="text"
          placeholder="State"
          name="state"
          style={addOrUpdateCard.formAddressLine()}

          ref={register({
            pattern: {
              value: pathOr(null, ["validation", "name"])(rules),
              message: "invalid state name",
            },
          })}
        />
        {errors.state && (
          <p
            style={addOrUpdateCard.error()}
          >
            {errors.state.message}
          </p>
        )}
      </Form.Group>
      <Form.Group style={{}}>
        <Form.Control
          type="text"
          placeholder="Zip Code"
          name="zipcode"
          style={addOrUpdateCard.zipcode()}
          ref={register({
            pattern: {
              value: pathOr(null, ["validation", "name"])(rules),
              message: "invalid zipcode",
            },
          })}
        />
        {errors.zipcode && (
          <p
            style={addOrUpdateCard.error()}
          >
            {errors.zipcode.message}
          </p>
        )}
      </Form.Group>
    </>
  )
}



const UpdateOrAddCard = ({ setShowCard, showCard, selectedPaymentMethod }) => {
  const dispatch = useDispatch();
  const [formValid, setFormValid] = useState(false);
  const [updateCardDetails, setUpdateCardDetails] = useState(initialState);
  const { handleSubmit, register, errors } = useForm();
  const { colors } = __parseThemeSelector();
  const { bgColor, primaryTxtColor, primaryBtnColor } = colors;
  // update the component paymentMethod state value whenever there is change in the props
  useEffect(() => {
    setUpdateCardDetails({
      ...updateCardDetails, paymentMethod: selectedPaymentMethod
    });
  }, [selectedPaymentMethod]);

  const onSubmit = (values) => {
    setUpdateCardDetails({
      ...updateCardDetails,
      email: values.email,
      address: {
        line1: values.line1,
        line2: values.line2,
        city: values.city,
        state: values.state,
        postal_code: values.zipcode
      }
    });
    setFormValid(true);
    setShowCard(false);
  }

  // dispatch update payment API call once form validation method is successfull and payment-method is available
  useEffect(() => {
    if (formValid && updateCardDetails.paymentMethod) {
      dispatch(updatePaymentMtdAction.updatePaymentMtd({ updateCardDetails }));
      setFormValid(false);
      setUpdateCardDetails(initialState);
    }
  }, [formValid]);

  return showCard ? (
    <ListGroup>
      <ListGroup.Item
        style={addOrUpdateCard.groupitem(bgColor)}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              style={addOrUpdateCard.formControl(primaryTxtColor)}
              ref={register({
                pattern: {
                  value: pathOr(null, ["validation", "name"])(rules),
                  message: "invalid name address",
                },
              })}
              disabled
            />
            {errors.password && (
              <p
                style={addOrUpdateCard.error()}

              >
                {errors.name.message}
              </p>
            )}
          </Form.Group> */}
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              style={addOrUpdateCard.formControl(primaryTxtColor)}
              ref={register({
                required: "Email is not filled",
                pattern: {
                  value: pathOr(null, ["validation", "email"])(rules),
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && (
              <p
                style={addOrUpdateCard.error()}
              >
                {errors.email.message}
              </p>
            )}
          </Form.Group>
          <AddressFields errors={errors} register={register} primaryTxtColor={primaryTxtColor} bgColor={bgColor} />
          <Container style={{ marginBottom: '1rem' }}>
            <Button
              onClick={() => setShowCard(false)}
              variant="secondary"
              style={addOrUpdateCard.cancelButton()}>
              Cancel
            </Button>
            <Button
              style={addOrUpdateCard.submit(primaryBtnColor)}
              type="submit"
            >
              Update
            </Button>
          </Container>
        </Form>
      </ListGroup.Item>
    </ListGroup>
  ) : null
}

export default UpdateOrAddCard;