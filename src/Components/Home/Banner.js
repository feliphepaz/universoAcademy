import React from 'react'
import './Banner.css';
import ilustration from '../../Assets/astronauta.svg';

const Banner = () => {
  return (
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
  )
}

export default Banner
