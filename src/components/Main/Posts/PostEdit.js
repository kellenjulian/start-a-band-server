import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import Post from './Post/Post';
import APIUrl from '../../../helpers/environment';

// pass post as prop to post edit
// store post prop in post edit state
// use value attribute of input to show data in input fields

class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      bandname: this.props.bandname,
      location: this.props.location,
      influentialartists: this.props.influentialartists,
      lookingfor: this.props.lookingfor,
      instrumentsskills: this.props.instrumentsskills
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })};

    updatePost = (e) => {
      e.preventDefault();
      this.setState({
        bandname: document.getElementById("bandname"),
        location: document.getElementById("location"),
        influentialartists: document.getElementById("influentialartists"),
        lookingfor: document.getElementById("lookingfor"),
        instrumentsskills: document.getElementById("instrumentsskills")
      })
      fetch(`${APIUrl}/api/post/update/:id`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
          },
          body: {
            postdata: {
              bandname: this.state.bandname,
              location: this.state.location,
              influentialartists: this.state.influentialartists,
              lookingfor: this.state.lookingfor,
              instrumentsskills: this.state.instrumentsskills
            }
          }
      })  .then(res => res.json())
          .then(json => this.setState({posts: json.postdata}))
  } 
  testClick = () => {
    console.log(this.state);
  }

  handleChange = (event) =>  {
    this.setState({
        [event.target.name]: event.target.value
    })
  }
  

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>update</Button>
        <Modal isOpen={this.state.modal} onSubmit = {this.updatePost} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update Post</ModalHeader>
          <ModalBody>
            <Label>Name:</Label>
            <Input id = "bandname" name="bandname" placeholder={this.state.bandname} onChange={this.handleChange} />
            <Label>Location:</Label>
            <Input id="location" name="location" placeholder={this.state.location} onChange={this.handleChange}/>
            <Label>Influential Artists:</Label>
            <Input id="influentialartists" name="influentialartists" placeholder={this.state.influentialartists} onChange={this.handleChange}/>
            <Label>Looking For:</Label>
            <Input id="lookingfor" name="lookingfor" placeholder={this.state.lookingfor} onChange={this.handleChange} />
            <Label>Instruments/Skills:</Label>
            <Input id="instruments/skills" name="instrumentsskills" placeholder={this.state.instrumentsskills} onChange={this.handleChange} />

          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onChange={this.handleChange} onClick={this.testClick}>Post Update</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PostEdit;