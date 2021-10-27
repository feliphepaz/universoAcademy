import React from 'react';
import './css/guests.css';
import augusto from './img/lider1.png';
import daniel from './img/lider2.png';
import raj from './img/lider3.png';
import cinthia from './img/lider4.png';
import wilton from './img/lider5.png';
import rogerio from './img/lider6.png';
import beatriz from './img/lider7.png';
import gustavo from './img/lider8.png';
import carlos from './img/lider9.png';
import edicleusa from './img/lider10.png';

const leaders = [
    {
        nome: 'Augusto Elói',
        cargo: 'Fundador da Abragi',
        imagem: augusto,
    }, {
        nome: 'Daniel Lopes',
        cargo: 'Diretor da Elux',
        imagem: daniel,
    }, {
        nome: 'Raj Radesh',
        cargo: 'C.E.O da Kostom',
        imagem: raj,
    }, {
        nome: 'Cinthia Bernardi',
        cargo: 'Palestrante',
        imagem: cinthia,
    }, {
        nome: 'Wilton Gomes',
        cargo: 'C.E.O da Brazilian TI',
        imagem: wilton,
    }, {
        nome: 'Rogério Braga',
        cargo: 'Co-Fundador da Elux',
        imagem: rogerio,
    }, {
        nome: 'Beatriz Silva',
        cargo: 'Sócia da Roma Food',
        imagem: beatriz,
    }, {
        nome: 'Gustavo Hoffman',
        cargo: 'Palestrante',
        imagem: gustavo,
    }, {
        nome: 'Carlos Hernández',
        cargo: 'Diretor da Kostom',
        imagem: carlos,
    }, {
        nome: 'Edicleusa Gonçalves',
        cargo: 'Palestrante',
        imagem: edicleusa,
    }    
]

const Guests = () => {
    return (
        <section className='guests'>
            <div className='container'>
                <p>Conheça os nossos mentores!</p>
                <h2>A casa dos líderes</h2>
                <ul className='leaders'>
                    {leaders.map((lead) => (
                        <li style={{backgroundImage: `url(${lead.imagem})`}}>
                            <span>{lead.cargo}</span>
                            <h3>{lead.nome}</h3>
                        </li>
                    ))}
                </ul>
                <p className='call'>Não perca essa chance e se inscreva agora mesmo. É gratuito!</p>
                <a className='cta' href='#'>Faça parte!</a>
            </div>
        </section>
    )
}

export default Guests
