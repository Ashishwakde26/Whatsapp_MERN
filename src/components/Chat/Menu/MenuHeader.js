import { Box } from '@mui/material';
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { AccountState } from '../../../context/Accountprovider';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import { IconButton } from '@mui/material';
import Infodrawer from './Infodrawer/Infodrawer';


const MenuHeader = () => {

    const { account, setaccount } = AccountState();

    const [ opendrawer, setopendrawer] = useState(false);

    console.log(account);

    const toggledrawer = () => {
        console.log("Open the drawer");
        setopendrawer(true);
    }

    return (
        <>
            <Box sx={{display:"flex", padding:"7px", alignItems: "center", backgroundColor:"#f0f2f5" }}>
                
                <IconButton onClick={()=> toggledrawer()}>
                <Avatar  alt="My Avatar" src={account.picture} />
                </IconButton>

                <Box sx={{marginLeft:"auto"}}>
                    <IconButton sx={{width:"45px"}}>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton sx={{width:"45px"}}>
                        <MessageIcon />
                    </IconButton>

                    <IconButton sx={{width:"45px"}}>
                        <MoreVertIcon />
                    </IconButton >
                    
                </Box>
            </Box>
            <Infodrawer open={opendrawer} setOpen={setopendrawer}/>
        </>
    )
}


export default MenuHeader;