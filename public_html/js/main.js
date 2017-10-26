


'use strict';
var windowWidth = window.innerWidth;
console.log("Window width equals " + windowWidth + "px");
var navToggle = document.querySelector(".hamburger");
var navItems = document.querySelector(".link-container");
var navFirstItem = document.querySelector(".link-container a");
var MINIMUM_MENU_WIDTH = 868;

adjustMenuVisibility(windowWidth < MINIMUM_MENU_WIDTH);

window.addEventListener("resize", function () {
    if(!document.body.classList.contains("menu-open") || window.innerWidth > MINIMUM_MENU_WIDTH) {
        adjustMenuVisibility(window.innerWidth < MINIMUM_MENU_WIDTH);
    }

});

navToggle.addEventListener("click", function () {
    toggleMenuOpen(navItems.classList.contains("hidden"));
});

//DONT FORGET LABELLED BY! (NEED TO LOOK UP)


function adjustMenuVisibility(showMenu) {
    if (showMenu === true) {
        navToggle.classList.remove("hidden");
        navItems.classList.add("hidden");
        navItems.setAttribute("aria-labelledby", "nav-toggle");
        navToggle.setAttribute("aria-hidden", false);
        navItems.setAttribute("aria-hidden", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        document.body.classList.remove("menu-open");
        navToggle.classList.add("hidden");
        navItems.classList.remove("hidden");
        navToggle.setAttribute("aria-hidden", true);
        navItems.setAttribute("aria-hidden", false);
    }
}

function toggleMenuOpen(openMenu) {
    if(openMenu === true) {
        document.body.classList.add("menu-open");
        navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden", false);
        navToggle.setAttribute("aria-expanded", true);
        navFirstItem.focus();
    } else {
        document.body.classList.remove("menu-open");
        navItems.classList.add("hidden");
        navItems.setAttribute("aria-hidden", true);
        navToggle.setAttribute("aria-expanded", false);
    }
}