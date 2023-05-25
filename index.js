
// const navMenu = document.getElementsByClassName("navMenu");
// const navItem = document.getElementsByClassName("navItem");
// const hamburger = document.getElementsByClassName("hamburger");
// const closeIcon = document.getElementsByClassName("closeIcon");
// const menuIcon = document.getElementsByClassName("menuIcon");
// const navBar = document.getElementById("navBar");

const navMenu = document.querySelector(".navMenu");
const navItem = document.querySelectorAll(".navItem");
const hamburger = document.querySelector(".hamburger");
const bars = document.querySelectorAll('.bar');
// const closeIcon = document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");
// const navBar = document.querySelector("#navBar");
// const dropdown = document.querySelectorAll('.dropdown');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    // navMenu.classList.toggle('active');
})

document.querySelectorAll('.navItem').forEach(item => {
    addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle("active");
    })
})



// const hamburger = document.querySelector(".hamburger");
// const navItem = document.querySelector(".nav-item");
// const navBar = document.getElementbyID(navbar);

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navItem.classList.toggle("active");
// })

// document.querySelector(".nav-item").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navItem.classList.remove("active");

// }))


// if (/* burger is clicked */) {
// /* toggle class to show menu and turn burger to x */
// } 