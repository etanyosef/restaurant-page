const content = document.getElementById("content");
const pageHeading = document.createElement("h1");

export const homepage = () => {
    content.textContent = "";

    pageHeading.textContent = "Home";

    content.append(pageHeading);
}

export const menu = () => {
    content.textContent = "";

    pageHeading.textContent = "Menu";

    content.append(pageHeading);
}

export const about = () => {
    content.textContent = "";

    pageHeading.textContent = "About";

    content.append(pageHeading);
}