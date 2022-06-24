import { AppBar, Toolbar, Typography,Avatar, Button, ButtonGroup, Theme, withStyles,IconButton } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'
import Logo from '../Assets/logo2.png'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import './Navbar.css'

function Navbar() {
  
  return (
    <React.Fragment>
        <AppBar className='navbar' position='sticky'>
            <Toolbar>
              <Link to="/courses" style={{textDecoration:"none"}}>
                  <img src={Logo} alt="" width="100" height="30" />
              </Link>
           
              <div className='nav-buttons'>
                <Link to="/courses" style={{textDecoration:"none"}}>
                  <Button>COURSES</Button>
                </Link>
                <Link to="/wishlist"  style={{textDecoration:"none"}}>
                  <Button>MY WISHLIST</Button>
                </Link>
              </div>
              <Link to="/shoppingcart">
                <IconButton>
                  <ShoppingCartSharpIcon className='icon'/>
                </IconButton>
              </Link>
             
              <Link to="/profile">
                <IconButton>
                  <AccountBoxIcon className='icon' />
                </IconButton>
              </Link>

            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar