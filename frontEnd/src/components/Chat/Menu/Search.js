import { Box } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';

const Search = () => {

    return (
        <Box  sx={{paddingLeft:"12px", display:"flex", borderBottom:"1px solid #f2f2f2" }}>
            <Box sx={{backgroundColor:"#f0f2f5", width:"100%", margin:"8px", borderRadius:"7px"}}>
                <IconButton
                sx={{marginLeft:"13px"}}
                >
                    <SearchIcon 
                    fontSize='small'
                    />
                </IconButton>
                <InputBase
                    sx={{width:"85%"}}
                    placeholder="Search or start new chat"
                />
            </Box>

            <IconButton sx={{marginLeft:"auto"}}>
                    <FilterListIcon />
            </IconButton>
        </Box>
    )
}

export default Search;