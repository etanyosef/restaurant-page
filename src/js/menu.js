import menu1 from "../img/sagit.jpg";

const menu = [
    {
        name: "Menu 1",
        description: "Menu description",
        price: "Php 200",
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
        const name = document.createElement("h3");
        const price = document.createElement("div");
        const description = document.createElement("p");

        name.textContent = item.name;
        price.textContent = item.price;
        description.textContent = item.description;

        card.append(name, price, description);
        menuContainer.append(card);
    });

    menuContainer.classList.add("menu-container");
    content.append(menuContainer);
}