import mainImage from './images/dubai-image.jpg';

export default function generateHomePage(parent) {
    parent.innerHTML = '';


    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');
    const headerH2 = document.createElement('h2');

    //creating the header of the main page
    headerH2.textContent = "Welcome to Gino's Pizza";
    contentHeader.appendChild(headerH2);
    parent.appendChild(contentHeader);


    //creating the image of the main page
    const mainPicDiv = document.createElement('div');
    mainPicDiv.classList.add('restaurant-main-pic');
    const mainPicDivImage = document.createElement('img');
    mainPicDivImage.src = mainImage;
    mainPicDivImage.classList.add('main-image');
    mainPicDiv.appendChild(mainPicDivImage);
    parent.appendChild(mainPicDiv);

    //creating the "greatness of the restaurant paragraph"
    const greatnessParagraph = document.createElement('div');
    greatnessParagraph.classList.add('greatness-of-restaurant');
    greatnessParagraph.textContent = 'This is undoubtably one of the greatest restaurants to ever be created!';
    parent.appendChild(greatnessParagraph);
}