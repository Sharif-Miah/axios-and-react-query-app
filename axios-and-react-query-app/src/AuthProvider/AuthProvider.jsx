/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerWithEmailAndPassword = async (email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setLoading(true);
    return await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    registerWithEmailAndPassword,
    signIn,
    user,
    loading,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;