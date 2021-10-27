import React from 'react';
import './css/benefits.css'
import marte from './img/marte.png';
import netuno from './img/netuno.png';
import plutao from './img/plutao.png';
import terra from './img/terra.png';
import venus from './img/venus.png';

const Benefits = () => {
    return (
        <section className='benefits'>
            <div className='container'>
                <ul className='benefits-itens'>
                    <li>
                        <img src={marte}></img>
                        <span>+ de 20hrs de vídeo</span>
                    </li>
                    <li>
                        <img src={netuno}></img>
                        <span>assista quando quiser</span>
                    </li>
                    <li>
                        <img src={plutao}></img>
                        <span>acesso vitalício</span>
                    </li>
                    <li>
                        <img src={terra}></img>
                        <span>parcele em até 12x</span>
                    </li>
                    <li>
                        <img src={venus}></img>
                        <span>conteúdo enriquecedor</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Benefits
