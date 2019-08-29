import React from 'react';
import Navbar from './Component/Navbar'
import Categorie from './Component/Categorie'
import Search from './Component/search'
import Annonce from './reactstarp/Annonce'

import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <Router className="body">  
      <Navbar/>
      <div className='Catg-Sch'>
      <Categorie className='Catg'/>
    <Search/>
    </div>
    
       <Route path='/annonce' component={Annonce} />
    
    </Router>
  );
}

export default App;
