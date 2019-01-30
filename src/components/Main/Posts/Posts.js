import React, {Component} from 'react';

import APIUrl from '../../../helpers/environment';

import Post from './Post/Post'
import './Posts.css';

class Posts extends Component {


 
    state = {
        posts: []
    }
    
    componentDidMount() {
        fetch(`${APIUrl}/api/post/post`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(json => this.setState({posts: json.postdata}))
    }

    render() {
        let postRows = this.state.posts.map(post => {
            return(
                <Post post={post} key = {post.id}/>

            )
        })

        return(
            <div>
                    <h1>HELLO WORLD!!!!!</h1>
                
                <table>
                <tbody>
                    
                    
                    {postRows}
                </tbody>
            </table>
            
            </div>
        )
    }
}

export default Posts;