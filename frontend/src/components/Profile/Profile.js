import axios from "axios"
import React, { useState } from "react"


export default function Profile(props) {
    const [profileData, setProfileData] = useState(null)

    const getData = () => {
        axios({
            method: "GET",
            url: "/profile",
            headers: {
                Authorization: 'Bearer' + props.token
            }
        })
            .then((response) => {
                const res = response.data
                res.access_token && props.setToken(res.access_token)
                setProfileData(({
                    profile_name: res.name,
                    about_me: res.about
                }))
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }
    return (
        <div className="Profile">

            <p>To get your profile details: </p><button onClick={getData}>Click me</button>
            {profileData && <div>
                <p>Profile name: {profileData.profile_name}</p>
                <p>About me: {profileData.about_me}</p>
            </div>
            }

        </div>
    )
}