import React from 'react';
import Home from 'components/Home/Home';
import './styles/landingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <section id="landing-page" className="section-landing-page">
        <Home />
      </section>
    </div>
  );
};

export default LandingPage;
