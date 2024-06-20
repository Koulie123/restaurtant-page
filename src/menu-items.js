

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
        new MenuItem("Greek Salad", "app", "Made with fresh tomatoes, cucumber, onions and feta", "$6.99"),
        new MenuItem("Caesar Salad", "app", "Classic Caesar Salad", "$4.00"),
        new MenuItem("Margherita Pizza", "pizza", "Made with slized mozzarella, basil, and olive oil", "$9.50"),
        new MenuItem("Marinara Pizza", "pizza", "Made with garlic, oregano, and olive oil", "$8.00"),
        new MenuItem("Dos Equis", "drink", "A very interesting drink for interesting people", "$3.50"),
        new MenuItem("Coca Cola", "drink", "Coco Cola Classic", "$1.00"),
        new MenuItem("Apple Pie", "dessert", "In house made apple Pie", "$3.00"),

    ];

    const appitizerHeader = document.createElement('div');
    appitizerHeader.classList.add('menu-header');
    appitizerHeader.classList.add('menu-header');
    appitizerHeader.textContent = 'Appitizers';
    parent.appendChild(appitizerHeader);

    const appitizersList = menuItemList.filter((item) => item.type == "app");
    createItemsFromFilteredList(appitizersList, parent);
    




    const pizzaHeader = document.createElement('div');
    pizzaHeader.classList.add('menu-header');
    pizzaHeader.textContent = "Pizza"
    parent.appendChild(pizzaHeader);
    const pizzaList = menuItemList.filter((item) => item.type == "pizza");
    createItemsFromFilteredList(pizzaList, parent);

    const drinksHeader = document.createElement('div');
    drinksHeader.classList.add('menu-header');
    drinksHeader.textContent = 'Drinks';
    parent.appendChild(drinksHeader);
    const drinksList = menuItemList.filter((item) => item.type == "drink");
    createItemsFromFilteredList(drinksList, parent);

    const dessertHeader = document.createElement('div');
    drinksHeader.classList.add('menu-header');
    drinksHeader.textContent = 'Dessert';
    parent.appendChild(drinksHeader);
    const dessertList = menuItemList.filter((item) => item.type == "dessert");
    createItemsFromFilteredList(dessertList, parent);
}
