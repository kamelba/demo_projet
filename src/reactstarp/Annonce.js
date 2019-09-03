import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {addAnnonce} from "../redux/action/actionAnnonce"
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Annonce extends Component {
  state={
    title:'',
    category:'',
    description:'', 
    price:'',
    brand:'',
    imga:'',
    imgb:''
  }

  render() {
    return (
      <div  className='model-annonce'>
      <Form>
      <h3>PUBLIER UNE ANNONCE </h3>

        
        <FormGroup>
          <Label for="text">Titre </Label>
          <Input type="text" name="Titre" id="Titre-ID" placeholder="Titre" style={{width:'400px'}}    onChange={e => {
              this.setState({ title: e.target.value });
            }}
 required/>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Catégorie</Label>
          <Input type="text" name="select" id="exampleSelect" style={{width:'300px'}} onChange={e => {
              this.setState({ category: e.target.value });
            }} ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">brand</Label>
          <Input type="text" name="brand" id="exampleSelect" style={{width:'300px'}} onChange={e => {
              this.setState({ brand: e.target.value });
            }} ></Input>
        </FormGroup>

                             {/* Sous Catégorie */}
        {/* <FormGroup>
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
        </FormGroup> */}

        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="description" required   onChange={e => {
              this.setState({ description: e.target.value });
            }} />
        </FormGroup>
        <FormGroup>
          <Label for="text">Prix </Label>
          <div className='prix-annonce'>
          <Input type="number" name="prix" id="Prix-ID" placeholder="exemple:100" style={{width:'400px'}} required nChange={e => {
              this.setState({ price: e.target.value });
            }} />
          
          </div>
          
        </FormGroup>

        <FormGroup>
          <Label for="text">Image 1 </Label>
          <Input type="text" name="image1" id="image1-ID" placeholder="Image 1" style={{width:'400px'}}    onChange={e => {
              this.setState({ imga: e.target.value });
            }}
 required/>
        </FormGroup>
        <FormGroup>
          <Label for="text">Image 2 </Label>
          <Input type="text" name="image2" id="image2-ID" placeholder="Image 2" style={{width:'400px'}}    onChange={e => {
              this.setState({ imgb: e.target.value });
            }}
 required/>
        </FormGroup>

        
        {/* <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Check me out
          </Label>
        </FormGroup> */}
                  <Link to="/">
        <Button style={{margin:'20px' }} onClick={() => {
                this.props.addAnnonce(this.state);
              }}>addAnnonce</Button></Link>
      </Form>



      </div>
    );
  }
}

export default connect(
  null,
  { addAnnonce }
)(Annonce);
