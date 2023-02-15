import React from 'react';
import { Container } from 'react-bootstrap';
import Billingdetailssection from '../../components/BillingDetails/billingdetailssection';
import { useMediaQuery } from '../../components/Header/viewportHook';

export default function Billingdetailscontainer() {
    const sm = useMediaQuery('(max-width: 576px)');
    const xl = useMediaQuery('(min-width: 1200px)');
    return (
        <Container
            className={'billingdetailspage-background'}
            fluid
        >
            <Billingdetailssection />
        </Container >
    )
}
