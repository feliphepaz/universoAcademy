import React from "react";
import './Header.css';
import logo from '../Assets/universoacademy.png';
import ilustration from '../Assets/astronauta.svg';

function Header() {
  return (
    <header className='header'>
      <div className='container header-top'>
        <a href='#'><img src={logo}></img></a>
        <nav className='menu'>
          <ul>
            <li><a href='#'>Saiba mais</a></li>
            <li><a href='#'>Tire suas dúvidas</a></li>
            <li><a className='btn' href='#'>Login</a></li>
            <li><a className='cta' href='#'>Faça parte!</a></li>
          </ul>
        </nav>
      </div>

      <section className='container banner'>
        <div className='banner-text'>
          <h1 className='display'>Seja um líder!</h1>
          <p>A Universo Academy é uma das primeiras plataformas do mercado focada em treinamento de lideranças.</p>
          <a href='#' className='cta'>Faça parte!</a>
        </div>
        <div className='ilustration'>
          <img src={ilustration}></img>
        </div>
          
      </section>
    </header>
  );
}

export default Header;
