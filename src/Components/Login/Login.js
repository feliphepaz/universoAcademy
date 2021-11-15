import React from 'react'
import { Routes, Route } from 'react-router';
import './Login.css';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
    return (
        <section className='login'>
            <div className='bg-img'></div>
            <div className='login-content'>
                <h2>{window.location.pathname.replace('/', '')}</h2>
                <div className='login-nav'>
                    <Routes>
                        <Route path='/' element={<LoginForm />} />
                        <Route path='cadastrar' element={<LoginCreate />} />
                        <Route path='perdi-senha' element={<LoginPasswordLost />} />
                        <Route path='resetar-senha' element={<LoginPasswordReset />} />
                    </Routes>
                </div>
            </div>
        </section>
    )
}

export default Login
