import React from 'react';
import Fade from '@material-ui/core/Fade';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



function SmallCard(props) {

  return (
    <Fade in={props.in} timeout={props.timeout}>
        <Grid
        item xs={12} sm={8} s={6} md={6} lg={4}
        >
        <Paper elevation={4} className="SmallCard">
          <div style={{width: "90%", margin: "0 auto"}}>
          <br />
        <img className="iconsA1" src={props.image} alt={props.alt}/>
        <p className="AboutText">{props.text}</p>
        </div>
</Paper>
        </Grid>
        </Fade>
  );
}

export default SmallCard;
