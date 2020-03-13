import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact patch="/" component={DashboardPage} />
      </Switch>
    </Router>
  );
};

export default App;
