import React from 'react';
import Logindialog from './account/Logindialog';
import { AppBar, Box, Toolbar } from '@mui/material';
import { AccountState } from '../context/Accountprovider';
import Chatdialog from './account/Chatdialog';
import Dialog from '@mui/material/Dialog';

const Messanger = () => {

    const { account, setaccount } = AccountState();

    console.log(account);

    return (
        <Box sx={{height:"100vh", backgroundColor:"#DCDCDC"}}>

            {
                account ? 
                <>
                    <AppBar sx={{height:155, backgroundColor:"#00A884", boxShadow: "none"}}>
                        <Toolbar>

                        </Toolbar>
                    </AppBar>
                    <Chatdialog />

                </> : 
                <>
                    <AppBar sx={{height:190, backgroundColor:"#00bfa5", boxShadow: "none"}}>
                        <Toolbar>

                        </Toolbar>
                    </AppBar>
                    <Logindialog />
                </>
            }
            
        </Box>
    )
}

export default Messanger;