import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/global.css';
import '../styles/pages/landing.css';

import logoImg from '../assets/logo.svg'

function Landing() {
    return (
        <div id="landing-page">

      <div className="content-wrapper">
        <img src={logoImg} alt="happy"/>

        <main>
          <h1>Leve felicidades para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São José</strong>
          <span>Santa Catarina</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="(0, 0, 0, 0.6)" />
        </Link>

      </div>
    </div>
    );
}

export default Landing;