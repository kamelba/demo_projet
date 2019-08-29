import React from 'react';
import Home from './Pageroute/home'
// import About from './Pageroute/about'
import Navbar from './Component/Navbar'
import Annonce from './reactstarp/Annonce'

import {BrowserRouter,Route} from 'react-router-dom'
 


function Apptest() {
  return (
    <BrowserRouter className="body">  
    <Navbar/>

     <Route exact path="/" component={Home}/>
     {/* <Route path="/about" component={About}/> */}
     <Route exact path='/annonce' component={Annonce} />

    
    </BrowserRouter>

    
  );
}

export default Apptest;
