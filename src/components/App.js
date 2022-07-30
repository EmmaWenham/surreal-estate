import "../styles/app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperty";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <header className="app-header">
        <h2>Surreal Estate</h2>
      </header>
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperties} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
