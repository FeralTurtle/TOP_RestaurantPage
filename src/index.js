import { header } from './header.js';
import { home } from './home.js';
import { menu } from './menu.js';
import { hours } from './hours.js';
import { contact } from './contact.js';
import './styles.css';

//Initial page load
header();
home();

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
