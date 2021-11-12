import React from 'react'
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Conta from './Components/Conta/Conta';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                    <main className='AppBody'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="login/*" element={<Login />} />
                            <Route path="conta" element={<Conta />} />
                        </Routes>
                    </main>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App

