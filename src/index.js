import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './css/base.css'
import Benefits from './Benefits';
import About from './About';
import Lessons from './Lessons';
import Guests from './Guests';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Benefits />
    <About />
    <Lessons />
    <Guests />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
