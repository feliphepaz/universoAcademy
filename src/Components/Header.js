/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css';
import logo from '../Assets/universoacademy.png';
import Banner from "./Home/Banner";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useLocation } from "react-router";

function Header() {
  const { data, userLogout } = React.useContext(UserContext);
  const location = useLocation();

  return (
    <header className={location.pathname === '/' ? 'header expand' : 'header'}>
      <div className='container header-top'>
        <Link to='/'><img src={logo} alt=''></img></Link>
        <nav className='menu'>
          <ul>
            <li><Link to='/'>Saiba mais</Link></li>
            <li><Link to='/'>Tire suas dúvidas</Link></li>
            <li>
              {data ?
                <Link className='btn' to='conta'>{data ? 'Ver aulas' : 'Login'}</Link>
                :
                <Link className='btn' to='login'>Login</Link>}
            </li>
            <li>
              {data ?
                <Link className='btn' to='login' onClick={userLogout}>Sair</Link>
                :
                <Link className='cta' to='login'>Faça parte!</Link>}
            </li>
          </ul>
        </nav>
      </div>
      {location.pathname === '/' && <Banner />}
    </header>
  );
}

export default Header;
