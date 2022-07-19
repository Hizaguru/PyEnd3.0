import React, { useState } from "react"
import axios from 'axios'

export default function Login({ setToken }) {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const signIn = (event) => {
        axios({
            method: "POST",
            url: "/token",
            data: {
                email: loginForm.email,
                password: loginForm.password
            }
        }).then((response) => {
            setToken(response.data.access_token)
        }).catch((error) => {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        })
        setLoginForm(({
            email: "",
            password: ""
        }))
        event.preventDefault()
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setLoginForm(prevNote => ({
            ...prevNote, [name]: value
        }))
    }



    return (
        <div>
            <h1>Login</h1>
            <form className="login">
                <input onChange={handleChange}
                    type="email"
                    text={loginForm.email}
                    name="email"
                    placeholder="Email"
                    value={loginForm.email} />
                <input onChange={handleChange}
                    type="password"
                    text={loginForm.password}
                    name="password"
                    placeholder="Password"
                    value={loginForm.password} />

                <button onClick={signIn}>Submit</button>
            </form>
        </div>
    )
}