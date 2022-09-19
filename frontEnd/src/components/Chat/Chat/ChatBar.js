import { Box, styled } from '@mui/system';
import { emptyChatImage } from '../../constants/data';
import React from 'react';
import { Typography } from '@mui/material';

const ChatBar = () => {

    const Image = styled('img')({
        padding:"152px 264px 57px"
    })

    return (
        <Box sx={{backgroundColor:"#f0f2f5",height:"100%"}}>
            <Box>
                <Image
                height={265}
                src={emptyChatImage}
                >
                </Image>
            </Box>

            <Box sx={{textAlign:"center", color:"#667781"}}> 
                <Typography sx={{margin:"8px", fontSize:"39px", fontFamily:"sans-serif"}}>Whatsapp Web</Typography>
                <Typography>Send and receive messages without keeping your phone online.</Typography>
                <Typography>Use Whatsapp upto 4 linked devices and 1 phone at the same time.</Typography>
            </Box>
        </Box>
    )
}

export default ChatBar;