import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router';
import Image from 'react-graceful-image';
import '../App.css'

<h1>Helloimport App from '../App';
</h1>

const UserImages = () => {
    let userId = useParams();
    // const [user, setUser] = useState({})
    // const [users, setUsers] = useState([]);
    const [userImages, setUserImages] = useState([])
    
        useEffect(() => {
            axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userId.id}`)
                .then(result => {
                     setUserImages(result.data) 
                })
                .catch(err => {
                    console.log('ERRRORRRAWWWWWRRRR', err)
                })
        }, [userId.id])

    // { console.log(userImages) }

        return(
            <>
           <h1>Photos from this user</h1>   
            {userImages.map(m => (
                <li>
                    <Image src={m.url} style={{height:'35%', width:'35%' }} />
                </li>
            ))}
                                
           </>
       ); 
    }








 export default UserImages;

 //https://insta.nextacademy.com/api/v2/images?userId=<int>
