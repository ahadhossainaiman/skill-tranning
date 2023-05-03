import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);


    const googleSignIn = (provider) =>{
        return signInWithPopup(auth,provider);
    }
    const signInUser= (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    const createSignInUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        return signOut(auth);
    }
    const verifiedEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
            if(currentUser===null|| currentUser.emailVerified){
                setUser(currentUser);
            }
            // setUser(currentUser);
            setLoader(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[user])


    const authInfo = {
        googleSignIn,
        signInUser,
        createSignInUser,
        user,
        logOut,
        loader,
        verifiedEmail,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;