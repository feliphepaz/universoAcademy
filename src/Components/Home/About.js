import React from 'react';
import './About.css';
import planet from '../../Assets/planeta.svg';

const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='about-text'>
                    <h2>A sua liderança começa aqui.</h2>
                    <p>Nascemos com foco e vontade em te fazer se comunicar melhor, e para isso, sabemos o quão é importante trabalharmos o seu espírito de liderança.
                    <br></br>
                    <br></br>
                    Em toda equipe ou empresa é preciso de um líder, e estamos aqui para te ajudar com isso. O curso de liderança é o primeiro passo de algo muito maior. 
                    <br></br>
                    <br></br>
                    Ele vem como a primeira etapa de um longo trabalho. Vem conhecer a gente!</p>
                    <a href='#' className='btn'>Saiba mais</a>
                </div>
                <div className='about-img'>
                    <img src={planet}></img>
                </div>
            </div>    
        </section>
    )
}

export default About
