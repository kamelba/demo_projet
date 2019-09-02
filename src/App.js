import React from 'react';
import Home from './Pageroute/home'
// import About from './Pageroute/about'
import Navbar from './Component/Navbar'
import Annonce from './reactstarp/Annonce'
import Register from './reactstarp/register'


import {BrowserRouter,Route} from 'react-router-dom'
 


function Apptest() {
  return (
    <BrowserRouter className="body">  
    <Navbar/>

     <Route exact path="/" component={Home}/>
     <Route path="/register" component={Register}/>
     <Route path='/annonce' component={Annonce} />

    
    </BrowserRouter>

    
  );
}

export default Apptest;
