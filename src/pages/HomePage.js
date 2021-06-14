import React, { useState, useEffect } from 'react';
import LoadingIndicator from '../components/Loader';
import axios from 'axios';
import Image from 'react-graceful-image'
import { Link } from 'react-router-dom'
import Login from './Login';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://insta.nextacademy.com/api/v1/users')
            .then(result => {
                //  console.log(result.data)
                setUsers(result.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log('error', err)
            })
    }, [])

    if (isLoading) {
        return <LoadingIndicator width='300px' height='300px' color='silver' />
    }
    return (
        <div>
            <Link to={`/login`}>Login</Link>
            {/* <Login /> */}
            <h1>Home Page</h1>
            <ul>
                {users.map(user => (
                    <li>
                        <Link to={`/profile/${user.id}`}>{user.id}: {user.username}</Link>
                        <Image src={user.profileImage} style={{ height: '20%', width: '20%' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage