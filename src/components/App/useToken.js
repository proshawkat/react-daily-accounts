import {useState} from 'react';

export default function useToken() {


    const getToken = () => {
        const tokenString = localStorage.getItem('accounts_token');
        const userToken = JSON.parse(tokenString);
        return userToken ?.access_token
    }

    const [token, setToken] = useState(getToken());


    const saveToken = userToken => {
        localStorage.setItem('accounts_token', JSON.stringify(userToken))
        setToken(userToken.access_token)
    }

    return {
        setToken: saveToken,
        token
    }
}