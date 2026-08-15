const menuHamburguer = document.querySelector("#menuHamburguer");
const menu = document.querySelector(".nav_menu");

menuHamburguer.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});