// =========================
// MENU MOBILE
// =========================

const navLinks = document.querySelector(".nav-links");

const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";
menuButton.classList.add("menu-button");

document.querySelector(".navbar").prepend(menuButton);

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// =========================
// FORMULAIRE DE CONTACT
// =========================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Merci pour votre message ! Je vous répondrai bientôt.");

    form.reset();

});


// =========================
// ANIMATION AU DÉFILEMENT
// =========================

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


elements.forEach(function (element) {
    observer.observe(element);
});