import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { pathOr, isNil, sortBy, pluck, compose, prop, flatten } from "ramda";
import HeaderComp from "../../components/Header/HeaderComp";
import { getByGenrer } from "../../components/Carousel/api/Movies";
import HomePageLayout from "../../styles/layouts/page/styledcomponent/HomePagelayout";
import { HeroBannerText } from "../../components/HeroBannerWithIcon/HeroBannerText";
import TrayComponentText from "../../components/TrayComponentWithText/index";
import ContinueWatchingTray from "../../components/ContinueWatchingTray/index";
import TrayWithTitleHome from "./Trays/TrayWithTitleHome/tray-with-title-home";
import TrayWithTitleCategory from "./Trays/TrayWithTitleHome/tray-with-category-home";
import TrendingNowTrayHome from "./Trays/TrendingNowHome/trending-now-home";
import TrayWithFilterHome from "./Trays/TrayWithFilterHome/tray-with-filter-home";
import Footer from "../../components/Footer/footer";
// import { LoadingSkeltonTemplate } from "../../frontend-library/atoms/loadingSpinner/loadingskeleton";
import LoadingSpinner from '../../frontend-library/atoms/loadingSpinner';
import { ModalComponent } from '../../frontend-library/molecules/Modal';
import useAuthStatus from '../../hooks/useAuthStatus';
import FullSideNav from "../../components/FullSideNav/FullSideNav";
import SideNav from "../../components/SideNav/SideNav";
import { Toaster } from "../../components/Toaster/toaster";
import Hamburger from "../../assets/images/hamburger.png";
import { __isThemeOfType } from '../../utils/tenant';
import { GetVideoBannerContent } from '../../selectors/homecontentselector';
import { getHomePageContentsAction } from '../../actions/gethomepagecontents.action';
import { Helmet } from "react-helmet";
// Once the user tries to navigate to the pages on website,
// there will be a configuration pertaining to the slots in which
// the contents will be layed out and which compnents should render

// TODO:
// Write an config object in which we take in the attributes to decide the slots in which the contents are loaded.
// Before all, we take in the object, create slots and add the components dynamically to these slots

// Use the following structure to avoid prop drilling on each page container

// Lookup table of components based on id

const availableHomePageComponent = [
  {
    module_id: "header-component",
    component: HeaderComp,
  },
  {
    module_id: "hero-banner-text-component",
    component: HeroBannerText,
  },
  {
    module_id: "traywithtitlecomponent",
    component: TrayWithTitleHome,
  },
  {
    module_id: "traywithcategorycomponent",
    component: TrayWithTitleCategory,
  },
  {
    module_id: "trendingtraycomponent",
    component: TrendingNowTrayHome,
  },
  {
    module_id: "trendingtrayFiltercomponent",
    component: TrayWithFilterHome,
  },
  {
    module_id: "traywithtextcomponent",
    component: TrayComponentText,
  },
  {
    module_id: "footer-component",
    component: Footer,
  }, 
];

function HomePageContent() {
  // Initial setup
  // const themes = useSelector((state) => state.ThemeState);

  // React-redux setup
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const theme = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const pageName = useSelector(state => pathOr([], ['HomePageContent', 'records', 'result', 'pageName'])(state));
  const pageDescription = useSelector(state => pathOr('', ['HomePageContent', 'records', 'result', 'description'])(state));
  const contentArray = useSelector(state => pathOr('', ['HomePageContent', 'records', 'result', 'components'])(state));
  const themeName = pathOr("", ["themeName"])(theme);
  const fav_icon = pathOr("", ["icons", "fav_icon"])(theme);
  const themeLoading = pathOr("", ["loading"])(theme);
  const { loading } = GetVideoBannerContent();
  const [isSignedIn] = useAuthStatus();
  const [pageconfiguration, setPageconfiguration] = useState( {
    header: {
      position: "top",
      components: [
        {
          module_id: "header-component",
        },
      ],
    },
    body: {
      position: "middle",
      components: [],
    },
    footer: {
      position: "bottom",
      components: [
        {
          module_id: "footer-component",
        },
      ],
    },
  });

  useEffect(()=>{
    if(contentArray && contentArray.length){
      var newarray = []
      const newArr = contentArray.map((value, index)=>{
         if(value && value.componentType === 'trendingSection'){
          newarray.push({ module_id: 'trendingtraycomponent', index: index })
        } else if(value && value.componentType === 'tray' && value.contentType === 'category'){
          newarray.push({ module_id: 'traywithcategorycomponent', index: index })
        } else if(value && value.componentType === 'tray'){
          newarray.push({ module_id: 'traywithtitlecomponent', index: index })
        } else if(value && value.componentType === 'trayWithFilter'){
          newarray.push({ module_id: 'trendingtrayFiltercomponent', index: index })
        } 
      })
      
      setPageconfiguration((prevState) => ({
        ...prevState,
        body: {
          position: "middle",
          components: newarray,
        },   
      }));
    }
  },[contentArray])

  const ParseLayout = (parseHeaderComponentId) => {
    var getcompid = pluck("module_id");
    const compids = getcompid(parseHeaderComponentId);
    const filteredcompid = compids.map((id) => {
      const returnvalue = availableHomePageComponent.map((values) => {
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
  const [trending, setMovies] = useState({ trending: [] });
  let reqType = '';
  // // get api token if the jwt token is expired or does not exist on the load of page
  useEffect(() => {
    // getByGenrer(!__isThemeOfType() ? "Thriller" : "Animation").then((res) => {
    // setMovies({ ...trending, movies: res });
    // dispatch({ type: "HOME_PAGE_CONTENT", ...{ payload: res } });
    dispatch(getHomePageContentsAction.getHomePageContents(reqType = ""));
    // });
    return () => { };
    // props.videoInfo();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    dispatch(getHomePageContentsAction.getHomePageContents(reqType = ""));
  }, [isSignedIn]);

  if (themeLoading || loading) {
    return <LoadingSpinner
    // page={"home"}
    />;
  }
  return (
    <main className={`${themeName}-Home-Page`} style={{ paddingLeft: `${__isThemeOfType() ? "3.5rem" : ''}` }}>
      {pageName ?
        <Helmet>
          <title>{pageName}</title>
          <link
            rel=""
            href="/home"
          />
          <meta name="description" content={`${pageDescription}`} />
          <meta
            property="og:description"
            content={`Description for the ${pageDescription}`}
          />
        </Helmet>
        : null}
      <HomePageLayout />
      <Toaster />
      <Nav themeName={themeName}>
        {RenderHeader.map((HeaderComp, key) => (
          <HeaderComp key={key} />
        ))}
      </Nav>
      <section aria-label={`${themeName}-homepage-hero`} style={{ margin: `${__isThemeOfType() ? '2rem' : ''}` }}>
        <HeroBannerText />
      </section>
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
      <ModalComponent />
    </main>
  );
}


// Render the nav header with children within it/ them
const Nav = ({ themeName, children }) => (
  <header>
    {process.env.REACT_APP_THEMETYPE === "classic" ? <SideBar themeName={themeName} /> : null}
    {children}
  </header>
);

// Body requirements to be decided based on the cofiguration from API call
// they can be ANYTHING!

const Body = ({ content, themeName }) => (
  <section className={`${themeName}-homepage-section`} >{content}</section>
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

export default memo(HomePageContent);