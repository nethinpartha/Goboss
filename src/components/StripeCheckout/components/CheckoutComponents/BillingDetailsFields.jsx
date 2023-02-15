import React from 'react';
import FormField from "./FormField";
import Row from "./Row";

const BillingDetailsFields = () => {
  return (
    <>
      <Row>
        <FormField
          name="address"
          label="Address"
          type="text"
          placeholder="Address"
          required
        />
      </Row>
      <Row>
        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="email@example.com"
          required
        />
      </Row>
      <Row>
        <FormField
          name="zip"
          label="ZIP"
          type="text"
          placeholder="Zipcode"
          required
        />
      </Row>
    </>
  );
};

export default BillingDetailsFields;
