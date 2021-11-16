import React from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm('password');

    const { userLogin } = React.useContext(UserContext);
    const { loading, error, request } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        if (email.validate() && password.validate()) {
            const { url, options } = USER_POST({
                username: username.value,
                email: email.value,
                password: password.value,
            });
            const { response } = await request(url, options);
            if (response.ok) userLogin({ username: username.value, password: password.value });
        }
    }

    return (
        <section className='login-nav animate' data-anime='right'>
            <h2>Cadastre-se</h2>
            <form action='' className='login-form' onSubmit={handleSubmit}>
                <Input type='text' label='Usuário' name='usuario' {...username} />
                <Input type='email' label='E-mail' name='name' {...email} />
                <Input type='password' label='Senha' name='senha' {...password} />
                {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
                {error && <p className='error' style={{'marginTop': '10px', 'marginBottom' : '0px'}}>{error}</p>}
            </form>
        </section>
    )
}

export default LoginCreate
