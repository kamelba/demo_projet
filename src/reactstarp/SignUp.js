import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {addUser} from '../redux/action/action'

 class SignUp extends React.Component {
   state={
    email:'',
    identifiant:'',
    password:''
   }

   validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {

    return (
      <Form>
          <FormGroup>
          <Label for="Email">Adresse e-mail</Label>
          <Input type="email" name="email" id="Email-ID" placeholder="Adresse e-mail ou numéro de téléphone" onChange={e => {
              this.setState({ email: e.target.value });
            }} />
        </FormGroup>
        <FormGroup>
          <Label for="text">Identifiant de connexion :</Label>
          <Input type="text" name="Identifiant" id="Identifiant-ID" placeholder="Identifiant"  onChange={e => {
              this.setState({ identifiant: e.target.value });
            }}/>
        </FormGroup>
        <FormGroup>        
        <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password-ID" placeholder="Password" onChange={e => {
              this.setState({ password: e.target.value });
            }} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password-confirmation" id="ConfirmationPassword-ID" placeholder="confirmation" />
        </FormGroup>
       
        <Button onClick={()=>{this.props.addUser(this.state)}} type='submit' >Inscrivez vous</Button>
      </Form>
    );
  };
}


 export default connect(null,{addUser})(SignUp) 