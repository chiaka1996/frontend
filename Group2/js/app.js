console.log("demo 1");
// Hamburger JS
const ham = document.querySelector(".hamburger");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const navbar = document.querySelector(".Mobile-menu");
const body = document.querySelector("html");

console.log("demo 2");

const menuOpen = e => {
    console.log("demo 3");
    ham1.classList.toggle("ham-tilt-right");
    ham2.classList.toggle("ham-no-show");
    ham3.classList.toggle("ham-tilt-left");
    navbar.classList.toggle("nav-out");
    navbar.classList.toggle("MMmenu");
    body.classList.toggle("no-scroll");

    console.log("work")
};
ham.addEventListener("click", menuOpen);


console.log("demo 3");


$(document).ready(function () {
    // Show or hide the sticky footer button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })
});
