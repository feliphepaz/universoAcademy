import React from 'react';
import './FAQ.css';
import facebook from '../Assets/facebook.svg';
import twitter from '../Assets/twitter.svg';
import instagram from '../Assets/instagram.svg';

const FAQ = () => {
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
                        <p>Vivamus dictum erat sapien, non auctor dolor condimentum at. Proin et mattis nibh, a sagittis ex. Integer sed placerat est, sit amet condimentum erat. Mauris tincidunt neque vitae ligula rutrum sodales.</p>
                        <ul className="faq-ul">
                            <li id="0">
                                <div className="question btn" onClick={() => setP1(!p1)}>
                                    <span>Em quanto tempo consigo tirar a minha CNH?</span>
                                    <div className="arrow">{p1 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p1 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Infelizmente, isso não depende de nós :(
                                <br></br>
                                Muitas das vezes os alunos não passam de primeira, e mesmo que passem, o processo da emissão da
                                carta é de responsabilidade do Detran.
                                </p>
                            </li>
                            <li id="1">
                                <div className="question btn" onClick={() => setP2(!p2)}>
                                    <span>Vocês atendem todas as categorias?</span>
                                    <div className="arrow">{p2 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p2 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                A maioria sim! Com exceção apenas da categoria E.
                                </p>
                            </li>
                            <li id="2">
                                <div className="question btn" onClick={() => setP3(!p3)}>
                                    <span>Vocês dão treinamento para habilitados?</span>
                                    <div className="arrow">{p3 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p3 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Sim, aqui na Hulk temos os melhores instrutores para te ensinar a dirigir mesmo após ter sido aprovado no
                                teste prático.
                                </p>
                            </li>
                            <li id="3">
                                <div className="question btn" onClick={() => setP4(!p4)}>
                                    <span>E se eu for reprovado?</span>
                                    <div className="arrow">{p4 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p4 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Não tem problema, facilitamos tudo para que você consiga refazer os testes em que foi reprovado.
                                </p>
                            </li>
                            <li id="4">
                                <div className="question btn" onClick={() => setP5(!p5)}>
                                    <span>Posso deixar presente para os instrutores/professores?</span>
                                    <div className="arrow">{p5 ? '▲' : '▼'}</div>
                                </div>
                                <p className={p5 ? 'answer answer-active animate' : 'answer'} data-anime='down'>
                                Não recusamos, inclusive, incentivamos! Hahahah :)
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='more-questions'>
                        <p>Ainda possui alguma dúvida? Nos chame em nossas redes sociais!</p>
                        <nav className='social'>
                            <a href='#'><img src={facebook}></img></a>
                            <a href='#'><img src={twitter}></img></a>
                            <a href='#'><img src={instagram}></img></a>
                        </nav>
                    </div>   
                </div>
            </div>
        </section>
    )
}

export default FAQ
