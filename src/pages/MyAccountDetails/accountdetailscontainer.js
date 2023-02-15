import React from 'react';
import { Container } from 'react-bootstrap';
import AccountTabination from '../../components/AccountsDetails/AccountTabination';
import { useMediaQuery } from '../../components/Header/viewportHook';

export default function Accountdetailscontainer() {
    return (
        <Container className={"myaccountpage-background"}
            style={{
                maxWidth: '90%',
                padding: '1rem',
                marginBottom: '4rem'
            }}>
            <AccountTabination />
        </Container>
    )
}
