/* Объявление глобальных переменных */
const navbar__adaptive_menuBurger = document.getElementById("navbar__adaptive_menuBurger");
const navbar__adaptive_menu = document.getElementById("navbar__adaptive_menu");
const navbar__adaptive_menu_cross = document.getElementById("navbar__adaptive_menu_cross");
const sales__tabs__item__all = document.getElementById("sales__tabs__item__all");
const sales__tabs__item__customers = document.getElementById("sales__tabs__item__customers");
const sales__tabs__item__service = document.getElementById("sales__tabs__item__service");
const sales__tabs__item__trade_in = document.getElementById("sales__tabs__item__trade_in");
const sales__all = document.getElementById("sales__all");
const sales__customers = document.getElementById("sales__customers");
const sales__service = document.getElementById("sales__service");
const sales__trade_in = document.getElementById("sales__trade_in");
const popup__background = document.getElementById("popup__background");

/* Открытие и закрытие бургер меню */
navbar__adaptive_menuBurger.addEventListener("click", () => {
    navbar__adaptive_menu.classList.toggle("navbar__adaptive--active");
    popup__background.classList.add("popup__background__active");
})

navbar__adaptive_menu_cross.addEventListener("click", () => {
    navbar__adaptive_menu.classList.remove("navbar__adaptive--active");
    popup__background.classList.remove("popup__background__active");
})


/* Нажатие на табы в разделе "Акции" и переключение секций */
const sales__tabs__items = [sales__tabs__item__all, sales__tabs__item__customers, sales__tabs__item__service, sales__tabs__item__trade_in];
let sales__tabs__item__active = sales__tabs__item__all;

const sales__sections = [sales__all, sales__customers, sales__service, sales__trade_in];

for (let sales__tabs__item of sales__tabs__items) {
    sales__tabs__item.addEventListener("click", () => {
        sales__tabs__item.classList.add("sales__tabs--item--active");
        sales__tabs__item__active.classList.remove("sales__tabs--item--active");

        sales__sections[sales__tabs__items.indexOf(sales__tabs__item)].classList.add("sales--active");
        sales__sections[sales__tabs__items.indexOf(sales__tabs__item__active)].classList.remove("sales--active");

        sales__tabs__item__active = sales__tabs__item;
    })
}