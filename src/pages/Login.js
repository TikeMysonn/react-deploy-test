import React , { useState } from 'react'
import '../App.css';
import {
    Link,
} from "react-router-dom";
import axios from 'axios';

function Login() {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const login = () => {
        axios.post('https://insta.nextacademy.com/api/v1/login', {username, password})
        .then((resp)=> {localStorage.setItem("token",  resp.data.auth_token)})
    }
    //name can be anything, jwt/token/wtv. after consolelogging, setItem(store the info).
    //localStorage.setItem('name', 'Josh')

    return (
        <>
        <div className='formLogin'>
        <br />
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/> <br />
        <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br />
        <button onClick={login}>Login</button>
        </div>
        </>
    );
//axios.post(url[, data[, config]])
//https://insta.nextacademy.com/api/v1/login
};
   


    export default Login