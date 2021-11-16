/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css';
import logo from '../Assets/universoacademy.png';
import Banner from "./Home/Banner";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useLocation } from "react-router";

function Header() {
  const { data, userLogout, toTop } = React.useContext(UserContext);
  const [ scroll, setScroll ] = React.useState(false);
  const location = useLocation();

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 600) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  });

  return (
    <header className={location.pathname === '/' && !scroll ? 'header expand' : 'header'}>
      <div className='container header-top'>
        <Link to='/' onClick={toTop}><img src={logo} alt=''></img></Link>
        <nav className='menu'>
          <ul>
            <li><Link to='/'>Saiba mais</Link></li>
            <li><Link to='/'>Tire suas dúvidas</Link></li>
            <li>
              {data ?
                <Link className='btn' to='conta' onClick={toTop}>{data ? 'Ver aulas' : 'Login'}</Link>
                :
                <Link className='btn' to='login' onClick={toTop}>Login</Link>}
            </li>
            <li>
              {data ?
                <div class='logged'>
                  <legend class='username-header'>{data.username}</legend>
                  <Link className='btn' to='login' onClick={userLogout}>Sair</Link>
                </div>
                :
                <Link className='cta' to='login/cadastrar' onClick={toTop}>Faça parte!</Link>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
