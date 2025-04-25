//index.js
import "./style.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { resetDisplay } from "./handlers";

const displayHandler = (() => {
  loadHome();
  let isHovering = false

  document.querySelector(".dropdown").addEventListener("mouseenter",()=>{
    document.querySelector('nav').classList.add("visible")
    isHovering = true
  })

  document.querySelector(".dropdown").addEventListener("mouseleave",()=>{
      setTimeout(() => {
        if(!isHovering)document.querySelector('nav').classList.remove("visible")
      },500)
    
  })

  document.querySelector(".dropdown nav").addEventListener("mouseenter",()=>{
    isHovering = true
  })

  document.querySelector(".dropdown nav").addEventListener("mouseleave",()=>{
    setTimeout(() => {
      document.querySelector('nav').classList.remove("visible")
      },500)
  isHovering = false
  })



  document.querySelector(".home-btn").classList.add("clicked");
  const content = document.querySelector("#content");
  document.querySelector("nav").addEventListener("click", (e) => {
    switch (true) {
      case e.target.classList.contains("home-btn") &&
        !e.target.classList.contains("clicked"):
        e.preventDefault()
        resetDisplay(e);
        loadHome();
        break;
      case e.target.classList.contains("menu-btn"):
        e.preventDefault()

        resetDisplay(e);
        loadMenu();
        break;
    }
  });
})();

console.log("START");
