import React from 'react';
import PaymentOptions from '../../components/PaymentOptions';
import "../../styles/layouts/page/scss/paymentoptsstyle.scss";

const PaymentSelectionPage = () => {
    return (
        <>
            <main className="payment-option-background">
                <PaymentOptions />
            </main>
        </>
    )
};

export default PaymentSelectionPage;