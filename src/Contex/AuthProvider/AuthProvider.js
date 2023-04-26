import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);


    const googleSignIn = (provider) =>{
        return signInWithPopup(auth,provider);
    }
    const signInUser= (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const createSignInUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        googleSignIn,
        signInUser,
        createSignInUser,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;