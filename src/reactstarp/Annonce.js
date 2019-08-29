import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Annonce extends React.Component {
  state={
    test:"select"
  }
  render() {
    return (
      <div  className='model-annonce'>
      <Form>
      <h3>PUBLIER UNE ANNONCE </h3>

        
        <FormGroup>
          <Label for="text">Titre </Label>
          <Input type="text" name="Titre" id="Titre-ID" placeholder="Titre" style={{width:'400px'}} />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select Catégorie</Label>
          <Input type="select" name="select" id="exampleSelect" style={{width:'200px'}} onChange={e=>this.setState({test:e.target.value})} >
            <option>select</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Catégorie</Label>
          {
            this.state.test==="select"?<Input type="select" name="select" id="exampleSelect" style={{width:'200px'}} disabled> 
            <option>selecthghg </option>
         
            
          </Input>:<Input type="select" name="select" id="exampleSelect" style={{width:'200px'}} > 
            <option>select </option>
            <option>2ggsg</option>
            <option>3sgs</option>
            <option>4</option>
            <option>5</option>
          </Input>
          }
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="description" />
        </FormGroup>
        <FormGroup>
          <Label for="text">Prix </Label>
          <Input type="text" name="prix" id="Prix-ID" placeholder="prix" style={{width:'400px'}} />
        </FormGroup>

        <FormGroup >
          <Label for="exampleFile" >File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Check me out
          </Label>
        </FormGroup>
        <Button style={{margin:'20px' }}>Suivant</Button>
      </Form>



      </div>
    );
  }
}

export default Annonce;
