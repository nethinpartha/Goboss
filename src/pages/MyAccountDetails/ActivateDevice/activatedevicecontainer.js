import React from 'react';
import { Container } from 'react-bootstrap';
import Activatedevicedetails from '../../../components/AccountsDetails/ActivateDeviceScreen/activatedevicedetails';
import { useMediaQuery } from '../../../components/Header/viewportHook';

export default function ActivateDevicecontainer() {
    // const sm = useMediaQuery('(max-width: 576px)');
    const xl = useMediaQuery('(min-width: 1200px)');
    return (
        <Container className={"recentstreaming-background"}
            style={{
                margin: `$sm ? '0' :'1rem'}`,
                maxWidth: `${xl ? '90%' : ''}`,
                padding: '1rem',
                marginBottom: '4rem',
                marginTop: '1rem',
            }}>
            <Activatedevicedetails />
        </Container>
    )
}
