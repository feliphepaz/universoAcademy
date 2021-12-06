import React from 'react';
import './FAQ.css';
import facebook from '../Assets/facebook.svg';
import twitter from '../Assets/twitter.svg';
import instagram from '../Assets/instagram.svg';
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';

const FAQ = () => {
    const { toTop } = React.useContext(UserContext);

    const [p1, setP1] = React.useState(false);
    const [p2, setP2] = React.useState(false);
    const [p3, setP3] = React.useState(false);
    const [p4, setP4] = React.useState(false);
    const [p5, setP5] = React.useState(false);

    return (
        <section className='faq'>
            <div className='container animate' data-anime='top'>
                <h2>Dúvidas frequentes</h2>
                <div className='faq-display'>
                    <div className='questions-answers'>
                        <p>A Universo Academy é um projeto que ainda está decolando, mas em breve chegaremos em nosso destino. Aqui você pode tirar a maioria das suas dúvidas. </p>
                        <ul className="faq-ul">
                            <li id="0">
                                <div className="question btn" onClick={() => setP1(!p1)}>
                                    <span>O que é a Universo Academy?</span>
                                    <div className="arrow">{p1 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p1 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Uma organização sem fins lucrativos para te transformar em um líder passando por todas as esferas do desenvolvimento pessoal.
                                </p>
                            </li>
                            <li id="1">
                                <div className="question btn" onClick={() => setP2(!p2)}>
                                    <span>O curso é gratuito?</span>
                                    <div className="arrow">{p2 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p2 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Essa primeira etapa do projeto é gratuito! Corra então para garantir a sua vaga.
                                </p>
                            </li>
                            <li id="2">
                                <div className="question btn" onClick={() => setP3(!p3)}>
                                    <span>Vocês emitem certificado?</span>
                                    <div className="arrow">{p3 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p3 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Ainda não. Como a plataforma ainda está em fase beta, essa é uma implementação que virá nas futuras atualizações.
                                </p>
                            </li>
                            <li id="3">
                                <div className="question btn" onClick={() => setP4(!p4)}>
                                    <span>Como funciona o curso?</span>
                                    <div className="arrow">{p4 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p4 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Se você já realizou algum outro curso EAD, você não terá problemas! A nossa plataforma consiste em diversas vídeo aulas separadas por módulos, e você pode voltar nas aulas quantas vezes quiser. 
                                </p>
                            </li>
                            <li id="4">
                                <div className="question btn" onClick={() => setP5(!p5)}>
                                    <span>Quando posso começar?</span>
                                    <div className="arrow">{p5 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p5 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Para participar, basta demonstrar o seu interesse <Link to='/assine' onClick={toTop}>aqui</Link>. Em breve te contaremos via e-mail quando você poderá acessar os módulos.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='more-questions'>
                        <p>Ainda possui alguma dúvida? Nos chame em nossas redes sociais!</p>
                        <nav className='social'>
                            <a href='https://www.facebook.com/Universo-Academy-104939288625589' target='_blank'><img src={facebook}></img></a>
                            <a href='https://www.instagram.com/universoacademy_/' target='_blank'><img src={instagram}></img></a>
                        </nav>
                    </div>   
                </div>
            </div>
        </section>
    )
}

export default FAQ
