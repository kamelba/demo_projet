import React  from "react"
import logo from '../images/logo-site.png'
import MonCompte from'../reactstarp/Moncompte'
import {Link} from 'react-router-dom'



class Navbar extends React.Component {
    render(){
        return(
            <div className="navbar">
                <img  src={logo} className='logo-site' alt='vente'/>
      
                <ul className='navbar-link'>
                    <li><Link to="/">Home</Link></li>
                    <li><MonCompte/></li>
                    <li><Link to="/annonce">Publier une annonce</Link></li>
                    {/* <li><Link to="/about">About</Link></li> */}

                </ul>
            </div>
        )
    }
}

export default Navbar;
