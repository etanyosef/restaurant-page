const content = document.getElementById("content");
const h2 = document.createElement("h2");

export const homepage = () => {
    content.textContent = "";

    h2.textContent = "Welcome!";

    content.append(h2);
}