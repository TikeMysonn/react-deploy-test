import React, { useState } from 'react'
import '../App.css';
import axios from 'axios';

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [currentUser, setCurrentUser] = useState(undefined)

    const login = () => {
        axios.post('https://insta.nextacademy.com/api/v1/login', { username, password })
            .then((resp) => { localStorage.setItem('token', resp.data.auth_token) })
        axios.get('https://insta.nextacademy.com/api/v1/users/me', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
            .then(resp => setCurrentUser(resp.data))
                .then(console.log(currentUser))
    }
    //name can be anything, jwt/token/wtv. after consolelogging, setItem(store the info).
    //localStorage.setItem('name', 'Josh')


    if (currentUser) {
        return (
            <>
                <h2>You are now logged in</h2>
                <h2>Your email is {currentUser.email}</h2>
                <h2>Your username is {currentUser.username}</h2>
                
            </>
        )
    } else if (currentUser)
        return(  'Loading...')
     
    else {
    return (
        <>
            <div className='formLogin'>
              
                <input type="text" placeholder='username' value={username} onChange={(e) => { setUsername(e.target.value) }} /> <br />
                <input type="text" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />
                <button onClick={login}>Login</button>
                
            </div>
        </>
    );}
    //axios.post(url[, data[, config]])
    //https://insta.nextacademy.com/api/v1/login
};



export default Login