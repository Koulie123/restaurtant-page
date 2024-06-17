

class MenuItem {
    constructor(name, type, description, price) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
    }
}


// export default menuItemList;

const returnMenuItems = () => {
    const menuItemList = [
        new MenuItem("Fries", "app", "A big backet of fries.", "$3.99"),
        new MenuItem("Greek Salad", "app", "Made with fresh tomatoes, cucumber, onions and feta.", "$6.99"),
        new MenuItem("Dos Equis", "drink", "A very interesting drink for interesting people", "$3.50")
    ];
    return menuItemList;
}
function createItemsFromFilteredList(list, parent) {
    list.forEach((element) => {
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        let menuItemName = document.createElement('div');
        menuItemName.classList.add('menu-item-name');
        menuItemName.textContent = element.name;
        let menuItemPrice = document.createElement('div');
        menuItemPrice.classList.add('menu-item-price');
        menuItemPrice.textContent = element.price;
        let menuItemDescription = document.createElement('div');
        menuItemDescription.classList.add('menu-item-description');
        menuItemDescription.textContent = element.description;
        
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemPrice);
        menuItem.appendChild(menuItemDescription);
        parent.appendChild(menuItem);
    })
}

export default function generateMenuPage(parent) {
    parent.innerHTML = '';
    const menuItemList = [
        new MenuItem("Fries", "app", "A big backet of fries.", "$3.99"),
        new MenuItem("Greek Salad", "app", "Made with fresh tomatoes, cucumber, onions and feta.", "$6.99"),
        new MenuItem("Dos Equis", "drink", "A very interesting drink for interesting people", "$3.50")
    ];

    const appitizerHeader = document.createElement('div');
    appitizerHeader.classList.add('menu-header');
    appitizerHeader.textContent = 'Appitizers';
    parent.appendChild(appitizerHeader);

    const appitizersList = menuItemList.filter((item) => item.type == "app");
    createItemsFromFilteredList(appitizersList, parent);
    


    const drinksHeader = document.createElement('div');
    drinksHeader.classList.add('menu-header');
    drinksHeader.textContent = 'Drinks';
    parent.appendChild(drinksHeader);
    const drinksList = menuItemList.filter((item) => item.type == "drink");
    createItemsFromFilteredList(drinksList, parent);


}
