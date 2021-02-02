import { addClass, removeClass } from "./utils-class";

const menu = document.getElementById("hamburger");
const list = document.getElementById("list");
console.log(list)
menu.addEventListener("click", function(){
    list.classList.toggle("hidden")
});