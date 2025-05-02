import './styles.css';
import about_content from "./about";
import menu_content from "./menu";
import home_content from "./home";

const page_content = document.getElementById("content");
const button = document.querySelector("#buttons");

document.addEventListener('DOMContentLoaded', ()=>{
    page_content.innerHTML = home_content();
});

button.addEventListener('click', (e)=>{
    if(e.target.classList.contains('home'))page_content.innerHTML = home_content();
    else if(e.target.classList.contains('about'))page_content.innerHTML = about_content();
    else if(e.target.classList.contains('menu'))page_content.innerHTML = menu_content();
});