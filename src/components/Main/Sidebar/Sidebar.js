import React from 'react'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Posts from '../Posts/Posts';
import MyPosts from '../My-Post/MyPost';
import NewPost from '../New-Post/NewPost';
import Landing from '../Info/Landing';

const Sidebar = () => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list-unstyled">
                <li><Link to="/Posts">Posts</Link></li>
                <li><Link to="/MyPosts">My Posts</Link></li>
                <li><Link to="/NewPost">New Post</Link></li>

            </ul>
        </div>
        <div className="sidebar-route">
        <Switch>
            <Route exact path="/Posts"><Posts /></Route>
            <Route exact path="/MyPosts"><MyPosts /></Route>
            <Route exact path="/NewPost"><NewPost /></Route>
        </Switch></div>
    </div>
)

export default Sidebar;