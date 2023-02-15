import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { pathOr } from "ramda";
import HeaderComp from "../../components/Header/HeaderComp";
import Footer from "../../components/Footer/footer";
import GlobalStyleLayout from "../../styles/global-styles/globalStyle";
import Activatetvdeviceform from "../../components/ActivateTv/ActivateDeviceTv/ActivateDeviceTvForm/activatetvdeviceform";
import { ModalComponent } from "../../frontend-library/molecules/Modal";
import { showModalComAction } from "../../actions/showmodal.action";
import useAuthStatus from "../../hooks/useAuthStatus";
import { Toaster } from "../../components/Toaster/toaster";

export function ActivateDeviceTv() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSignedIn] = useAuthStatus();

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(showModalComAction.ShowModal("signin"));
    }
  });
  return (
    <>
      <GlobalStyleLayout />
      <main className="resetpassword">
        <header aria-label="main header section for membership page">
          <HeaderComp />
        </header>
        <Toaster />
        <section>
          <Container className="contact-content mt-4">
            {isSignedIn ? (
              <Activatetvdeviceform />
            ) : (
              <h1 style={{ color: "#ffffff", textAlign: "center" }}>
                Please sign In to get the activate device form
              </h1>
            )}
          </Container>
        </section>
        <ModalComponent />
      </main>
      <Footer />
    </>
  );
}
