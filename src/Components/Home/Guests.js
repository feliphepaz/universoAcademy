import React from 'react';
import './Guests.css';
import augusto from '../../Assets/lider1.png';
import daniel from '../../Assets/lider2.png';
import raj from '../../Assets/lider3.png';
import cinthia from '../../Assets/lider4.png';
import wilton from '../../Assets/lider5.png';
import rogerio from '../../Assets/lider6.png';
import beatriz from '../../Assets/lider7.png';
import gustavo from '../../Assets/lider8.png';
import carlos from '../../Assets/lider9.png';
import edicleusa from '../../Assets/lider10.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const leaders = [
    {
        id: 1,
        nome: 'Augusto Elói',
        cargo: 'Fundador da Abragi',
        imagem: augusto,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.',
    }, {
        id: 2,
        nome: 'Daniel Lopes',
        cargo: 'Diretor da Elux',
        imagem: daniel,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.',
    }, {
        id: 3,
        nome: 'Raj Radesh',
        cargo: 'C.E.O da Kostom',
        imagem: raj,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.'
    }, {
        id: 4,
        nome: 'Cinthia Bernardi',
        cargo: 'Palestrante',
        imagem: cinthia,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.'
    }, {
        id: 5,
        nome: 'Wilton Gomes',
        cargo: 'C.E.O da Brazilian TI',
        imagem: wilton,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.'
    }, {
        id: 6,
        nome: 'Rogério Braga',
        cargo: 'Co-Fundador da Elux',
        imagem: rogerio,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.'
    }, {
        id: 7,
        nome: 'Beatriz Silva',
        cargo: 'Sócia da Roma Food',
        imagem: beatriz,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.'
    }, {
        id: 8,
        nome: 'Gustavo Hoffman',
        cargo: 'Palestrante',
        imagem: gustavo,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.'
    }, {
        id: 9,
        nome: 'Carlos Hernández',
        cargo: 'Diretor da Kostom',
        imagem: carlos,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.'
    }, {
        id: 10,
        nome: 'Edicleusa Gonçalves',
        cargo: 'Palestrante',
        imagem: edicleusa,
        biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus quam vitae feugiat viverra.'
    }    
]

const Guests = () => {
    const { toTop } = React.useContext(UserContext);

    return (
        <section className='guests'>
            <div className='container'>
                <p>Conheça os nossos mentores!</p>
                <h2>A casa dos líderes</h2>
                <ul className='leaders'>
                    {leaders.map((lead) => (
                        <li key={lead.id} style={{background: `url(${lead.imagem}) no-repeat center center`}} data-anime={lead.id %2 == 0 ? 'down' : 'top'}>
                            <span>{lead.cargo}</span>
                            <h3>{lead.nome}</h3>
                            <p>{lead.biografia}</p>
                        </li>
                    ))}
                </ul>
                <p className='call'>Não perca essa chance e se inscreva agora mesmo. É gratuito!</p>
                <Link className='cta' to='assine/sucesso' onClick={toTop}>Faça parte!</Link>
            </div>
        </section>
    )
}

export default Guests
