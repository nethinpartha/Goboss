import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pathOr, isNil, sortBy, pluck, compose, prop, flatten } from "ramda";
import HeaderComp from "../../components/Header/HeaderComp";
import { getByGenrer } from "../../components/Carousel/api/Movies";
import Accountdetailscontainer from "./accountdetailscontainer";
import Footer from "../../components/Footer/footer";
import GlobalStyleLayout from "../../styles/global-styles/globalStyle";
import { getuserprofileAction } from "../../actions/getUserProfile.action";
import FullSideNav from "../../components/FullSideNav/FullSideNav";
import SideNav from "../../components/SideNav/SideNav";
import Hamburger from "../../assets/images/hamburger.png";
import { __isThemeOfType } from "../../utils/tenant";
import { Toaster } from "../../components/Toaster/toaster";
import { Helmet } from "react-helmet";

// Lookup table of components based on id
const availableContentDetailsPageComponent = [
  {
    module_id: "header-component",
    component: HeaderComp,
  },
  {
    module_id: "account-details-component",
    component: Accountdetailscontainer,
  },
  {
    module_id: "footer-component",
    component: Footer,
  },
];

function AccountdetailPageContent({ user }) {
  // Initial setup
  const themes = useSelector((state) => state.ThemeState);
  const themeName = pathOr("", ["themeName"])(themes);
  // const themesLoading = useSelector(state => pathOr(false, ['ThemeState', 'loading'])(state))
  // const reload = useSelector(state => pathOr('', ['userAuth', 'reload'])(state));

  // React-redux setup
  const dispatch = useDispatch();
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
          module_id: "account-details-component",
          index: 2,
        },
      ],
    },
    footer: {
      position: "bottom",
      components: [
        {
          module_id: "footer-component",
          index: 3,
        },
      ],
    },
  };

  const ParseLayout = (parseHeaderComponentId) => {
    var getcompid = pluck("module_id");
    const compids = getcompid(parseHeaderComponentId);
    const filteredcompid = compids.map((id) => {
      const returnvalue = availableContentDetailsPageComponent.map((values) => {
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

  // Page wise content
  // const [acountdetails, setaccountdetails] = useState({ trending: [] })

  useEffect(() => {
    dispatch(getuserprofileAction.getuserprofile());
    return () => { };
  }, []);

  return (
    <main
      className={`${themeName}-account-details-Page`}
      style={{ margin: `${__isThemeOfType() ? "0 0 0 3.5rem" : ""}` }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Account Details'}</title>
        <link
          rel=""
          href="/accountdetails"
        />
        <meta name="description" content={"Your Account details"} />
      </Helmet>
      <GlobalStyleLayout />
      <Toaster />
      <Nav>
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
        themeName={themeName}
      />
      {RederFooter.map((Footercomp, key) => (
        <Footercomp key={key} />
      ))}
    </main>
  );
}

export default AccountdetailPageContent;

// Render the nav header with children within it/ them
const Nav = ({ themeName, children }) => (
  <header>
    {process.env.REACT_APP_THEMETYPE === "classic" ? (
      <SideBar themeName={themeName} />
    ) : null}
    {children}
  </header>
);

// Body requirements to be decided based on the cofiguration from API call
// they can be ANYTHING!

const Body = ({ content, themeName }) => (
  <section className={`${themeName}`}>{content}</section>
);

// Sidebar
const SideBar = ({ themeName }) => {
  const [show, setShow] = useState(false);
  const [Navshow, setNavShow] = useState(false);
  const handleNavModal = () => setNavShow(!Navshow);
  const handleModal = () => setShow(true);
  return (
    <aside className={`${themeName} side bar`}>
      <SideNav assets={{}}></SideNav>
      <FullSideNav show={Navshow} handleModal={handleNavModal}></FullSideNav>
      <img
        src={Hamburger}
        alt="hamberger-icon"
        className="icon-hamberger"
        onClick={handleNavModal}
      />
    </aside>
  );
};
// Content
const Content = ({ children }) => <div>{children}</div>;
