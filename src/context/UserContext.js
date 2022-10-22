import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext([]);

const UserProvider = ({children}) => {
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const signUp = async (email, password) => {
        setError('');

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        }
        catch(err){
            if (err.code === "auth/email-already-exists") {
                setError('El email ya existe');
            }
            else if (err.code === "auth/invalid-email") {
                setError('El email o la contraseña es inválida');
            }
            else if (err.code === "auth/invalid-password") {
                setError('El email o la contraseña es inválida');
            }
            else if (err.code === "auth/weak-password") {
                setError('La contraseña debe tener al menos 6 caracteres');
            }
            else {
                setError(err.code);
            };           
        };
    };

    const signIn = async (email, password) => {
        setError('')
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            if (err.code === "auth/user-not-found") {
                setError('El usuario no existe');
            }
            else {
                setError(err);       
            }
        };      
    };

    const logOut = () => {
        signOut(auth);
    };
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);
    

  return (
    <UserContext.Provider value={{signUp, error, signIn, user, logOut}}>{children}</UserContext.Provider>
  );
};

export default UserProvider;