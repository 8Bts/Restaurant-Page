/* eslint-disable linebreak-style */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './styles/css-reset.css';
import './images/jason-leung.jpg';

import PageLoad from './page-load';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

PageLoad();

let tabHome = document.getElementById('home');
let tabMenu = document.getElementById('menu');
let tabContact = document.getElementById('contact');
let dContent = document.getElementById('dContent');

let selected = tabHome;

tabHome.parentElement.style.backgroundColor = 'transparent';
tabHome.style.color = '#353b48';

tabHome.onclick = () => {
  selected.parentElement.style.backgroundColor = '#353b48';
  selected.style.color = 'white';
  selected = tabHome;
  Home(dContent);
  tabHome.parentElement.style.backgroundColor = 'transparent';
  tabHome.style.color = '#353b48';
}

tabMenu.onclick = () => {
  selected.parentElement.style.backgroundColor = '#353b48';
  selected.style.color = 'white';
  selected = tabMenu;
  Menu(dContent);
  tabMenu.parentElement.style.backgroundColor = 'transparent';
  tabMenu.style.color = '#353b48';
}

tabContact.onclick = () => {
  selected.parentElement.style.backgroundColor = '#353b48';
  selected.style.color = 'white';
  selected = tabContact;
  Contact(dContent);
  tabContact.parentElement.style.backgroundColor = 'transparent';
  tabContact.style.color = '#353b48';
}