import React from 'react';
import useHook from '../../components/context/useHook';
import firebaseAuth from '../../components/Firebase/firebaseAuth';

const Login = () => {
    const {handleGoogle}=useHook()
    return (
        <div>
            <button onClick={handleGoogle}>Login</button>
        </div>
    );
};

export default Login;