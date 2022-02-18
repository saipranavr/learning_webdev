import React from 'react';
import auth from '../firebase';

const AuthContext = React.createContext();
export function AuthProvider({children}){
    const[currentUser,setUser] = useState();
    const[loading,setLoading] = useState(true);
    async function login(email,password){
        return await auth.signInWithEmailAndPassword(email,password);
    }
    async function signOut(){
        return await auth.signOut();
    }
    const value = {
        login,
        signOut
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}