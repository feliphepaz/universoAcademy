import React from 'react';
import './More.css';
import Agreement from '../Assets/agreement.png';
import Clock from '../Assets/clock.png';
import Globe from '../Assets/globe.png';
import People from '../Assets/people.png';
import Space from '../Assets/space.png';
import Observatory from '../Assets/observatory.png';
import Asteroid from '../Assets/asteroid.png';
import Galaxy from '../Assets/galaxy.png';

const More = () => {
    return (
        <section className='more'>
            <div className='container'>
                <div className='history'>
                    <h2 className='animate' data-anime='left'>Todos os planetas alinhados para o seu sucesso</h2>
                    <p className='animate' data-anime='right'>A Universo Academy é uma empresa que está alinhada ao <strong>desenvolvimento humano</strong>.
                    <br></br>
                    <br></br>
                    O que nos move é o propósito de promover a disseminação do conhecimento à toda sociedade fazendo com que a inclusão aconteça, as diferenças diminuam e o sucesso esteja ao alcance de todos.
                    <br></br>
                    <br></br>
                    Aqui <strong>conectamos pessoas</strong> de forma humanizada vislumbrando um futuro de realizações com base no maior e mais durável bem que podemos adquirir, o conhecimento.
                    <br></br>
                    <br></br>
                    Venha fazer parte desse <strong>universo de possibilidades</strong> que te farão um ser humano mais preparado.</p>
                </div>    
            </div>
            <div className='solution'>
                <div className='container'>
                    <div className='solution-data'>
                        <p data-anime='down'>Pensando em um mercado que tem:</p>
                        <ul>
                            <li data-anime='top'>
                                <p>72%</p>
                                <h3>Profissionais insatisfeitos com seu trabalho</h3>
                            </li>
                            <li data-anime='down'>
                                <p>89%</p>
                                <h3>Reclamam da falta de reconhecimento</h3>
                            </li>
                            <li data-anime='top'>
                                <p>78%</p>
                                <h3>Excesso de tarefas</h3>
                            </li>
                            <li data-anime='down'>
                                <p>62%</p>
                                <h3>Problemas de relacionamento</h3>
                            </li>
                        </ul>
                    </div>
                    <div className='solution-profiles' data-anime='down'>
                        <p>A solução está em avaliar o perfil de cada colaborador
                        fazendo com que o indivíduo experimente uma jornada
                        que passa paralelamente pelos 4 universos do ser humano:</p>
                        <ul>
                            <li>
                                <img src={People}></img>
                                <h3>Pessoal</h3>
                            </li>
                            <li>
                                <img src={Globe}></img>
                                <h3>Relacionamento</h3>
                            </li>
                            <li>
                                <img src={Agreement}></img>
                                <h3>Profissional</h3>
                            </li>
                            <li>
                                <img src={Clock}></img>
                                <h3>Qualidade de vida</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='stages'>
                <div className='container'>
                    <h2>Próximos passos</h2>
                    <p>A solução está em avaliar o perfil de cada colaborador
                    fazendo com que o indivíduo experimente uma jornada
                    que passa paralelamente pelos 4 universos do ser humano:</p>
                    <ul>
                        <li data-anime='left'>
                            <h3>
                                <span>
                                    1
                                </span>
                                Curso Online Gratuito
                            </h3>
                            <p>Como primeira etapa da Universo Academy, a nossa pretensão é estimular o conhecimento através de um curso gratuito com conteúdo enriquecedor e importante para a sua carreira.</p>
                            <div>
                                <img src={Space}></img>
                            </div>
                        </li>
                        <li data-anime='right'>
                            <h3>
                                <span>
                                    2
                                </span>
                                Evento Presencial
                            </h3>
                            <p>Temos também como objetivo a organização de um evento voltado à liderança, com grandes líderes do mercado em diversos segmentos. </p>
                            <div>
                                <img src={Observatory}></img>
                            </div>
                        </li>
                        <li data-anime='left'>
                            <h3>
                                <span>
                                    3
                                </span>
                                Curso Online Completo
                            </h3>
                            <p>Pensando no curso gratuito como um protótipo de algo muito maior, a nossa pretensão é desenvolver um curso que abranja todos os universos da liderança.</p>
                            <div>
                                <img src={Asteroid}></img>
                            </div>
                        </li>
                        <li data-anime='right'>
                            <h3>
                                <span>
                                    4
                                </span>
                                Expansão como Instituição de Ensino
                            </h3>
                            <p>Não descansaremos até expandir completamente esse universo de conhecimento. Aqui a Universo Academy se torna uma instituição de ensino completa.</p>
                            <div>
                                <img src={Galaxy}></img>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default More
