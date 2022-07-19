import { useState } from 'react'


export default function useToken() {
    function getToken() {
        return localStorage.getItem('token');
    }
    const [token, setToken] = useState(getToken);

    function saveToken(userToken) {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    }

    function removeToken() {
        localStorage.removeItem('token');
        setToken(null)
    }

    return {
        setToken: saveToken,
        token,
        removeToken
    }


}