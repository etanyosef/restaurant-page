import { homepage, menu, about } from "./restaurant.js"

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homepage();

homeBtn.addEventListener("click", () => homepage());
menuBtn.addEventListener("click", () => menu());

console.log("Hello World!");