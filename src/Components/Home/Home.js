import React from 'react'
import Benefits from './Benefits';
import About from './About';
import Lessons from './Lessons';
import Guests from './Guests';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Benefits />
            <About />
            <Lessons />
            <Guests />
        </div>
    )
}

export default Home
