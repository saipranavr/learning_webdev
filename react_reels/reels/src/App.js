import './App.css';
import React,{useContext,useEffect} from 'react';
import {Switch,Route,BrowserRouter as Router,Redirect, BrowserRouter} from "react-router-dom";
import Feed from './components/Feed';
import Login from './components/Login';
import Signup from './components/Signup';
// import AuthContext from './'

function App(){
  return(
    // <AuthProvider>
    //   <Router>
    //     <Switch>
    //       <Route path="/login" component={Login}></Route>
    //       <Route path="/signup" component={SignUp}></Route>
    //       <PrivateRoute path="/" exact component={Feed}></PrivateRoute>
    //     </Switch>
    //   </Router>
    // </AuthProvider>
    <BrowserRouter>
        <Signup />
    </BrowserRouter>
    
  )
}

// function PrivateRoute(parentProps){
//   let {currentUser} = useContext(AuthContext);
//   let Component = parentProps.component;
//   return(
//     <Route {...parentProps} render={
//       (parentProps)=>{
//         currentUser!=null ? <Component {...parentProps}></Component> : <Redirect to="/login"></Redirect>
//       }
//     }></Route>  
//   )

// }
export default App;