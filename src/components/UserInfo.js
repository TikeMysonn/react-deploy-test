import React from 'react'
const [currentUser, setCurrentUser] = useState(undefined)

const UserInfo = () => {
    useEffect(() => {
        axios.get('https://insta.nextacademy.com/api/v1/users/me', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
            .then(resp => setCurrentUser(resp.data))
    }, [])


    if (currentUser) {
        return (
            <>
                <h1>{currentUser.email}</h1>
                <h1>{currentUser.username}</h1>
                <h1>This is UserInfoJS</h1>
            </>
        )
    } else {
        return 'Loading...'
    }
}


export default UserInfo