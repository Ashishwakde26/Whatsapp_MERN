import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, Typography } from '@mui/material';
import Profile from './Profile';

const drawerstyle = {
    backgroundColor:"#f0f2f5",
    left: 29,
    top: 37,
    height:"95%",
    width: "30%",
    boxShadow:"none"
}

const Infodrawer = ({open, setOpen}) => {

    const handlerclose = () => {
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={handlerclose}
            PaperProps={ {sx:drawerstyle} }
            style={{zIndex: 1500}}
            >
            <Box sx={{height:"117px", backgroundColor:"#008069", display:"flex", 
                        color:"#fff"}}>
                
                    <ArrowBackIcon
                    onClick={() => setOpen(false)}
                    sx={{marginTop:"auto", fontSize:"31px", fontWeight:"500", padding:2}}/>
               
                <Typography sx={{marginTop:"auto",fontSize:"19px", fontWeight:"500", padding:2}}> Profile </Typography>
            </Box>
            <Profile />
        </Drawer>
    )
}

export default Infodrawer;