import React from "react";
import './Header.css';
import logo from '../Assets/universoacademy.png';
import Banner from "./Home/Banner";

function Header({ mode }) {
  return (
    <header className={mode === 'expand' ? 'header expand' : 'header'}>
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

      {mode === 'expand' ? <Banner /> : ''}
    </header>
  );
}

export default Header;
