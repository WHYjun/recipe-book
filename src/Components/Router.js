import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import Cuisine from "../Routes/Cuisines";

const Router = () => (
  <HashRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/recipe/:id" component={Detail} />
        <Route path="/cuisine" component={Cuisine} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </HashRouter>
);

export default Router;
