window.addEventListener("DOMContentLoaded", () => {

    // Menu
    const menu = document.querySelector(".aside-bar"),
        menuItem = document.querySelectorAll(".aside-bar-navigation__list-item-link"),
        hamburger = document.querySelector(".mobile-header__hamburger"),
        menuClose = document.querySelector(".aside-bar__close-btn");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("aside-bar_active");
    });

    menuClose.addEventListener("click", () => {
        menu.classList.toggle("aside-bar_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            menu.classList.toggle("aside-bar");
        });
    });



});