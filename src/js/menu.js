// main dishes image
import chickenTinola from "../img/chicken-tinola.jpg";
import humba from "../img/humba.png";
import bulad from "../img/bulad.png";
import lechonKawali from "../img/lechon-kawali.png";
// drinks image

// dessert image

const mainDishesMenu = [
    {
        name: "Chicken Tinola",
        description: "Chicken Tinola is a Filipino soup dish. It involves cooking chicken pieces in ginger broth. It is a popular cold weather dish. This Filipino Chicken Soup is best enjoyed with fish sauce as dipping sauce, and a cup of warm white rice.",
        price: "180",
        url: chickenTinola,
    },
    {
        name: "Humba",
        description: "Humba is a dish of tender pork, salted black beans, and an assortment of spices. With its deep flavor palate and numerous ingredients, it is the perfect combination of sweet and savory.",
        price: "200",
        url: humba,
    },
    {
        name: "Bulad(Bangus)",
        description : "Bulad are dried fish. Fish prepared as bulad are usually split open (though they may be left whole), gutted, salted liberally, and then sun and air-dried.",
        price: "80",
        url: bulad,
    },
    {
        name: "Lechon Kawali",
        description: "Lechon kawali is a dish that Filipinos grew up eating and never get tired of. This lechon kawali recipe produces crispy deep fried pork belly with skin that crackles and meat that stays tender and juicy.",
        price: "240",
        url: lechonKawali,
    },
];

const drinksMenu = [
    {

    },
    {

    },
];

const dessertMenu = [
    {

    },
];

const content = document.getElementById("content");
const menu = document.createElement("div");

export const renderMenu = () => {
    // clear content div    
    content.textContent = "";
    // add page title
    const title = document.createElement("h2");
    title.textContent = "Menu";
    content.append(title);

    renderMainDishes();
}

const renderMainDishes = () => {
    const mainDishesContainer = document.createElement("section");
    const mainDishTitle = document.createElement("h3");  
    const mainDishes = document.createElement("div");      

    // main dishes
    mainDishTitle.textContent = "Main Dishes";
    mainDishesContainer.append(mainDishTitle);

    mainDishesMenu.forEach(dish => {
        const card = document.createElement("div");
        const menuTitle = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h3");
        const price = document.createElement("div");
        const description = document.createElement("p");

        card.classList.add("card");
        img.classList.add("img");
        menuTitle.classList.add("menu-title");
        name.classList.add("name");
        price.classList.add("price");
        description.classList.add("description");

        img.src = dish.url;
        name.textContent = dish.name;
        price.textContent = dish.price;
        description.textContent = dish.description;

        menuTitle.append(name, price);
        card.append(img, menuTitle, description);
        mainDishes.append(card);
    });

    menu.classList.add("menu");
    mainDishes.classList.add("card-container");
    mainDishesContainer.classList.add("main-dishes");

    mainDishesContainer.append(mainDishes);
    menu.append(mainDishesContainer);
    content.append(menu);
}

const renderDrinks = () => {

}