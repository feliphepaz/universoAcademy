import React from 'react'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../Api';

const LoginPasswordLost = () => {
    const email = useForm();
    const { data, loading, error, request } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        if (email.validate()) {
            const { url, options } = PASSWORD_LOST({
                login: email.value,
                url: window.location.href.replace('perdi-senha', 'resetar-senha'),
            })
            request(url, options);
        }
    }


    return (
        <section className='login-nav animeRight'>
            <h2>Perdeu a senha?</h2>
            {data ? <form className='login-form'><p style={{color: '#4c1'}}>{data}</p></form>
            :
            <form action='' className='login-form' onSubmit={handleSubmit}>
                <Input type='text' label='E-mail / Usuário' name='email' {...email} />
                {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar e-mail</Button>}
                {error && <p className='error' style={{'marginTop': '10px', 'marginBottom' : '0px'}}>{error}</p>}
            </form>}
        </section>
    )
}

export default LoginPasswordLost
