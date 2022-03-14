import { header } from './header.js';
import { home } from './home.js';
import { menu } from './menu.js';
import { hours } from './hours.js';
import { contact } from './contact.js';
import './styles.css';
import bannerImg from '../images/restaurant-main.jpg';

//Initial page load
header();
home();
//Makes new image tag
const image = new Image();
//Set src property value to be bannerImg
image.src = bannerImg;
//Append new image tag to a DOM element
const banner = document.querySelector('.banner');
banner.append(image);

//Tab switching via persistent nav anchors
const content = document.querySelector('#content');
const anchorHome = document.querySelector('#home');
const anchorMenu = document.querySelector('#menu');
const anchorHours = document.querySelector('#hours');
const anchorContact = document.querySelector('#contact');

function removeContents() {
    while (content.lastChild) {
        if (content.lastChild.tagName == 'HEADER') {
            break;
        }
        content.lastChild.remove();
    };
}
anchorHome.addEventListener('click', () => {
    removeContents();
    home();;
});

anchorMenu.addEventListener('click', () => {
    removeContents();
    menu();
});

anchorHours.addEventListener('click', () => {
    removeContents();
    hours();
});

anchorContact.addEventListener('click', () => {
    removeContents();
    contact();
});
