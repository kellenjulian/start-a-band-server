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
  

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>update</Button>
        <Modal isOpen={this.state.modal} onSubmit = {this.updatePost} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update Post</ModalHeader>
          <ModalBody>
            <Label>Name:</Label>
            <Input id = "bandname" placeholder={this.state.bandname} />
            <Label>Location:</Label>
            <Input placeholder={this.state.location} />
            <Label>Influential Artists:</Label>
            <Input placeholder={this.state.influentialartists} />
            <Label>Looking For:</Label>
            <Input placeholder={this.state.lookingfor} />
            <Label>Instruments/Skills:</Label>
            <Input placeholder={this.state.instrumentsskills} />

          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Post Update</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PostEdit;