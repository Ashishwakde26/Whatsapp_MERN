import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import { AccountState } from '../../../../context/Accountprovider';
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {

    const { account } = AccountState();

    const Image = styled('img')({
        borderRadius: '50%',
        padding: "20px 0"
    })
    
    return (
        <>
        
            <Box sx={{display:"flex", justifyContent:"center", backgroundColor:"#f0f2f5" }}>
                <Image
                src={account.picture}
                height="200px"
                ></Image>
            </Box>

            <Box sx={{backgroundColor:"#ffffff", height:"100px"}}>
                <Typography sx={{padding:"12px 21px", color:"#008069"}}>Your name</Typography>
                <Box sx={{display:"flex", margin:"11px 22px", fontSize:"20px" }}>
                    <Typography>{account.name}</Typography>
                    <EditIcon
                    sx={{marginLeft:"auto"}}
                    />
                </Box>
            </Box>

            <Box sx={{backgroundColor:"#f0f2f5", padding:"20px 22px 40px"}}>
                <Typography sx={{fontSize:"14px", color:"#8696a0" }}>
                    This is not your username or pin. This name will be visible on your whatsapp contact
                </Typography>
            </Box>
            
            <Box sx={{backgroundColor:"#ffffff", height:"100px"}}>
                <Typography sx={{padding:"12px 21px", color:"#008069"}}>About</Typography>
                <Box sx={{display:"flex", margin:"11px 22px", fontSize:"20px" }}>
                    <Typography>Available</Typography>
                    <EditIcon
                    sx={{marginLeft:"auto"}}
                    />
                </Box>
            </Box>
        
        </>
    )
}

export default Profile;