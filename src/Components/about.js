import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Call, GitHub, LinkedIn, Mail } from "@material-ui/icons";
import "../index.css";
import React from "react";
import Education from "./education";
import Experience from "./experience";

const useStyle = makeStyles((theme) => ({
  cardStyle: {
    backgroundColor: "#37474F",
    borderRadius: 0,
    boxShadow: "2px 3px 20px rgba(0,0,0,0.16), 2px 3px 20px rgba(0,0,0,0.16)",
    paddingInline: 200,
    paddingBlock: 20,
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      paddingInline: 20,
      paddingBlock: 10,
    },
  },
  heading: {
    fontSize: "1.4em",
    color: "#c7c7c7",
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeading: {
    fontSize: "1em",
    letterSpacing: "0.9px",
    color: "#b5b5b5",
    textAlign: "center",
    marginTop: 20,
  },
  btn: {
    color: "#18F1F1",
    marginTop: 30,
    marginInline: 10,
    "&:hover": {
      transform: "scale(1.125)",
      transition: "all .3s",
    },
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
}));

function About(props) {
  const classes = useStyle();
  return (
    <div id="about">
      <Card className={classes.cardStyle} elevation={0}>
        <Typography className={classes.heading}>
          I am a  web Designer & Developer.
        </Typography>
        <Typography className={classes.subHeading}>
          I am a Computer science student who is in First year.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Experience />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Education />
          </Grid>
        </Grid>
        <div className={classes.justifyCenter}>
          <a
            href="https://github.com/Dev-Shannn"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton className={classes.btn}>
              <GitHub />
            </IconButton>
          </a>
          <a
            href="https://in.linkedin.com/in/nishant-prakash-pandey-2a819b323"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton className={classes.btn}>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="mailto:nishantpandeyy07@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton className={classes.btn}>
              <Mail />
            </IconButton>
          </a>
          <a href="tel:7300689054">
            <IconButton className={classes.btn}>
              <Call />
            </IconButton>
          </a>
        </div>
      </Card>
    </div>
  );
}

export default About;
