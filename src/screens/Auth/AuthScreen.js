import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import HomePage from "./HomePage";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import JobsScreen from "../JobsScreen";

const AuthScreen = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/jobs">
          <JobsScreen />
        </Route>
        <Route path="/register">
          <SignupScreen />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default AuthScreen;
