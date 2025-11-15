import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import CurrencyConverter from "./KalkulatorMataUang";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        {/* Redirect dari "/" ke "/convert" */}
        <Route exact path="/">
          <Redirect to="/convert" />
        </Route>

        {/* Route utama */}
        <Route path="/convert" component={CurrencyConverter} />
      </Switch>
    </Router>
  );
}

export default App;
