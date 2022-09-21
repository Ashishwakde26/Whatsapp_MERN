import axios from 'axios';

export const addUser = async (data) => {

    try {
        await axios.post('http://localhost:8000/addUser', data)
    }
    catch(error) {
        console.log(`Error observeed: ${error}`)
    }
    
}

export const getUsers = async () => {
    try{
    
    console.log("This methode was called");
    const users = await axios.get('http://localhost:8000/getUsers')
    return users.data;

    }catch(error) {
        console.log(`Error observeed: ${error}`)
    }
}