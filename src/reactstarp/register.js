import React, { Component } from 'react'
import registerLogo from '../images/register.svg' 
import{addUser} from '../redux/action/action'
import { connect } from "react-redux";
import  { Redirect } from 'react-router-dom';



class Register extends Component {
    state = {
        username: "",
        email: "",
        password: ''
      };
    render() {
        return (
            
            <div className="stylingForm">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 leftSide">
                            <img src={registerLogo} alt="register-photo"/>
                        </div>
                        <div className="col-xs-12 col-sm-6 rightSide">
                            <h1>Créez votre compte</h1>
                            {/* <form action="/users/register" method="POST"  > */}
<form enctype='application/json'>
                                <div className="form-group has-feedback">
                                    <label for="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter your name" name="username" onChange={e => {
              this.setState({ username: e.target.value });
            }}/>
                                    <span className="glyphicon 
                                    glyphicon-user form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your Email" name="email" onChange={e => {
              this.setState({ email: e.target.value });
            }}/>
                                    <span className="glyphicon 
                                    glyphicon-envelope form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="password">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" placeholder="Tapez votre mot de passe" name="pass" onChange={e => {
              this.setState({ password: e.target.value });
            }}/>
                                    <span className="glyphicon 
                                    glyphicon-eye-close form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="re-password">Confirmation</label>
                                    <input type="password" className="form-control" id="Confirmation" placeholder="Confirmation mot de passe" name="repass"/>
                                    <span className="glyphicon 
                                    glyphicon-eye-close form-control-feedback" aria-hidden="true"></span>
                                </div>
                                
 <button  className="btn btn-primary" onClick={(e) => {
               e.preventDefault(); this.props.addUser(this.state); 
              }} >Register<span class="glyphicon 
                                    glyphicon-send" aria-hidden="true"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           )
    }
};

export default connect(
    null,
    { addUser }
  )(Register);
  
// export default  Register;