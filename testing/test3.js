const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
// const hamburger = document.querySelector('.hamburger');
// const hamburger = document.querySelector('.hamburger');
// const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    // navMenu.classList.toggle("active");
});

document.querySelectorAll('.nav-link').forEach(e => {
    addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle("active");
    })
});

/*
for some reason, I can only have one toggle for the hambuer and o
one toggle for the navMenu

UPDATE: hamburger classList toggle
DO NOT ADD navMeny classList toggle

then on the forEach() add both toggles
*/