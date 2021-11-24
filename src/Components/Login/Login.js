import React from 'react'
import { Routes, Route, Navigate } from 'react-router';
import './Login.css';
import Lead from './Lead';

const Login = () => {
    return (
        <section className='login'>
            <div className='bg-img animate' data-anime='left'></div>
            <div className='login-content'>
                <Routes>
                    {/* <Route path='/' element={<LoginForm />} />
                    <Route path='cadastrar' element={<LoginCreate />} /> */}
                    <Route path='assine' element={<Lead />} />
                    {/* <Route path='perdi-senha' element={<LoginPasswordLost />} />
                    <Route path='resetar-senha' element={<LoginPasswordReset />} /> */}
                </Routes>
            </div>
        </section>
    )
}

export default Login
