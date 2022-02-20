import React, { Component,useContext } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


function PrivateRouter(props) {
    let Component = props.abc;
    let { currentUser } = useContext(AuthContext)
    return (<Route {...props} render={(props) => {
        return currentUser != null ? <Component {...props}></Component> : 
        <Redirect to="/login"></Redirect>
    }}></Route>
    )
}

export default PrivateRouter;