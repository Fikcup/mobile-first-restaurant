import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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