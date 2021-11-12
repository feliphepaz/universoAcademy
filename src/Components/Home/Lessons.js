import React from 'react';
import './Lessons.css';
import meteor from '../../Assets/meteorito.png';

const modulos = ['introdução', 'contratando', 'integrando', 'desenvolvendo', 'gerenciando', 'promovendo/demitindo', 'oratória I', 'oratória II', 'comunicação assertiva', 'encerramento'];

const Lessons = () => {
    return (
        <section className='lessons'>
            <div className='container'>
                <h2>Uma grade curricular pensada em você</h2>
                <div className='lessons-container'>
                    <div className='course-about'>
                        <p>O curso consiste em 10 módulos que vão desde situações do dia a dia de um líder, como contratar e gerenciar, até técnicas de oratória e comunicação aplicada!</p>
                        <img src={meteor}></img>
                    </div>
                    <div className='course-progress'>
                        {modulos.map((mod, index) => (
                            <h3>Módulo {index + 1} - {mod}</h3>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lessons
