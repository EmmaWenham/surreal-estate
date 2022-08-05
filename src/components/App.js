import "../styles/app.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperty";
import Sidebar from "./SideBar";

const App = () => {
  return (
    <div className="App">
      <div className="Navbar">
        <NavBar />
      </div>
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Body">
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperties} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
