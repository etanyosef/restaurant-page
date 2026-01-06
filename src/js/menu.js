import menu1 from "../img/sagit.jpg";
import chickenTinola from "../img/chicken-tinola.jpg";

const menu = [
    {
        name: "Chicken Tinola",
        description: "Chicken Tinola is a Filipino soup dish. It involves cooking chicken pieces in ginger broth. It is a popular cold weather dish. I always feel warm and cozy every time I eat it. This Filipino Chicken Soup is best enjoyed with fish sauce as dipping sauce, and a cup of warm white rice.",
        price: "Php 200",
        url: chickenTinola,
    },
    {
        name: "Menu 2",
        description: "Menu2 description",
        price: "Php 400",
        url: menu1,
    },
];

export const renderMenu = () => {
    const content = document.getElementById("content");
    const h2 = document.createElement("h2");
    const menuContainer = document.createElement("div");

    content.textContent = "";

    h2.textContent = "Menu";
    content.append(h2);

    menu.forEach(item => {
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

        img.src = item.url;
        name.textContent = item.name;
        price.textContent = item.price;
        description.textContent = item.description;

        menuTitle.append(name, price);
        card.append(img, menuTitle, description);
        menuContainer.append(card);
    });

    menuContainer.classList.add("menu-container");
    content.append(menuContainer);
}