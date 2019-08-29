import React, { Component } from 'react'
import '../Dropdown.css';
 class Categorie extends Component {
     
    render() {
        return (
            <div className='touteslescatégories'>
         
         <ul>
             <li className='Dropdown'><a href='#'>Téléphones</a></li>
             <li className='Dropdown'><a href='#'>Véhicules</a>
             <div className='DropdownRight'>
                 <ul>
                     <li><a href='#'>Voiture</a></li>
                     <li><a href='#'>Motos</a></li>
                     <li><a href='#'>Pièces et Accessoires pour véhicules</a></li>
                     <li><a href='#'>Remorques et Caravanes</a></li>
                     <li><a href='#'>Camions</a></li>
                     <li><a href='#'>Autres</a></li>             
                 </ul>
             </div>
             </li>
             <li className='Dropdown'><a href='#'>Immobilier</a>
             <div className='DropdownRight'>
                 <ul>
                     <li><a href='#'>Appartements</a></li>
                     <li><a href='#'>Maisons et Villas</a></li>
                     <li><a href='#'>Locations de vacances</a></li>
                     <li><a href='#'>Bureaux et Plateaux</a></li>
                     <li><a href='#'>Magasins, Commerces et Locaux industriels</a></li>
                     <li><a href='#'>Autres</a></li>             
                 </ul>
             </div>
             </li> 
             <li className='Dropdown'><a href='#'>Informatique</a>
             <div className='DropdownRight'>
                 <ul>
                     <li><a href='#'>Ordinateurs portables</a></li>
                     <li><a href='#'>Accessoires informatique et Gadgets</a></li>
                     <li><a href='#'>Appareils photo et Caméras</a></li>
                     <li><a href='#'>Télévisions</a></li>
                     <li><a href='#'>Image & Son</a></li>
                     <li><a href='#'>Autres</a></li>             
                 </ul>
             </div>

             </li>
             <li className='Dropdown'><a href='#'>Maison & Fournitures</a></li> 
             <li className='Dropdown'><a href='#'>Electronique & Electroménager</a></li>
             <li><a href='#'>Vêtements</a></li>
             <li><a href='#'>Loisirs & Divertissements</a></li>
             <li><a href='#'>Emploi et services</a></li>
         </ul>     

        </div>
        )
    }
}
export default Categorie;