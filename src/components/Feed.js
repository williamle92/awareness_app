import React from 'react'
import './Feed.css'
import Post from './Post'
import Cards from './Cards'

function Feed() {
    const profilePic = 'https://avatars.githubusercontent.com/u/81194035?v=4';
    const image1 = 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    const username = 'williamm92'
    const message = 'life is good'
    return (
        <div className="feed">
            <img className='image' src="https://cdn.dribbble.com/users/63407/screenshots/6324540/dribbble_reasoning_corner.png?compress=1"/>

            <Post />
            <Cards image={image1} username={username} message={message} profilePic={profilePic} />
        </div>
    )
}

export default Feed



