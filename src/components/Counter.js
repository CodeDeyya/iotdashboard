import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GridLoader from "react-spinners/GridLoader";

const useStyles = makeStyles({
  root: {
    padding: "10px",
    marginTop: "10px",
    marginLeft: "10px",
    backgroundColor: "#0072D2",
    color: "#FFFFFF",
    border: "3px solid #051435",
  },
  title: {
    fontSize: 14,
  },
  loader: {
    margin: "auto",
  },
});

function Counter({ category, count, loading }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {category}
          </Typography>
          {loading ? (
            <div>
              <GridLoader color={"#FFFFFF"} loading={loading} css="" />
            </div>
          ) : (
            <Typography variant="h3">{count}</Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default Counter;
