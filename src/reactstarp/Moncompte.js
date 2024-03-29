import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MonCompte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

  }

  toggle=() =>{
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} >Mon compte</Button>
        
        <Modal style={{minWidth:'800px'}} isOpen={this.state.modal} toggle={this.toggle}    >
          <ModalHeader toggle={this.toggle}>Mon compte</ModalHeader>
          <ModalBody >
              <div className='MonCompte'>
                <Login  />
                <div className="ligne_verticale" />
                <SignUp />
             </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MonCompte;