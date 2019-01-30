import React, {Component} from 'react';

import APIUrl from '../../../helpers/environment';

// import Post from './Post/Post'
// import './Posts.css';

class MyPosts extends Component {
    
    state = {
        Posts: []
    }

    componentDidMount() {
        fetch(`${APIUrl}/api/post/:id`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(json => this.setState({posts: json}))
    }

    updateMyPost() {
        fetch(`${APIUrl}/api/post/update/:id`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(json => this.setState({posts: json.postdata}))
    }

    deleteMyPost() {
        fetch(`${APIUrl}/api/post/remove/:id`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(json => this.setState({posts: json.postdata}))
    }

    render() {
        let myPostRows = this.state.Posts.map(Post => {
            return(
                <MyPosts Post={Post}/>

            )
        })

        return(
            <table>
                <div>Hello sir!</div>
                    <ul id="List">
                    <li>Sample list element</li>
                    {myPostRows}
                    
                    </ul>
                <tbody>
                    
                </tbody>
            </table>
        )
    }
}

export default MyPosts;