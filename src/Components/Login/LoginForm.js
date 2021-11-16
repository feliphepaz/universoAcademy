import React from 'react';
import Input from '../Form/Input'
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin({username: username.value, password: password.value});
        }
    }

    return (
        <section className='login-nav animeRight'>
            <h2>Login</h2>
            <form action='' className='login-form' onSubmit={handleSubmit}>
                <Input type='text' label='Usuário' name='usuario' {...username} />
                <Input type='password' label='Senha' name='senha' {...password} />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
                {error && <p className='error' style={{ 'marginTop': '10px', 'marginBottom': '0px' }}>{error}</p>}
                <Link className='lost-link' to='perdi-senha'>Perdeu a senha?</Link>
            </form>
            <div className='login-create-box'>
                <p>Ainda não possui conta? Cadastre-se!</p>
                <Link className='cta' to='cadastrar'>Cadastrar</Link>
            </div>
        </section>
    )
}

export default LoginForm
