import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

function NavBar() {
return (
<nav>

  <ul>

    <li><NavLink to="/">Home</NavLink></li>

    <li><NavLink to="/bitcoinrates">BitCoin Rates</NavLink></li>

    <li><NavLink to="/about">About</NavLink></li>

  </ul>

</nav>
);
}
export default NavBar;