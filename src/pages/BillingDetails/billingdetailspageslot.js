import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pathOr, isNil, sortBy, pluck, compose, prop, flatten } from "ramda";
import HeaderComp from "../../components/Header/HeaderComp";
import { getByGenrer } from "../../components/Carousel/api/Movies";
import Billingdetailscontainer from "./billingdetailscontainer";
import BillingdetailPageLayout from "../../styles/layouts/page/styledcomponent/billingdetailslayout";
import Footer from "../../components/Footer/footer";
import GlobalStyleLayout from "../../styles/global-styles/globalStyle";

// Lookup table of components based on id
const availableContentDetailsPageComponent = [
  {
    module_id: "header-component",
    component: HeaderComp,
  },
  {
    module_id: "billing-details-component",
    component: Billingdetailscontainer,
  },
  {
    module_id: "footer-component",
    component: Footer,
  },
];

function BillingdetailPageContent({ user }) {
  // Initial setup
  const themes = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(themes);
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
          module_id: "billing-details-component",
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
    // getByGenrer("Action").then((res) => {
    //   dispatch({ type: "BILLING_DETAILS_PAGE_CONTENT", ...{ payload: res } });
    // });
    return () => { };
  }, []);

  return (
    <main className={`${themeName}-billing-details-Page`}>
      <GlobalStyleLayout />
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

export default BillingdetailPageContent;

// Render the nav header with children within it/ them
const Nav = ({ sidebar, children }) => (
  <header>
    {/* <SideBar>{sidebar}</SideBar> */}
    {children}
  </header>
);

// Body requirements to be decided based on the cofiguration from API call
// they can be ANYTHING!

const Body = ({ content, themeName }) => (
  <section className={`${themeName}`}>{content}</section>
);

// Sidebar
// const SideBar = ({ children, themeName }) => (
//     <aside className={`${themeName} side bar`}>
//         {children}
//     </aside>
// );

// Content
const Content = ({ children }) => <div>{children}</div>;
