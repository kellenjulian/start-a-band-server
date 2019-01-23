import React from 'react';

const Post = (props) => {
    return(
        <tr>
            <td>{props.post.bandName}</td>
            <td>{props.post.location}</td>
            <td>{props.post.influentialArtists}</td>
            <td>{props.post.lookingFor}</td>
            <td>{props.post.instrumentsSkills}</td>
        </tr>
    )
}

export default Post;