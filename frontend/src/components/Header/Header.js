import React from 'react'
import axios from 'axios'

export default function Header(props) {

    const signOut = () => {
        axios({
            method: "POST",
            url: "/logout",
        })
            .then((response) => {
                props.token()
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }

    return (
        <header className='header'>
            <button onClick={signOut}>Sign out</button>
        </header>


    )
}