import React from 'react'
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Account from './Components/Account/Account';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                        <main className='AppBody'>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="login/*" element={<Login />} />
                                <Route path="conta" element={<Account />} />
                            </Routes>
                        </main>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    )
}

export default App

