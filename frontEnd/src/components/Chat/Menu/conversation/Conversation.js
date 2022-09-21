import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../../../service/api';
import Friend from './Friend';

const Conversation = () => {

    const [user, setuser] = useState([]);

    useEffect(() => {
        const fetchuser = async () => {
            const data = await getUsers()
            setuser(data.users);
        }
        fetchuser();
    },[])

    console.log(user);

    return (
        <Box>
            {
            user && user.map((usersdata, index) => (
                <Friend user={usersdata}/>
            ))
            }            
        </Box>
    )
}

export default Conversation;

