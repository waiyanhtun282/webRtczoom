import React from 'react'
import {AppBar, Typography, makeStyles} from "@material-ui/core";
import Options from "./components/SideBar";
import Notification from './components/Notification';
import VideoPlayer from './components/VideoPlayer';
import SideBar from './components/SideBar';
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
         Video Chat
        </Typography>
      </AppBar>
       <VideoPlayer />
        <SideBar>
          <Notification />
        </SideBar>
    </div>
  )
}

export default App
