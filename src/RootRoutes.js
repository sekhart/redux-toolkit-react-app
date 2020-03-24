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

const RootRoutes = () => {
  return (
    <Router>
      <Segment basic>
        <Navbar />
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/addProduct" component={ProductsPage} />
          <Redirect to="/" />
        </Switch>
      </Segment>
    </Router>
  );
};

export default RootRoutes;
