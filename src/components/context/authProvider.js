import React, { createContext } from 'react';

import firebaseAuth from '../Firebase/firebaseAuth';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = firebaseAuth()
   
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;