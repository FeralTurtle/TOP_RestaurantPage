import { header } from './header.js';
import { loadTagsHome } from './loadTagsHome.js';
import { loadContentHome } from './loadContentHome.js';
import { menu } from './menu.js';
import './styles.css';
import bannerImg from '../images/restaurant-main.jpg';
import { hours } from './hours.js';
import { contact } from './contact.js';

//Load page
//Load listeners

//Initial page load
header();
loadTagsHome();
loadContentHome();
//Makes new image tag
const image = new Image();
//Set src property value to be bannerImg
image.src = bannerImg;
//Append new image tag to a DOM element
const banner = document.querySelector('.banner');
banner.append(image);
//For now seems like all images have to be imported into this module for distribution. Doesn't look like it can be scanned in its original file for dist.

//Tab switching
//Nav anchors
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

// Add click event listeners in a loop AFTER the page loads/DOM elements are on the page
anchorHome.addEventListener('click', () => {
    removeContents();
    loadTagsHome();
    loadContentHome();
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
})
