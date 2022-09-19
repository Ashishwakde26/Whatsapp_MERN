import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import Menu from '../Chat/Menu/Menu';
import ChatBar from '../Chat/Chat/ChatBar';


const dialogstyle = {
    height: "96%",
    width: "100%",
    marginTop: "5%",
    maxWidth:"100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}

const Chatdialog = () => {

    return (
        <Dialog
        open={true}
        PaperProps={{sx:dialogstyle}}
        hideBackdrop={true}
        >
            <Box sx={{display:"flex", height:"100%"}}>
                <Box sx={{width:"30%"}}>
                    <Menu />
                </Box>
                <Box sx={{width:"70%"}}>
                    <ChatBar />
                </Box>

            </Box>
        </Dialog>
    )
}

export default Chatdialog;