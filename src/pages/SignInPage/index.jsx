import React from 'react';
import { useSelector } from 'react-redux';
import HeaderComp from '../../components/Header/HeaderComp';
import Footer from '../../components/Footer/footer';
import SignIn from '../../components/Auth/SignIn';
import LoadingSpinner from "../../frontend-library/atoms/loadingSpinner";
import { pathOr } from 'ramda';

import '../../styles/layouts/page/scss/signinstyle.scss';


function SignInPage() {

    const loading = useSelector(state => pathOr(false, ['userAuth', 'loading'])(state));

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <>
            <main className="SignIn-background" style={{}} >
                <header aria-label="main header section on sign in page">
                    <HeaderComp />
                </header>
                <SignIn
                />
            </ main>
            <Footer />
        </>
    )
}

export default SignInPage;