import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Apptest from './Apptest';
import { Provider } from "react-redux";
import store from "./redux/store";






ReactDOM.render(<Provider store={store}><Apptest /></Provider>, document.getElementById('root'));


