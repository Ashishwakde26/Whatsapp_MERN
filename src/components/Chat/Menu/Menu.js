import { Box } from '@mui/system';
import React from 'react';
import MenuHeader from './MenuHeader';
import Search from './Search';


const Menu = () => {

    return (
        <Box>
            <MenuHeader />
            <Search />
        </Box>
    )
}

export default Menu;