import React from 'react';
import { Grid } from '@material-ui/core';
import { Wave } from 'components/ImageComponents/Wave';
import './styles/home.scss';

const Home = () => {
  return (
    <div className="home-wrapper">
      <section id="section-home">
        <Grid container>
          <div className="parallax-wrapper">
            <div className="slick-list">
              <div className="slick-track">
                <div className="single-slide">
                  <div className="banner-content">
                    <h4>Best IT Solution</h4>
                    <h1>
                      Get Right Solution <span className=""></span>
                    </h1>
                    <h2 />
                    <h3>For Business</h3>
                    <p></p>
                    <div className="slider-video-icon">
                      <a className="video-link-icon" href="#!">
                        <i className="fa-play"></i>
                      </a>
                      <span>IT Work</span>
                    </div>
                  </div>
                  <div className="bottom-image">
                    <Wave />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </section>
    </div>
  );
};

export default Home;
