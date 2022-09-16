import React from 'react';
import Logindialog from './account/Logindialog';
import { AppBar, Box, Toolbar } from '@mui/material';

const Messanger = () => {

    return (
        <Box sx={{height:"100vh", backgroundColor:"#DCDCDC"}}>
            <AppBar sx={{height:190, backgroundColor:"#00bfa5", boxShadow: "none"}}>
                <Toolbar>
                    Whatsapp
                </Toolbar>
            </AppBar>

            <Logindialog />
        </Box>
    )
}

export default Messanger;