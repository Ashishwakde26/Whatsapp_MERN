import React, { useEffect } from 'react';
import { getUsers } from '../../../../service/api';

const Conversation = () => {

useEffect(() => {
    getUsers()
},[])

    return (
        <div>
            This is conversation.
        </div>
    )
}

export default Conversation;

