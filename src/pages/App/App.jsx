import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
//import "bootstrap/dist/css/bootstrap.css";
//import "font-awesome/css/font-awesome.min.css";
import "../../styles/layouts/component/scss/App.scss";
import Routes from "../../components/Router/routes";
import { apiTokenActions } from "../../actions";

import { useNetwork } from '../../helpers/network';
import { NetworkIssues } from '../netoworkissue/networkissue';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //const alert = useSelector((state) => state.alert);
  const network = useNetwork();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!sessionStorage.getItem('themeexist')) {
      dispatch(apiTokenActions.login());
    }
  }, [dispatch]);


  if (!network) {
    return (
      <NetworkIssues />
    )
  }
  return (

    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export { App };
