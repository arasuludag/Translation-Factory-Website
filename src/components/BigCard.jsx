import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";

import Grid from "@material-ui/core/Grid";

function BigCard(props) {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div style={{marginTop: "100px"}}>


    <Slide direction="up" in={isTrue} timeout={props.timeout}>
        <div>


              <Grid container spacing={4}>
                <Grid item xs={5} md={4}>
                  <img className="icons" src={props.image} alt={props.alt} />
                </Grid>
                <Grid item xs={7} md={8}>

                      <h2 className="H3Title">{props.title}</h2>
                      <p className="long">{props.text}</p>
                </Grid>
              </Grid>


        </div>
      </Slide>

      <Waypoint
        onEnter={({ previousPosition, currentPosition, event }) => {
          setIsTrue(true);
        }}
        onLeave={({ previousPosition, currentPosition, event }) => {
         //setIsTrue(false);
        }}
      />
    </div>
  );
}

export default BigCard;
