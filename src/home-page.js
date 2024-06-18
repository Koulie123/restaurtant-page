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
    greatnessParagraph.classList.add('content-paragraph');
    greatnessParagraph.textContent = 'This is undoubtably one of the greatest restaurants to ever be created!';
    parent.appendChild(greatnessParagraph);

    const extraParagraph = document.createElement('div');
    extraParagraph.classList.add('content-paragraph');
    extraParagraph.textContent =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis vulputate tellus sit amet aliquam. Suspendisse non risus quis metus tristique ultricies vel sit amet augue. Sed volutpat, massa sed ultricies eleifend, leo ipsum aliquam velit, et varius augue libero ut sapien. Fusce tellus ipsum, suscipit gravida volutpat quis, mollis at ipsum. Nunc tempus justo quis ipsum varius, nec fermentum orci convallis. Vivamus nec tincidunt purus, et interdum est. Duis venenatis pretium sem. Nunc arcu erat, dictum vel dapibus ut, venenatis ut elit. Nunc molestie convallis risus, eget ultricies ipsum ultrices at. ";
    parent.appendChild(extraParagraph);
}