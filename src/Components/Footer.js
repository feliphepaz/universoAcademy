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
                    <a href='https://www.facebook.com/Universo-Academy-104939288625589' target='_blank'><img src={facebook}></img></a>
                    <a href='https://www.instagram.com/universoacademy_/' target='_blank'><img src={instagram}></img></a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
