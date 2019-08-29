import React, { Component } from 'react'
import Categorie from '../Component/Categorie'
import Search from '../Component/search'


class home extends Component {
  render() {
    return (
      <div className='Catg-Sch'>
      <Categorie className='Catg'/>
    <Search/>
    </div>

              )
            };
            
 }

 export default home;

