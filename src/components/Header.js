import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { LOGO_CDN } from '../utilits/constants';


const Header = () => {
    return (
        <AppBar position="fixed" sx={{ background: 'transparent', marginBottom:"90px" }}>
            <Toolbar sx={{ flexGrow: 1 }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* Your logo goes here */}
                    <img src={LOGO_CDN} alt="logo" style={{ maxWidth: '100px' ,mixBlendMode:"darken"}} />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Button color='success' >Home</Button>
                <Button color="success">About</Button>
                <Button color="success" >Cart</Button>

                
               
            </Toolbar>
        </AppBar>
    );
}

export default Header;
