import { Avatar, Box, Divider, styled, Typography} from '@mui/material';
//import { Box, styled } from '@mui/system';
import React from 'react';

const Friend = ({ user }) => {


    const Image = styled('img')({
        height: "60px",
        width: "60px",
        borderRadius: "50%",
        padding: "0px 15px 0px 13px"
    })

    return (
        <>
        <Box sx={{display:"flex", height:"71px", alignItems:"center" }}>
            <Image
            src={user.picture}
            height={65}
             />
            <Box sx={{display:"flex", 
            flexDirection:"column", 
            justifyContent: "center",
            width: "100%",
            height: "71px",
            borderTop:"1px solid #e9edef" }}>
            <Typography>{user.name}</Typography>
            </Box>
        </Box>
        
        </>
    )
}

export default Friend;