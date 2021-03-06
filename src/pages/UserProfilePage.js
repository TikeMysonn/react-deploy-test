import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import UserImages from '../containers/UserImages';
import Login from './Login';
// import { useParams } from 'react-router';


const UserProfilePage = () => {

    let userId = useParams();
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/users/${userId.id}`)
            .then(result => {
                setUser(result.data)
            })
    }, [userId.id])
    
    return (
        <>
            <Login />
            <h1>Profile Page for User {user.id} : {user.username}
                <img src={user.profileImage} width='200px' alt=''/>
            </h1>
            <UserImages />
           

        </>
    );


};

export default UserProfilePage


// return (
//     <UserImages></UserImages>
// )