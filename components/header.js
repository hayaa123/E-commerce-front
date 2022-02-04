import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// const theme = createMuiTheme();


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar :{
        backgroundColor: 'red'
    }
  }));
  

export default function header() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

  return <>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>;
}
