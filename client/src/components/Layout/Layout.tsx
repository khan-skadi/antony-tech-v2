import React from 'react';
import { Container } from '@material-ui/core';
import LandingPage from 'components/LandingPage/LandingPage';
import Header from 'components/Header/Header';

import './styles/layout.scss';

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <div className="wrapper">
        <Header />
        <LandingPage />
      </div>
    </Container>
  );
};

export default Layout;
