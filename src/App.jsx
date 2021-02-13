import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Empleos from "./pages/Empleos";
import Contact from "./pages/Contact";
import RegistrarUsuario from "./pages/RegistrarUsuario";
import LogIn from "./pages/LogIn";
import RecuperarPassword from "./pages/RecuperarPassword";
import UserProfile from "./pages/UserProfile";

import Admin from "./admin/pages/Admin";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/empleos" component={Empleos} />
          <Route path="/contact" component={Contact} />
          <Route path="/registrar-usuario" component={RegistrarUsuario} />
          <Route path="/login" component={LogIn} />
          <Route path="/recuperar-password" component={RecuperarPassword} />
          <PrivateRoute path="/user-profile" component={UserProfile} />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
