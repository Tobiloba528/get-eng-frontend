import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthScreen from "./screens/Auth/AuthScreen";
import Dashboard from "./screens/Dashboard";
import ProfileScreen from "./screens/ProfileScreen";
import HomePage from "./screens/Auth/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginScreen from "./screens/Auth/LoginScreen";
import SignupScreen from "./screens/Auth/SignupScreen";
import JobsScreen from "./screens/JobsScreen";
import ForgotPassword from "./screens/Auth/ForgotPassword";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/profile">
          <ProfileScreen />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/forgot_password">
          <ForgotPassword />
        </Route>
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
}

export default App;
