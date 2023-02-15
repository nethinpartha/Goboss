import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Category from './HeaderFragments/Categories/Category';
import { HeaderContext } from '../../context/header-context';
import Brandlogo from './HeaderFragments/BrandLogo/brandlogo';
import SearchForm from './HeaderFragments/SearchFormControl/searchform';
import { NavBarStyle, HeaderGlobalStyle } from './header-style';
import { useHeaderConfig } from '../../hooks/useHeaderConfig';
import './style.scss';


export default function HeaderComp() {
    const { HeaderContextState, headerbgclr } = useHeaderConfig();

    return (
        <HeaderContext.Provider
            value={HeaderContextState}>
            <>
                <HeaderGlobalStyle
                />
                <Container
                    varient={"dark"}
                    style={NavBarStyle(headerbgclr)}
                    className={'headercomp'}
                    data-test="headercomponent"
                    fluid
                >
                    <Row>
                        <Col
                            xl={7}
                            lg={6}
                            sm={6}
                            xs={4}
                        >
                            <Brandlogo />
                        </Col>
                        <Category />
                        <SearchForm />
                    </Row>
                </Container>
            </>
        </HeaderContext.Provider>
    )
}
