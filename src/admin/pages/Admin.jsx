import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/sb-admin-2.css";
import "../styles/fontawesome-free/css/all.min.css";

import HeaderApp from "./HeaderApp";
import NavbarApp from "./NavbarApp";
import FooterApp from "./FooterApp";
import ScrollTop from "../components/ScrollTop";

import Dashboard from "./Dashboard";
import Profile from "./Profile";

function Admin(props) {
  return (
    <>
      <div id="wrapper">
        <NavbarApp />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <HeaderApp />
            <Switch>
              <Route path="/admin/dashboard" component={Dashboard} />
              <Route path="/admin/profile" component={Profile} />
            </Switch>
          </div>
          <FooterApp />
        </div>
      </div>
      <ScrollTop history={props.history} />
    </>
  );
}

export default Admin;
