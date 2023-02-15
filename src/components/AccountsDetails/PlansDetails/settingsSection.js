import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { cardetailsstyle } from './plandetailsstyle';
import { useMediaQuery } from '../../../components/Header/viewportHook';
import { __parseThemeSelector } from "../../../selectors/themestyleselector";

export default function SettingsSection() {
    const sm = useMediaQuery('(max-width: 576px)');
    const { colors } = __parseThemeSelector();
    const { primaryTxtColor } = colors;
    const history = useHistory();
    return (
        <ListGroup style={{ margin: '1rem' }}>
            <ListGroup.Item
                style={{
                    color: '#585858',
                    fontSize: '23px',
                    fontWeight: '500',
                    border: '0',
                    padding: '1rem',
                    background: '#d4d4d4',
                    width: `${sm ? '80%' : ''}`,
                }}>
                {`Settings`}
            </ListGroup.Item>
            <ListGroup.Item style={{ ...cardetailsstyle.background(), marginTop: '0.5rem' }}>
                <div
                    className=""
                    style={{
                        color: `#ffffff`,
                        fontSize: '12px',
                        fontWeight: '400',
                    }}
                    onClick={() => history.push('/activatedevice')}
                >
                    Activate a device
                </div>
            </ListGroup.Item >
            <ListGroup.Item style={cardetailsstyle.background()}>
                <div
                    className=""
                    style={{
                        color: `#ffffff`,
                        fontSize: '12px',
                        fontWeight: '400'
                    }}
                    onClick={
                        () => history.push('/streamingdetails')
                    }

                >
                    Recent device streaming activity
                </div>
            </ListGroup.Item >
            <ListGroup.Item style={{ ...cardetailsstyle.background(), paddingBottom: '0.5rem' }}>
                <div
                    className=""
                    style={{
                        color: '#0D7EFF',
                        fontSize: '12px',
                        fontWeight: '400',
                        marginRight: `${sm ? '1rem' : ''}`,
                        marginBottom: '0.5rem'
                    }}>
                    Logout from all devices
                </div>
            </ListGroup.Item >
        </ListGroup >
    )
}
