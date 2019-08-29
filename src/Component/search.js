import React, { Component } from 'react'
import img from '../images/1.jpg'
 class Search extends Component {
    render() {
        return (
            
              <div className='search-annonce'>
                  <img className="img" src={img} alt='vente tayara'/>
                  
                  <div className='search'>
                      <h5>Que Recherchez-vous ?</h5>
                      <input className='input-search'  type='text' placeholder='Votre recherche ici ...' /></div>
              </div>
              )
            };
            
 }
    


export default Search;


