import React from 'react'
import './Banner.css';
import ilustration from '../../Assets/astronauta.svg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='container banner'>
      <div className='banner-text'>
        <h1 className='display'>Seja um líder!</h1>
        <p>A Universo Academy é uma das primeiras plataformas do mercado focada em treinamento de lideranças.</p>
        <Link className='cta' to='login/cadastrar' onClick={() => window.scrollTo(0,0)}>Faça parte!</Link>
      </div>
      <div className='ilustration'>
        <img src={ilustration}></img>
      </div>
    </section>
  )
}

export default Banner
