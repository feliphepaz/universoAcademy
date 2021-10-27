import React from 'react'
import './css/footer.css';
import logo from './img/universoacademy.png';
import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import instagram from './img/instagram.svg';

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
