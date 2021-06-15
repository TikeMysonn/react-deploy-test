import './App.css';
import Homepage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import {
  Route,
  Link,
} from "react-router-dom";
import React from 'react';
import Image from 'react-graceful-image'
import NavBar from './components/Navbar'
import Login from './pages/Login';

function App() { 
  return (
    <>
   <NavBar />
   <Link to="/" >Homepage</Link>
   <h1>WHY ARE YOU HERE? LEAVE THIS PAGE NOW </h1>
   <Image src="https://media.gettyimages.com/photos/wachirasak-waiyawong-of-thailand-and-keng-fai-of-malaysia-pose-for-a-picture-id1042387566" width='200px' height='136px' />
   <Route exact path="/" component={Homepage} />
   <Route path="/profile/:id" component={UserProfilePage} />
   <Route exact path='/login' component={Login}/>

  </>
  );
}

export default App;
