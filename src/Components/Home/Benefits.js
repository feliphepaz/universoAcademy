import React from 'react';
import './Benefits.css'
import marte from '../../Assets/marte.png';
import netuno from '../../Assets/netuno.png';
import plutao from '../../Assets/plutao.png';
import terra from '../../Assets/terra.png';
import venus from '../../Assets/venus.png';

const Benefits = () => {
    return (
        <section className='benefits'>
            <div className='container'>
                <ul className='benefits-itens'>
                    <li data-anime='top'>
                        <img src={marte}></img>
                        <span>+ de 20hrs de vídeo</span>
                    </li>
                    <li data-anime='down'>
                        <img src={netuno}></img>
                        <span>assista quando quiser</span>
                    </li>
                    <li data-anime='top'>
                        <img src={plutao}></img>
                        <span>acesso vitalício</span>
                    </li>
                    <li data-anime='down'>
                        <img src={terra}></img>
                        <span>parcele em até 12x</span>
                    </li>
                    <li data-anime='top'>
                        <img src={venus}></img>
                        <span>conteúdo enriquecedor</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Benefits
