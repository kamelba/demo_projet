import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

 class SignUp extends React.Component {

 	class Signup extends Component {
  _handleFormSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <Form>
          <FormGroup>
          <Label for="Email">Adresse e-mail</Label>
          <Input type="email" name="email" id="Email-ID" placeholder="Adresse e-mail ou numéro de téléphone" />
        </FormGroup>
        <FormGroup>
          <Label for="text">Identifiant de connexion :</Label>
          <Input type="text" name="Identifiant" id="Identifiant-ID" placeholder="Identifiant" />
        </FormGroup>
        <FormGroup>        
        <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password-ID" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password-confirmation" id="ConfirmationPassword-ID" placeholder="confirmation" />
        </FormGroup>
       
        <Button>Inscrivez vous</Button>
      </Form>
    );
  }
}

export default SignUp