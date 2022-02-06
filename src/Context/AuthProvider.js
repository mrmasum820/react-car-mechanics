import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allConatext = useFirebase();
    return (
        <AuthContext.Provider value={allConatext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;