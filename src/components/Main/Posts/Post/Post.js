import React from 'react';
import PostEdit from '../PostEdit';
import APIUrl from '../../../../helpers/environment';

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bandname: "",
            location: '',
            influentialartists: '',
            lookingfor: '',
            instrumentsskills: ''
        }
    }  
    componentDidMount() {
    fetch(`${APIUrl}/api/post/post`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
        
    })
    .then(response => response.json())
    .then(data =>  console.log(this.data))

    }
    render(){
    return(
        <tr>
            {/* <td>{props.post.bandname}</td>
            <td>{props.post.location}</td>
            <td>{props.post.influentialartists}</td>
            <td>{props.post.lookingfor}</td>
            <td>{props.post.instrumentsskills}</td> */}

        
            <td>
                <PostEdit bandname = {this.props.post.bandname} location = {this.props.post.location} influentialartists = {this.props.post.influentialartists} lookingfor = {this.props.post.lookingfor} instrumentsskills = {this.props.post.instrumentsskills} />
                 <button>Delete</button>
            </td>
        </tr>
    )}
    }


export default Post;