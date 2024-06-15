import './style.css';
import mainImage from './images/dubai-image.jpg';

console.log("This is a test");
const centerMainDiv = document.querySelector('.center-section');
const centerImage = new Image();
centerImage.classList.add('main-image');
centerImage.src = mainImage;
centerMainDiv.appendChild(centerImage);
