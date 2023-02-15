import React from "react";
// import { useSelector } from 'react-redux';
import Footer from "../../components/Footer/footer";
import "../../styles/layouts/page/scss/errorpagestyle.scss";
// import "bootstrap/dist/css/bootstrap.css";
// import { isSignedIn, deleteCookie } from '../../helpers/authentication';
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ErrorPage = () => {
  return (
    <>
      <div className="errorDiv">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Something went wrong.</h2>
      </div>
      <Footer />
    </>
  );
};

export { ErrorPage };
