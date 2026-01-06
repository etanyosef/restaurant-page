import "./css/style.css";
import { homepage } from "./js/homepage.js";
import { menu } from "./js/menu.js";
import { about } from "./js/about.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homepage();

homeBtn.addEventListener("click", () => homepage());
menuBtn.addEventListener("click", () => menu());
aboutBtn.addEventListener("click", () => about());

console.log("Hello World!");