const menuHamburguer = document.querySelector("#menuHamburguer");
const navMenu = document.querySelector(".nav_menu");

menuHamburguer.addEventListener("click", () => {
    navMenu.classList.toggle("ativo");
});