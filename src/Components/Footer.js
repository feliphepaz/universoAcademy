import React from 'react'
import './Footer.css';
import logo from '../Assets/universoacademy.png';
import facebook from '../Assets/facebook.svg';
import twitter from '../Assets/twitter.svg';
import instagram from '../Assets/instagram.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <img src={logo}></img>
                <p>
                    Universo Academy 2021.
                    <br></br>
                    Todos os direitos reservados.
                </p>
                <nav className='social'>
                    <a href='#'><img src={facebook}></img></a>
                    <a href='#'><img src={twitter}></img></a>
                    <a href='#'><img src={instagram}></img></a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
