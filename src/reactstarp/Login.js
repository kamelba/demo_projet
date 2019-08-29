import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {loginUser} from '../redux/action/action'


 class Login extends React.Component {
  state={
    email:'',
    password:''
   }

 

  render() {
    return (
      <Form >
        <FormGroup>
          <Label for="Email">Adresse e-mail ou numéro de téléphone</Label>
          <Input type="email" name="email" id="Email" placeholder="Adresse e-mail ou numéro de téléphone" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="Password" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Rester connecté sur cet appareil
          </Label>
        </FormGroup>
        <Button onClick={()=>{this.props.loginUser(this.state)}} type='submit'  >Valider</Button>
        <FormGroup>
          <Label for="text">Vous avez oublié votre mot de passe ? </Label>
          <a href='#'>Cliquez ici</a>
        </FormGroup>
      </Form>
    );
  }
}
export default connect(null,{loginUser})(Login) 
