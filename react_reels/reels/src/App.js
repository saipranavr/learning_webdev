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
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;