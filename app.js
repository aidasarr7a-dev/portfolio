// =========================
// MENU MOBILE
// =========================

const navLinks = document.querySelector(".nav-links");
const menuButton = document.querySelector(".menu-button");
const menuIcon = menuButton.querySelector("i");

function fermerMenu() {
    navLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
    menuIcon.className = "fa-solid fa-bars";
}

menuButton.addEventListener("click", function () {

    const ouvert = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", ouvert);
    menuButton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    menuIcon.className = ouvert ? "fa-solid fa-xmark" : "fa-solid fa-bars";

});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", fermerMenu);
});


// Fermer le menu avec la touche Échap

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        fermerMenu();
    }
});


// =========================
// LIEN ACTIF DANS LE MENU
// =========================

const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            document.querySelectorAll(".nav-links a").forEach(function (link) {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );
            });

        }

    });

}, {
    rootMargin: "-45% 0px -50% 0px"
});

sections.forEach(function (section) {
    observer.observe(section);
});
