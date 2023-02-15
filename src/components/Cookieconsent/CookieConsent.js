import React from "react";
import CookieConsent from "react-cookie-consent";

// Use the cookies consent module when you need to inform the user on usage of cookies on their machine for auth
//The Cookie Law is a piece of privacy legislation that requires websites to get consent from visitors to store or retrieve any information on a computer, smartphone or tablet

export const CookiesConsent = () => {
  return (
    <>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
};
