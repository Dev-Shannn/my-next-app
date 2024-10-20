import { Card, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  divider: {
    width: 200,
    height: 1,
    backgroundColor: "#C7C7C7",
    marginBottom: 40,
    marginTop: -20,
    opacity: "0.3",
    [theme.breakpoints.down("sm")]: {
      width: 175,
      marginTop: -10,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      marginTop: -10,
    },
  },
  media: {
    height: 200,
    width: "100%",
    marginTop: 15,
  },
  cardStyle: {
    padding: 10,
    backgroundColor: "#37474F",
    borderRadius: 0,
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all 1s",
    },
  },
  title: {
    fontSize: "1em",
    color: "#18FFFF",
    letterSpacing: 1,
    fontFamily: "Azeret Mono",
  },
  viewBtn: {
    marginLeft: "auto",
    color: "#949494",
    cursor: "pointer",
  },
  btn: {
    marginTop: 40,
    backgroundColor: "#18F1F1",
    color: "#000",
  },
  flex: {
    display: "flex",
  },
}));

const MyWork = [
  {
    title: "Nishant",
    img: "/doorest.PNG",
    
  },
  {
    title: "my project 1st",
    img: "/login-academy.PNG",
    
  },
  {
    title: "Project 2",
    img: "/sell-my-car.PNG",
    
  },
];

function Work(props) {
  const classes = useStyle();
  return (
    <div id="myWork">
      <Typography class="Roboto-Slab letter-spacing grey-text main-heading mt-p80 lh">
        WORKS
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        {MyWork.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <a
              href={item.link}
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Card className={classes.cardStyle} elevation={0}>
                <div className={classes.flex}>
                  <Typography className={classes.title}>
                    {item.title}
                  </Typography>
                  <ArrowForward className={classes.viewBtn} />
                </div>
                <img alt="projects" src={item.img} className={classes.media} />
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
      {/* <Button className={classes.btn} variant="contained">
        View All Works
      </Button> */}
    </div>
  );
}

export default Work;
