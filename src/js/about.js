const content = document.getElementById("content");
const h2 = document.createElement("h2");

export const renderAbout = () => {
    content.textContent = "";

    h2.textContent = "About";

    content.append(h2);
}