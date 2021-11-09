import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

const MainScreen = () => {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default MainScreen;
