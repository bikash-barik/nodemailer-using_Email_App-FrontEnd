import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Componets/Nav";
import EmailSand from "./Componets/EmailSand";
import ValidEmailsPart from "./Componets/ValidEmailsPart";
import DoaminCountry from "./Componets/DoaminCountry";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/EmailSand" component={EmailSand} />
              <Route  path="/EmailValidator" component={ValidEmailsPart} />
              <Route  path="/DomainCountry" component={DoaminCountry} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
