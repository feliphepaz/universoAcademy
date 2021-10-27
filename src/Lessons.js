import React from 'react';
import './css/lessons.css';
import meteor from './img/meteorito.png';

const Lessons = () => {
    return (
        <section className='lessons'>
            <div className='container'>
                <h2>Uma grade curricular pensada em você</h2>
                <div>
                    <p>O curso consiste em 10 módulos que vão desde situações do dia a dia de um líder, como contratar e gerenciar, até técnicas de oratória e comunicação aplicada!</p>
                    <img src={meteor}></img>
                </div>
            </div>
        </section>
    )
}

export default Lessons
