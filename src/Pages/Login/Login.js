import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={googleSignIn} className='btn btn-warning'>Google signin</button>
        </div>
    );
};

export default Login;