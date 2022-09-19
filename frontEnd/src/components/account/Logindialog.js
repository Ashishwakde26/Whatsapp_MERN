import React, { useEffect } from 'react';
import { AppBar, Box, List, ListItem, styled, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { qrCodeImage } from '../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { AccountState } from '../../context/Accountprovider'
import { addUser } from '../../service/api';



const dialogstyle = {
    height: "96%",
    width: "59%",
    marginTop: "12%",
    maxWidth:"100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}

    const QRcode = styled('img')({
        margin:40
    })

    const Logindialog = () => {

    const { account, setaccount } = AccountState();

    const onLoginSuccess = (res) => {
        const decode = jwt_decode(res.credential);
        setaccount(decode);
        addUser(decode);
    }

    // useEffect(() => {
    //     onLoginSuccess();
    // })

    const onLoginError = (err) => {
        console.log(err);
    }

    return (
        
        <Dialog
            
            open={true}
            PaperProps={{sx:dialogstyle}}
            hideBackdrop={true}
        >
        <Box sx={{display:'flex', justifyContent:'space-between' }}>
            <Box sx={{marginTop:5, marginLeft:5}}>
                <Typography sx={{fontSize:"25px", color:"#525252", fontWeight:300, fontFamily:'inherit', marginBottom:"25px" }}>
                    To use whatsapp on your computer:
                </Typography>

                <List>
                    <ListItem sx={{fontSize:'18px', lineHeight:'28px', color:"var" }}>1. Open whatsapp on your phone</ListItem>
                    <ListItem sx={{fontSize:'18px', lineHeight:'28px', color:"var", marginTop:"5px" }}>2. Tap Menu or setting and select linked devices</ListItem>
                    <ListItem sx={{fontSize:'18px', lineHeight:'28px', color:"var", marginTop:"5px" }}>3. Point your phone to this screen and capture the code</ListItem>
                </List>
            </Box>

            <Box sx={{ position:'relative'}}>
                <QRcode
                height={250}
                width={250}
                src={qrCodeImage}
                 ></QRcode>
                <Box sx={{ position:'absolute', top:'40%', transform: 'translateX(25%)'}}>
                    <GoogleLogin 
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Box>
        </Box>
        </Dialog>
        
        )
    }

        export default Logindialog;