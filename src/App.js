import React from "react";
import "./App.css";
import Home from "./pages/Home/index";
import Details from "./pages/Details/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
