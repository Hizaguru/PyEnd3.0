import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [profileData, setProfileData] = useState([])


  // axios({
  //   method: 'GET',
  //   url: "/profile",
  // }).then((response) => {
  //   console.log(response)
  //   const res = response.data;
  //   setProfileData(({
  //     name: res.name,
  //     about: res.about
  //   }))
  //   console.log(profileData)
  // }).catch((error) => {
  //   console.log(error.response)
  // })

  return (
    <div className="App">
      <p>
        Hi
      </p>
    </div>
  );
}

export default App;
