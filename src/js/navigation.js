const btnAbout = document.querySelector("#btn_about");

btnAbout.addEventListener("click", () => {
    window.location.href = "/pages/about_us.html";
});

const cardBercario = document.querySelector("#bercario_card");

cardBercario.addEventListener("click", () => {
    window.location.href = "/pages/turmas.html#bercario";
});

const cardMaternal = document.querySelector("#maternal_card");

cardMaternal.addEventListener("click", () => {
    window.location.href = "/pages/turmas.html#maternal";
});

const cardEtapa = document.querySelector("#etapa_card");

cardEtapa.addEventListener("click", () => {
    window.location.href = "/pages/turmas.html#etapa";
});