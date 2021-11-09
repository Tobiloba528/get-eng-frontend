import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthScreen from "./screens/Auth/AuthScreen";
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <AuthScreen />
      </Route>
    </Switch>
  );
}

export default App;
