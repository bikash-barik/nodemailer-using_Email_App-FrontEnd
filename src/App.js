import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home2";
import Nav from "./Componets/Nav";
import EmailSand from "./Componets/EmailSand";
import ValidEmailsPart from "./Componets/ValidEmailsPart";
import DoaminCountry from "./Componets/DoaminCountry";
import EmailExtract from "./Componets/EmailExtract";
import Test from "./Componets/Test"
function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <div>
          <div>
            <Switch>
              <Route exact path="/" component={Home2} />
              <Route exact path="/AddDomain" component={Home} />
              <Route exact path="/EmailSand" component={EmailSand} />
              <Route exact path="/EmailExtract" component={EmailExtract} />
              <Route  path="/EmailValidator" component={ValidEmailsPart} />
              <Route  path="/DomainCountry" component={DoaminCountry} />
              <Route  path="/test" component={Test} />


            </Switch>
            {/* <Home2/> */}
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
