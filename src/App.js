import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Container, Dimmer, Grid, Loader, Segment } from "semantic-ui-react";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <Router>
      <Segment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Redirect to="/" />
        </Switch>
      </Segment>
    </Router>
  );
};

export default App;
