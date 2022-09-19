import { Box } from '@mui/system';
import React from 'react';
import MenuHeader from './MenuHeader';
import Search from './Search';
import Conversation from './conversation/Conversation';


const Menu = () => {

    return (
        <Box>
            <MenuHeader />
            <Search />
            <Conversation />
        </Box>
    )
}

export default Menu;