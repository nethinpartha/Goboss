import React from "react";
import Footer from '../../components/Footer/footer';
import HeaderComp from '../../components/Header/HeaderComp';
import ForgotPasswordComponent from '../../components/Auth/ForgotPassword';
import '../../styles/layouts/page/scss/forgotpwdstyle.scss';

export default function ForgotPassword() {
    return (
        <>
            <main className="forgotpassword-background" style={{}}>
                <header aria-label="main header section">
                    <HeaderComp />
                </header>
                <ForgotPasswordComponent />
            </main>
            <Footer />
        </>
    )
}
