import React from "react";
import Scroll from "react-scroll";

import { Button } from "react-bootstrap";

import Fade from "@material-ui/core/Fade";

import Grid from "@material-ui/core/Grid";

function Hero(props) {
  return (
    <Fade in={true} timeout={1000}>
      <div className="HeroSection">
        <Grid
          container
          direction="row"
          justify="flex-start"
  alignItems="center"
          spacing={10}
        >
          <Grid item xs={12} lg={9}>
            <h1 className="HeroTitle">
              Turkish – English Language Services
            </h1>
            <h4 className="HeroText">
              We provide top quality English to Turkish and Turkish to English
              translation services with our 10 years of expertise in the area.
            </h4>

          </Grid>

        </Grid>
      </div>
    </Fade>
  );
}

export default Hero;
