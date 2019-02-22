import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NewFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
     title:" ",
     img:" ",
     rating:" ",
     newmovie : {'title':'','img':'','rating':''},
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
      addMovie = () =>
          {
            this.props.newmovies(this.state.newmovie)
            this.setState(prevState => ({
              modal: !prevState.modal
            }));
            this.setState ({ newmovie : {'title':'','img':'','rating':''}})
          }
    //  addFilm = () =>
    //  {
    //      this.setState ({
    //              addMovie: this.state.newmovie 
    //  })}

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add Film</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add New Film</ModalHeader>
          <ModalBody>
          <label for="title">Title</label>
          <input type="text" placeholder="Title.." name="title" onChange={(event) => {
            this.setState({ title: event.target.value });
          }} /><br/>
          <label for="title">Image</label>
          <input  type="text" placeholder="Image Link " name="img" onChange={event => {
            this.setState({ img: event.target.value });
          }} /><br/>
          <label for="title">Rating</label>
          <input type="Number" placeholder="Rating" name="rating" min="1" max="5"onChange={event => {
            this.setState({ rating: event.target.value,newmovie : Object.assign({"title":this.state.title,"img":this.state.img,"rating":event.target.value} ) });
          }} /><br/>
          </ModalBody>
          <ModalFooter>
  <Button color="primary" onClick={this.addMovie}>Add Film</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default NewFilm;