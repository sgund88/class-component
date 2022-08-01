import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux/es/exports";
import { Outlet } from "react-router";
import EmployeeList from "../components/Employee/index";
import Login from "../components/Login/Login";
import AboutUs from "../components/About/AboutUs";
import ContactUs from "../components/Contact/ContactUs";
import Others from "./Others";
import CreateAccount from "../components/CreateAccount/index";

class AppRouter extends Component {
  pages = [
    { path: "/Home", component: <EmployeeList /> },
    { path: "/About", component: <AboutUs /> },
    { path: "/Contact", component: <ContactUs /> },
    { path: "*", component: <h5>404 Page Not Found</h5> },
  ];

  checkUserAuthentication = () => {
    return this.props.isUserAuthenticated ? <Outlet /> : <Login />;
  };

  render() {
    return (
      <BrowserRouter>
        <Others loaderStatus={this.props.loaderStatus} />
        <Routes>
          <Route exact element={this.checkUserAuthentication()}>
            {this.pages.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={page.component}
              />
            ))}
          </Route>
          <Route exact path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserAuthenticated: state.user.isUserAuthenticated,
    loaderStatus: state.loader.loader,
  };
};

export default connect(mapStateToProps)(AppRouter);
