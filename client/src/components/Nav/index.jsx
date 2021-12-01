import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
  });

  const LinkRef = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>)
  
  export default function BottomAppBar() {
    return (
      <React.Fragment>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="home" LinkComponent={LinkRef} to="/">
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="menu" LinkComponent={LinkRef} to="/menu">
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit" LinkComponent={LinkRef} to="/me">
              <PersonIcon />
            </IconButton>
            <IconButton color="inherit" LinkComponent={LinkRef} to="/cart">
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }