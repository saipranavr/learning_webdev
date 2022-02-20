import React,{useState,useEffect} from 'react';
import auth from '../firebase';
export const AuthContext = React.createContext();

export function Authcontextp({children}){
    const[currentUser,setUser] = useState();
    const[loading,setLoading] = useState(true);
    async function login(email,password){
        return await auth.signInWithEmailAndPassword(email,password);
    }
    async function signup(email,password){
        return await auth.createUserWithEmailAndPassword(email,password);
    }
    async function signOut(){
        return await auth.signOut();
    }
    useEffect(()=>{
        const unsub = auth.onAuthStateChanged((currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unsub()
        }
    },[])
    const store = {
        currentUser,
        signup,
        login,
        signOut
    }
    return(
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    )
}