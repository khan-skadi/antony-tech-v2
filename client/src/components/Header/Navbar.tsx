import React from 'react';
import { Grid } from '@material-ui/core';
import './styles/navbar.scss';

const Navbar = () => {
  return (
    <div className="nav">
      <Grid container>
        <Grid item xs={4} sm={3} md={3}>
          <div className="logo">
            <a href="https://webitkurigram.com/wpv/cyber/">
              <img src="https://webitkurigram.com/wpv/cyber/wp-content/uploads/2020/04/2.png" alt="" />
            </a>
          </div>
        </Grid>
        <Grid item xs={8} sm={9} md={9}>
          <nav>
            <ul className="nav-menu">
              <li className="nav-menu-li">
                <a className="nav-menu-link" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-menu-li">
                <a className="nav-menu-link" href="#!">
                  Company
                </a>
              </li>
              <li className="nav-menu-li">
                <a className="nav-menu-link" href="#!">
                  Services
                </a>
              </li>
              <li className="nav-menu-li">
                <a className="nav-menu-link" href="#!">
                  Project
                </a>
              </li>
              <li className="nav-menu-li">
                <a className="nav-menu-link" href="#!">
                  Elements
                </a>
              </li>
              <li className="nav-menu-li">
                <a className="nav-menu-link" href="#!">
                  Blog
                </a>
              </li>
              <li className="nav-menu-li">
                <a className="nav-menu-link" href="#!">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
