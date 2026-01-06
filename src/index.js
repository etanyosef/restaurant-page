import "./css/style.css";
import { renderHomepage } from "./js/homepage.js";
import { renderMenu } from "./js/menu.js";
import { renderAbout } from "./js/about.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

renderHomepage();

homeBtn.addEventListener("click", () => renderHomepage());
menuBtn.addEventListener("click", () => renderMenu());
aboutBtn.addEventListener("click", () => renderAbout());

console.log("Hello World!");