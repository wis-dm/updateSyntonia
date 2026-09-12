"use strict";

const backToTop = document.querySelector('#backToTop');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');



// Back to Top Function
window.addEventListener('scroll', ()=> {
    backToTop.classList.toggle('show', window.scrollY > 400);
});

backToTop.addEventListener('click', ()=> {
    window.scrollTo({top: 0, behavior: 'smooth'});
})


//  Hamburger Menu
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});