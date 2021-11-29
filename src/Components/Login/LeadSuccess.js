import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LeadSuccess = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
            if (!window.localStorage.getItem('subscribed')) {
            navigate('/assine');
        }
    }, [navigate])

    return (
        <section className='login'>
            <div className='bg-img animate' data-anime='left'></div>
            <div className='login-content'>
                <section className='login-nav animate' data-anime='right'>
                    <h2>Obrigado!</h2>
                    <p>Em breve você receberá mais informações na sua caixa de entrada. Até mais!</p>
                </section>
            </div>
        </section>
    )
}

export default LeadSuccess
