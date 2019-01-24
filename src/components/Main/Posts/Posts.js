import React, {Component} from 'react';

import APIUrl from '../../../helpers/environment';

import Post from './Post/Post'
import './Posts.css';

class Posts extends Component {
    state = {
        pies: []
    }

    componentDidMount() {
        fetch(`${APIUrl}/post`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => this.setState({posts: json}))
    }

    render() {
        let postRows = this.state.posts.map(post => {
            return(
                <Post post={post}/>

            )
        })

        return(
            <table>
                <tbody>
                    {postRows}
                </tbody>
            </table>
        )
    }
}

export default Posts;