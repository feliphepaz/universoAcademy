import React from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Lead = () => {
    const navigate = useNavigate();
    const firstName = useForm('');
    const phone = useForm('');
    const email = useForm('email');

    React.useEffect(() => {
            if (window.localStorage.getItem('subscribed')) {
            navigate('sucesso');
        }
    }, [navigate])

    const { error, loading } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        if (email.validate()) {
            // Yeh!
            let fetchData = {
                method: 'POST',
                body: JSON.stringify({ firstName: firstName.value, phone: phone.value, email: email.value, js: true }),
                headers: {"Content-Type": "application/json"}
            }
            fetch('/subscribe', fetchData)
                .then(res => {
                    if (res.ok) {
                        navigate('sucesso');
                        window.localStorage.setItem('subscribed', 'true');
                    }
            })
        }
    }

    return (
        <section className='login'>
            <div className='bg-img animate' data-anime='left'></div>
            <div className='login-content'>
                <section className='login-nav animate' data-anime='right'>
                    <h2>Receba novidades!</h2>
                    <p>A Universo Academy chega em breve para você como referência de um curso completo focado em liderança. Para não perder o lançamento, insira os seus dados abaixo e te deixaremos atualizado.</p>
                <form action='' className='login-form' onSubmit={handleSubmit}>
                    <Input type='text' label='Nome' name='firstName' id='first-name' {...firstName} />
                    <Input type='tel' label='Telefone' name='phone' id='phone' {...phone} />
                    <Input type='email' label='E-mail' name='email' id='email' {...email} />
                    <Button>Assinar</Button>
                    {error && <p className='error' style={{'marginTop': '10px', 'marginBottom' : '0px'}}>{error}</p>}
                </form>
        </section>
            </div>
        </section>
    )
}

export default Lead
