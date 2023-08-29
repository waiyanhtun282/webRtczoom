import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const classes = useStyles();

  const { name, callAccepted,call, stream, myVideo, userVideo, callEnded } =
    useContext(SocketContext);
  return (
    <Grid container className={classes.gridContainer}>
      {/* Our own Video */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            ></video>
          </Grid>
        </Paper>
      )}

      {/* UserVideo */}
    {
    callAccepted && !callEnded && (
      <Paper className={classes.paper}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          {call.name || "Name"}
        </Typography>
        <video
          playsInline
          muted
          ref={userVideo}
          autoPlay
          className={classes.video}
        ></video>
      </Grid>
    </Paper>
    )
    }

      {/* Our User Vidoe */}
    </Grid>
  );
};

export default VideoPlayer;
