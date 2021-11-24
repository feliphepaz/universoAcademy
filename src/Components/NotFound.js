import React from 'react'
import './NotFound.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const NotFound = () => {
    const { toTop } = React.useContext(UserContext);

    return (
        <section className='not-found'>
            <div className='container'>
                <h1>Planeta não encontrado </h1>
                <p>Infelizmente não conseguimos achar a página que gostaria, sentimos muito por isso.</p>
                <Link className='btn' to='/' onClick={toTop}>Voltar à página principal</Link>
            </div>
        </section>
    )
}

export default NotFound
