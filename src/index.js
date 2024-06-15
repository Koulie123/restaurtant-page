import './style.css';
import mainImage from './images/dubai-image.jpg';

console.log("This is a test");
const centerMainDiv = document.querySelector('.center-section');
const myImage = new Image();
myImage.classList.add('main-image');
myImage.src = mainImage;
centerMainDiv.appendChild(myImage);

const imageElement = document.querySelector('.main-image');
imageElement.src = Image;