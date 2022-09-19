import { defaultListboxReducer } from '@mui/base';
import React, { Children } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const Account = createContext();

const Accountprovider = ({children}) => {

    const [ account, setaccount] = useState();

    return (
        <Account.Provider value={{ account, setaccount }}>
            {children}
        </Account.Provider>
    )
}

export const AccountState = () => {
    return useContext(Account);
}

export default Accountprovider;