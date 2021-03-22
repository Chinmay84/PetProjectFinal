import React from 'react';
import NavBar from './Navbar';
import SideBar from './SideBar';
import Posts from './Posts'

function Profile() {
    return (
        <div>
        <NavBar/>
        <div className="facebook">
            <SideBar />
            <Posts />
        </div>
        </div>
    )
}

export default Profile
