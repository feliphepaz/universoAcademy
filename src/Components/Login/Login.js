import React from 'react'
import { Routes, Route } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='cadastrar' element={<LoginCreate />} />
                <Route path='perdi-senha' element={<LoginPasswordLost />} />
                <Route path='resetar-senha' element={<LoginPasswordReset />} />
            </Routes>
        </div>
    )
}

export default Login
