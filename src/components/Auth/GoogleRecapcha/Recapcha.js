import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const recapchaSiteKey = process.env.REACT_APP_GCAPTCHA_SITEKEY;


export const RecapCha = ({ errorRecapcha, reRef }) => {
  return (
    <>
      {
        <div className={'form-group recapcha'}>
          <ReCAPTCHA
            sitekey={recapchaSiteKey}
            size="normal"
            ref={reRef}
          />
          {errorRecapcha && <p
            style={{
              color: "red",
              fontSize: "14px",
              textAlign: "left"
            }}>
            {errorRecapcha}
          </p>
          }
        </div>}
    </>
  )
}