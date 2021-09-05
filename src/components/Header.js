import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  head: {
    backgroundColor: "#0072D2",
  },
  root: {
    padding: "10px",
    backgroundColor: "#0072D2",
    color: "#FFFFFF",
    alignItems: "center",
    margin: "auto",
  },
  title: {
    fontSize: 14,
  },
});
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.head}>
          <Toolbar className={classes.root}>
            <img src={"/logo.png"} height="40px" />
            <Typography>EQUIPMENT DASHBOARD</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
