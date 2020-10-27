import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import { Button } from "react-bootstrap";

function Contact() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div>
      <Waypoint
        onEnter={({ previousPosition, currentPosition, event }) => {
          setIsTrue(true);
        }}
        onLeave={({ previousPosition, currentPosition, event }) => {
          // setIsTrue(false);
        }}
      />
      <Slide direction="up" in={isTrue} timeout={2000}>
        <Paper elevation={4} className="ContactCard">
          <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={6}>
              <h3 className="AboutText">
                <QuestionAnswerIcon /> Contact Us
              </h3>{" "}
              <br />
              <h4 className="AboutText">
                <Button
                  variant="dark"
                  href="mailto:info@translation-factory.co.uk"
                >
                  <EmailIcon /> info@translation-factory.co.uk
                </Button>{" "}
                <br />
                <br />
                <PhoneIcon /> 07342325080 <br />
                <br />
                <LocationCityIcon /> London, UK
              </h4>
            </Grid>
            <Grid item xs={6} lg={6}>
              <img
                className="contactIcon"
                src="https://www.flaticon.com/svg/static/icons/svg/3617/3617117.svg"
                alt="contact-logo"
              />
            </Grid>
          </Grid>
        </Paper>
      </Slide>
    </div>
  );
}

export default Contact;
