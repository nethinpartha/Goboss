import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pathOr, isNil, sortBy, pluck, compose, prop, flatten } from "ramda";
import HeaderComp from "../../components/Header/HeaderComp";
import { getByGenrer } from "../../components/Carousel/api/Movies";
import Browse from "../../components/Browse";
import SearchResultsPageLayout from "../../styles/layouts/page/styledcomponent/searchpagelayout";
import Footer from "../../components/Footer/footer";
// import { analyticsService } from "../../services/analyticsapi.service";
import { ModalComponent } from '../../frontend-library/molecules/Modal';
import { __isThemeOfType } from '../../utils/tenant';
import FullSideNav from "../../components/FullSideNav/FullSideNav";
import { Toaster } from "../../components/Toaster/toaster";
import SideNav from "../../components/SideNav/SideNav";
import Hamburger from "../../assets/images/hamburger.png";
import { Helmet } from "react-helmet";

// Once the user tries to navigate to the pages on website,
// there will be a configuration pertaining to the slots in which
// the contents will be layed out and which compnents should render

// TODO:
// Write an config object in which we take in the attributes to decide the slots in which the contents are loaded.
// Before all, we take in the object, create slots and add the components dynamically to these slots

// Use the following structure to avoid prop drilling on each page container

// Lookup table of components based on id
const availableSearchResultsPageComponent = [
    {
        module_id: "header-component",
        component: HeaderComp,
    },
    {
        module_id: "browse-component",
        component: Browse,
    },
    {
        module_id: "footer-component",
        component: Footer,
    },
];

function ViewAllResultsPageContent({ user }) {
    // Initial setup
    const themes = useSelector((state) => pathOr(null, ["ThemeState"])(state));
    // const themesLoading = useSelector(state => pathOr(false, ['ThemeState', 'loading'])(state))
    // const reload = useSelector(state => pathOr('', ['userAuth', 'reload'])(state));
    const tenantname = pathOr("default", ["themeName"])(themes);
    // React-redux setup
    const dispatch = useDispatch();
    useEffect(() => {
        // analyticsService.addeventanalytics("pageview", "searchresults");
        return () => { };
    }, []);
    const pageconfiguration = {
        header: {
            position: "top",
            components: [
                {
                    module_id: "header-component",
                    index: 1,
                },
            ],
        },
        body: {
            position: "middle",
            components: [
                {
                    module_id: "browse-component",
                    index: 2,
                },
            ],
        },
        footer: {
            position: "bottom",
            components: [
                {
                    module_id: "footer-component",
                    index: 2,
                },
            ],
        },
    };

    const ParseLayout = (parseHeaderComponentId) => {
        var getcompid = pluck("module_id");
        const compids = getcompid(parseHeaderComponentId);
        const filteredcompid = compids.map((id) => {
            const returnvalue = availableSearchResultsPageComponent.map((values) => {
                return id.includes(values.module_id) ? values.component : null;
            });
            return returnvalue.filter((val) => !isNil(val));
        });
        return flatten(filteredcompid);
    };

    const HeaderCompId = pathOr(null, ["header", "components"])(
        pageconfiguration
    );
    const RenderHeader = ParseLayout(HeaderCompId);

    const sortByPostionIndex = sortBy(compose(prop("index")));
    const BodyComId = pathOr(null, ["body", "components"])(pageconfiguration);
    const SortByPosition = sortByPostionIndex(BodyComId);

    const RenderBody = ParseLayout(SortByPosition);

    const FooterCompId = pathOr(null, ["footer", "components"])(
        pageconfiguration
    );
    const RederFooter = ParseLayout(FooterCompId);

    // get api token if the jwt token is expired or does not exist on the load of page
    useEffect(() => {
        // props.videoInfo();
    }, []);

    // Page wise content
    const [trending, setMovies] = useState({ trending: [] });

    useEffect(() => {
        // getByGenrer("Action").then((res) => {
        //   setMovies({ ...trending, movies: res });
        //   dispatch({ type: "HOME_PAGE_CONTENT", ...{ payload: res } });
        // });

        return () => { };
    }, []);

    return (
        <main
            className={`${tenantname}-Search-Results-Page`}
            style={{ paddingLeft: `${__isThemeOfType() ? "3rem" : ''}` }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{'Search Result'}</title>
                <link
                    rel=""
                    href="/search"
                />
                <meta name="description" content={"Search Result"} />
            </Helmet>
            <SearchResultsPageLayout />
            <Toaster />
            <Nav themeName={tenantname}>
                {RenderHeader.map((HeaderComp, key) => (
                    <HeaderComp key={key} />
                ))}
            </Nav>
            <Body
                content={
                    <Content
                        children={RenderBody.map((Childrencomp, key) => (
                            <Childrencomp key={key} />
                        ))}
                    />
                }
                tenantname={tenantname}
            />
            {RederFooter.map((Footercomp, key) => (
                <Footercomp key={key} />
            ))}
            <ModalComponent />
        </main>
    );
}

export default ViewAllResultsPageContent;

// Render the nav header with children within it/ them
const Nav = ({ children, themeName }) => (
    <header>
        {__isThemeOfType() ? <SideBar themeName={themeName} /> : null}
        {children}
    </header>
);

// Body requirements to be decided based on the cofiguration from API call
// they can be ANYTHING!

const Body = ({ content, tenantname }) => (
    <section className={`${tenantname}`} style={{ minHeight: '80vh' }}>{content}</section>
);

// Sidebar
const SideBar = ({ themeName }) => {
    const [show, setShow] = useState(false);
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const handleModal = () => setShow(true);
    return (
        <aside className={`${themeName} side bar`}>
            <SideNav assets={{}}>
            </SideNav>
            <FullSideNav show={Navshow} handleModal={handleNavModal}></FullSideNav>
            <img src={Hamburger} alt="hamberger-icon" className="icon-hamberger" onClick={handleNavModal} />
        </aside>)
};

// Content
const Content = ({ children }) => <div>{children}</div>;
