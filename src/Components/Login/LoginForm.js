import React from 'react';
import Input from '../Form/Input'
import Button from '../Form/Button';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('https://formulabor.com.br/universo-api/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const resolve = await response.json();
        console.log(resolve);
    }


    return (
        <form action='' className='login-form' onSubmit={handleSubmit}>
            <Input type='text' label='Usuário' name='usuario' value={username} change={({target}) => setUsername(target.value)} />
            <Input type='password' label='Senha' name='senha' value={password} change={({target}) => setPassword(target.value)} />
            <Button>Entrar</Button>
        </form>
    )
}

export default LoginForm
