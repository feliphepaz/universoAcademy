import React from 'react'
import './Banner.css';
import ilustration from '../../Assets/astronauta.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Banner = () => {
  const { toTop } = React.useContext(UserContext);

  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner-text animate' data-anime='left'>
          <h1 className='display'>Seja um líder!</h1>
          <p>A Universo Academy é uma das primeiras plataformas do mercado focada em treinamento de lideranças.</p>
          <Link className='cta' to='login/cadastrar' onClick={toTop}>Faça parte!</Link>
        </div>
        <div className='ilustration animate' data-anime='right'>
          <img src={ilustration}></img>
        </div>
      </div>
    </section>
  )
}

export default Banner
