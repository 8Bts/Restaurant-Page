/* eslint-disable linebreak-style */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './styles/css-reset.css';
import './images/jason-leung.jpg';

import PageLoad from './page-load';
import Home from './home'

PageLoad();

let tabHome = document.getElementById('home');
let tabMenu = document.getElementById('menu');
let tabContact = document.getElementById('contact');
let dContent = document.getElementById('dContent');

tabHome.onclick = () => { 
  //dContent.innerHTML = "<p>11</p>"
  Home(dContent);
};