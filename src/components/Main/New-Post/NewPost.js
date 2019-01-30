import React, {Component} from 'react';

import APIUrl from '../../../helpers/environment';



class NewPosts extends Component {
    state = {
        name: '',
        location: '',
        influentialartists: '',
        lookingfor: '',
        instrumentskills: ''
    }

    submitNewPost = (event) => {
        event.preventDefault();
        fetch(`${APIUrl}/api/post/createpost`, {
            method: 'POST',
            body: JSON.stringify({
                postdata:{
                    bandname: this.state.name,
                    location: this.state.location,
                    influentialartists: this.state.influentialartists,
                    lookingfor: this.state.lookingfor,
                    instrumentsskills: this.state.instrumentskills
                }
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

        handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value
            })
        }


render() {

    return (
        <form className="main" onSubmit={this.submitNewPost}>

            <div className="mainDiv">
            <label htmlFor="name">Name:</label><br />
            <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} /><br />

            <label htmlFor="location">Location:</label><br /> 
            <input type="text" name="location" id="location" onChange={this.handleChange} value={this.state.location} /><br />

            <label htmlFor="influentialartists" >Influential Artists:</label><br />
            <input type="text" id="influentialartists" name="influentialartists" onChange={this.handleChange} value={this.state.influentialartists} /><br />

            <label htmlFor="lookingfor">Looking For:</label><br /> 
            <input type="text" id="lookingfor" name="lookingfor" onChange={this.handleChange} value={this.state.lookingfor} /><br />

            <label htmlFor="instrumentskills">Instrument Skills:</label><br />
            <input type="text" id="instrumentskills" name="instrumentskills" onChange={this.handleChange} value={this.state.instrumentskills} /><br />
            
             <button type="submit" >Submit User Data</button>
            
            </div>
        </form>

    )
}
}
export default NewPosts;