import React from 'react'
import { Routes, Route, Navigate } from 'react-router';
import './Login.css';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';

const Login = () => {
    const { login } = React.useContext(UserContext);

    if (login === true) return <Navigate to="/conta" />
    return (
        <section className='login'>
            <div className='bg-img'></div>
            <div className='login-content'>
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='cadastrar' element={<LoginCreate />} />
                    <Route path='perdi-senha' element={<LoginPasswordLost />} />
                    <Route path='resetar-senha' element={<LoginPasswordReset />} />
                </Routes>
            </div>
        </section>
    )
}

export default Login
