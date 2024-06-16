import './style.css';
import mainImage from './images/dubai-image.jpg';


// console.log("This is a test");
// const centerMainDiv = document.querySelector('.center-section');
// const centerImage = new Image();
// centerImage.classList.add('main-image');
// centerImage.src = mainImage;
// centerMainDiv.appendChild(centerImage);

const generateHomePage = function () {
    const contentSection = document.querySelector("#content");

    const centerMainDiv = document.createElement('div');
    centerMainDiv.classList.add('center-section');
    contentSection.appendChild(centerMainDiv);


    const contentHeader = document.createElement('div');
    const headerH2 = document.createElement('h2');

    //creating the header of the main page
    headerH2.textContent = "Welcome to Gino's Pizza";
    contentHeader.appendChild(headerH2);
    centerMainDiv.appendChild(contentHeader);


    //creating the image of the main page
    const mainPicDiv = document.createElement('div');
    mainPicDiv.classList.add('restaurant-main-pic');
    const mainPicDivImage = document.createElement('img');
    mainPicDivImage.src = mainImage;
    mainPicDivImage.classList.add('main-image');
    mainPicDiv.appendChild(mainPicDivImage);
    centerMainDiv.appendChild(mainPicDiv);

    //creating the "greatness of the restaurant paragraph"
    const greatnessParagraph = document.createElement('div');
    greatnessParagraph.classList.add('greatness-of-restaurant');
    greatnessParagraph.textContent = 'This is undoubtably one of the greatest restaurants to ever be created!';
    centerMainDiv.appendChild(greatnessParagraph);

}



generateHomePage();