import React from 'react'
import { Routes, Route } from 'react-router';
import './Login.css';
import Lead from './Lead';
import LeadSuccess from './LeadSuccess';

const Login = () => {
    return (
        <section className='login'>
            <div className='bg-img animate' data-anime='left'></div>
            <div className='login-content'>
                <Routes>
                    {/* <Route path='/' element={<LoginForm />} />
                    <Route path='cadastrar' element={<LoginCreate />} /> */}
                    <Route path='assine' element={<Lead />} />
                    <Route path='sucesso' element={<LeadSuccess />} />
                    {/* <Route path='perdi-senha' element={<LoginPasswordLost />} />
                    <Route path='resetar-senha' element={<LoginPasswordReset />} /> */}
                </Routes>
            </div>
        </section>
    )
}

export default Login
