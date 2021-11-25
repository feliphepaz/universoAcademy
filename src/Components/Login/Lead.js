import React from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

const Lead = () => {
    const email = useForm('email');

    const { error, loading } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        if (email.validate()) {
            // Yeh!
            let fetchData = {
                method: 'POST',
                body: JSON.stringify({ email: email.value, js: true }),
                headers: {"Content-Type": "application/json"}
            }
            fetch('/subscribe', fetchData)
                .then(res => {
                    if (res.ok) {
                        console.log('email cadastrado');
                    }
            })
        }
    }

    return (
        <section className='login-nav animate' data-anime='right'>
            <h2>Receba novidades!</h2>
            <form action='' className='login-form' onSubmit={handleSubmit}>
                <Input type='email' label='E-mail' name='email' id='email' {...email} />
                {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
                {error && <p className='error' style={{'marginTop': '10px', 'marginBottom' : '0px'}}>{error}</p>}
            </form>
        </section>
    )
}

export default Lead
