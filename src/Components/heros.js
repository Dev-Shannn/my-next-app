import React from "react";
import "../index.css";
import { Typography, Grid, makeStyles, Button, Link } from "@material-ui/core";
import "animate.css";

const useStyle = makeStyles((theme) => ({
  root: {
    // minHeight: "100vh",
  },
  text1: {
    color: "#18FFFF",
    fontSize: "1.5em",
    lineHeight: 0,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      paddingTop: 100,
      marginLeft: 15,
      textShadow: "0.75px 1.25px 1.5px #18ffff",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
      marginLeft: 5,
    },
  },
  img: {
    paddingTop: 50,
    [theme.breakpoints.down("md")]: {
      paddingTop: 75,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "100%",
      width: "100%",
    },
  },
  knowMore: {
    margin: "40px 0 0 20px",
    [theme.breakpoints.down("sm")]: {
      margin: 25,
    },
  },
  knowMore_btn: {
    color: "#ffffff",
    padding: "10px 40px",
    backgroundColor: "#707070",
    margin: "10px 20px",
    borderRadius: 5,
    fontFamily: "Azeret Mono",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#18FFFF",
      color: "#707070",
      transition: "all .6s",
      textDecoration: "none",
    },
  },
}));

function Heros(props) {
  const classes = useStyle();
  return (
    <div className={classes.root} id="home">
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography className={classes.text1}>Hi There, I'm</Typography>
          <Typography class="Roboto-Slab letter-spacing grey-text heading lh mt-60 animate">
            Nishant pandey
          </Typography>
          <Typography class="Azeret-Mono grey-text subtitle">
            Front-End Developer & Web Designer
          </Typography>
          <div className={classes.knowMore}>
            <Link to="home" className={classes.knowMore_btn}>
              Know More
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.img}>
            <img
              class="ml-n50 mb-n5 "
              className={classes.image}
              src="/amit1.png"
              alt="avatar"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Heros;
