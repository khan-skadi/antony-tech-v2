import React from "react";
import { Typography } from "@material-ui/core";
import "./styles/landingPage.scss";

const LandingPage = () => {
  return (
    <div className="home-wrapper">
      <section id="home" className="section-home">
        <Typography variant="body1" align="center">
          Antony Tech
        </Typography>
      </section>
    </div>
  );
};

export default LandingPage;
