const content = document.getElementById("content");
const h2 = document.createElement("h2");

export const menu = () => {
    content.textContent = "";

    h2.textContent = "Menu";

    content.append(h2);
}