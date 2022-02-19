import './App.css';
import React,{useContext,useEffect} from 'react';
import {Switch,Route,BrowserRouter as Router,Redirect, BrowserRouter} from "react-router-dom";
import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App(){
  return(
    <BrowserRouter>
    <Switch>
        <Route to='/login' component={Login} />
        <Route to='/signup' component={Signup} />
      </Switch>
    </BrowserRouter>
    
  );
}
export default App;