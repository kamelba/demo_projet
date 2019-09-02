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
          <Input type="text" name="Titre" id="Titre-ID" placeholder="Titre" style={{width:'400px'}} required/>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select Catégorie</Label>
          <Input type="select" name="select" id="exampleSelect" style={{width:'300px'}} onChange={e=>this.setState({test:e.target.value})} >
            <option>Select Catégorie</option>
            <option>Téléphones</option>
            <option>Véhicules</option>
            <option>Immobilier</option>
            <option>Informatique</option>
            <option>Maison & Fournitures</option>
            <option>Electronique & Electroménager</option>
            <option>Vêtements</option>
            <option>Loisirs & Divertissements</option>
            <option>Emploi et services</option>

          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Sous Catégorie</Label>
          {
            this.state.test==="Select Catégorie"?<Input type="select" name="select" id="exampleSelect" style={{width:'300px'}} disabled> 
            <option>Select Catégorie </option>

         </Input>:this.state.test==="Véhicules"?
         <Input type="select" name="select" id="exampleSelect" style={{width:'300px'}} > 
            <option>Voiture </option>
            <option>Motos</option>
            <option>Pièces et Accessoires pour véhicules</option>
            <option>Remorques et Caravanes</option>
            <option>Camions</option>
            <option>Autres</option>
          </Input>:this.state.test==="Immobilier"?
          <Input type="select" name="select" id="exampleSelect" style={{width:'300px'}} >
            <option>Appartements </option>
            <option>Maisons et Villas</option>
            <option>Locations de vacances</option>
            <option>Bureaux et Plateaux</option>
            <option>Magasins, Commerces et Locaux industriels</option>
            <option>Autres</option>
          </Input>:this.state.test==="Informatique"?
          <Input type="select" name="select" id="exampleSelect" style={{width:'300px'}} >
            <option>Ordinateurs portables </option>
            <option>Accessoires informatique et Gadgets</option>
            <option>Appareils photo et Caméras</option>
            <option>Télévisions</option>
            <option>Image & Son</option>
            <option>Autres</option>
          </Input>: <Input type="select" name="select" id="exampleSelect" style={{width:'300px'}} >
            <option>--</option>
            <option>--</option>
            <option>--</option>
            <option>--</option>
            <option>--</option>
            <option>--</option></Input>
          }
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="description" required />
        </FormGroup>
        <FormGroup>
          <Label for="text">Prix </Label>
          <div className='prix-annonce'>
          <Input type="number" name="prix" id="Prix-ID" placeholder="exemple:100" style={{width:'400px'}} required />
          <span>D</span>
          </div>
          
        </FormGroup>

        <FormGroup >
          <Label for="exampleFile" >File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        
        {/* <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Check me out
          </Label>
        </FormGroup> */}
        <Button style={{margin:'20px' }} type='submit'>Suivant</Button>
      </Form>



      </div>
    );
  }
}

export default Annonce;
