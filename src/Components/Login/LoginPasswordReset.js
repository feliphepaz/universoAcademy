import React from 'react'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../Api';
import { useNavigate } from 'react-router';

const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const password = useForm('password');
    const { error, loading, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');
        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });
            const { response } = await request(url, options);
            if (response.ok) navigate('/login');
        }
    }

    return (
        <section className='login-nav animeRight'>
            <h2>Resete a senha</h2>
            <form action='' className='login-form' onSubmit={handleSubmit}>
                <Input type='password' label='Nova senha' name='password' {...password} />
                {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
                {error && <p className='error' style={{'marginTop': '10px', 'marginBottom' : '0px'}}>{error}</p>}
            </form>
        </section>
    )
}

export default LoginPasswordReset
