import { loadTags } from './loadTags.js';
import { loadContent } from './loadContent.js';
import './styles.css';
import bannerImg from '../images/restaurant-main.jpg';


loadTags();
loadContent();
const image = new Image();
image.src = bannerImg;
const banner = document.querySelector('.banner');
banner.append(image);