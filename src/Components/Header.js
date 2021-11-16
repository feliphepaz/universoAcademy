/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css';
import logo from '../Assets/universoacademy.png';
import openMenu from '../Assets/ellipsis.png';
import closeMenu from '../Assets/close.png';
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useLocation } from "react-router";

function Header() {
  const { data, userLogout } = React.useContext(UserContext);
  const [ scroll, setScroll ] = React.useState(false);
  const [ menuMobile, setMenuMobile ] =  React.useState(false);
  const [ handleMenu, setHandleMenu ] = React.useState(false);
  const [ pageWidth, setPageWidth ] = React.useState(window.innerWidth);
  const location = useLocation();

  function toTopAndClose() {
    window.scrollTo(0,0);
    setHandleMenu(false);
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 600) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  });

  window.addEventListener('resize', () => {
    setPageWidth(window.innerWidth);
  })

  React.useEffect(() => {
    if (pageWidth < 1152) {
      setMenuMobile(true);
    } else {
      setMenuMobile(false);
    }
  }, [pageWidth]);

  return (
    <header className={location.pathname === '/' && !scroll ? 'header expand' : 'header'}>
      <div className='container header-top'>
        <Link to='/' onClick={toTopAndClose}><img src={logo} alt=''></img></Link>
        <nav className='menu'>
        <button className='menu-mobile' style={menuMobile ? {'display': 'block'} : {'display': 'none'}} onClick={() => setHandleMenu(handleMenu => !handleMenu)}><img src={handleMenu ? closeMenu : openMenu}></img></button>
          <ul style={handleMenu || !menuMobile ? {'display': 'flex'} : {'display': 'none'}}>
            <li><Link to='/'>Saiba mais</Link></li>
            <li><Link to='/'>Tire suas dúvidas</Link></li>
            <li>
              {data ?
                <Link className='btn' to='conta' onClick={toTopAndClose}>{data ? 'Ver aulas' : 'Login'}</Link>
                :
                <Link className='btn' to='login' onClick={toTopAndClose}>Login</Link>}
            </li>
            <li>
              {data ?
                <div class='logged'>
                  <legend class='username-header'>{data.username}</legend>
                  <Link className='btn' to='login' onClick={() => {userLogout(); toTopAndClose();}}>Sair</Link>
                </div>
                :
                <Link className='cta' to='login/cadastrar' onClick={toTopAndClose}>Faça parte!</Link>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
