import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Footer from '../../components/Footer/footer';
import HeaderComp from '../../components/Header/HeaderComp';
import parse from 'html-react-parser';
import { staticPageActions } from '../../actions/staticpageactions';
import { tos, privacy, about } from '../../services/config';
import { useLocation } from 'react-router-dom';
// import { LoadingSkeltonTemplate } from '../../frontend-library/atoms/loadingSpinner/loadingskeleton';
import LoadingSpinner from '../../frontend-library/atoms/loadingSpinner';
import '../../styles/layouts/page/scss/staticpagestyle.scss';
import GlobalStyleLayout from "../../styles/global-styles/globalStyle";
import StaticPage from './staticstyle';

import { pathOr } from 'ramda';

function StaticInformation() {
    // const [htmlContent, sethtmlContent] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    // const themes = useSelector(state => pathOr(null, ['ThemeState'])(state));
    const content = useSelector(state =>
        pathOr(null, ['StaticContentReducer', 'result', 'result', 'components', '0', 'content', 'data'])(state));
    const pageName = useSelector(state => pathOr(null, ['StaticContentReducer', 'result', 'result', 'pageName'])(state));
    const loading = useSelector((state) => pathOr(null, ['StaticContentReducer', 'loading'])(state));

    useEffect(() => {
        if (location.pathname.toLowerCase().includes('terms')) {
            dispatch(staticPageActions.getTermsOfService(tos.pattern));
        }
        else if (location.pathname.toLowerCase().includes('about')) {
            dispatch(staticPageActions.getTermsOfService(about.pattern));
        } else if (location.pathname.toLowerCase().includes('privacy')) {
            dispatch(staticPageActions.getTermsOfService(privacy.pattern));
        }
        return () => {
        }
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <>
            <GlobalStyleLayout />
            <StaticPage />
            {pageName ?
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{pageName}</title>
                    <link
                        rel=""
                        href="/terms-of-service"
                    />
                </Helmet>
                : null}
            <main className="staticpage-background" style={{}}>
                <header aria-label="main header section">
                    <HeaderComp />
                </header>
                <section>
                    {
                        content && <div className="container static-page-content">
                            {parse(content)}
                        </div>
                    }
                </section>

            </main>
            <Footer />
        </>
    )
}

export default StaticInformation;