import "./App.css";
import React, { useContext, useEffect } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Feed from "./components/Feed"
import { Authcontextp } from "./Context/AuthContext";
import PrivateRouter from './components/PrivateRouter'

function App() {
  return (
    <BrowserRouter>
      <Authcontextp>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRouter path="/" abc={Feed} />
        </Switch>
      </Authcontextp>
    </BrowserRouter>
  );
}
export default App;