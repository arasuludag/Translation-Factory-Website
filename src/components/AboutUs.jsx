import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import Grid from "@material-ui/core/Grid";

import SmallCard from "./SmallCard";

function AboutUs() {
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

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          spacing={10}
          s={10}
          md={10}
          lg={8}
        >
          <SmallCard
            image="https://www.flaticon.com/svg/static/icons/svg/2745/2745759.svg"
            alt="London-icon"
            text="We are a small translation company based in London, offering Turkish-English translation, interpreting, and localisation services."
            timeout={700}
            in = {isTrue}
          />

          <SmallCard
            image="https://www.flaticon.com/svg/static/icons/svg/2850/2850737.svg"
            alt="Quality-icon"
            text="We provide top quality English to Turkish and Turkish to English translation services with our 10 years of expertise in the area."
            timeout={900}
            in = {isTrue}
          />

          <SmallCard
            image="https://www.flaticon.com/svg/static/icons/svg/850/850960.svg"
            alt="Fast-icon"
            text="We offer fast turnaround translation for affordable and flexible prices."
            timeout={1100}
            in = {isTrue}
          />

          <SmallCard
            image="https://www.flaticon.com/svg/static/icons/svg/2722/2722051.svg"
            alt="Confidential-icon"
            text="Confidentiality is our top priority. We pride ourselves in protecting our customers’ confidential data and providing affordable, top quality translation services."
            timeout={1300}
            in = {isTrue}
          />

          <SmallCard
            image="https://www.flaticon.com/svg/static/icons/svg/2910/2910061.svg"
            alt="Contact-icon"
            text="We work fast and efficiently and make sure to deliver the best possible result in the shortest amount of time possible. Please feel free to contact us for a quote."
            timeout={1500}
            in = {isTrue}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;
