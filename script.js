
document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        // console.log("hi");
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // window.onscroll = () => {
    //     sections.forEach(sec => {
    //         let top = window.scrollY;
    //         let offset = sec.offsetTop - 150;
    //         let height = sec.offsetHeight;
    //         let id = sec.getAttribute('id');

    //         if (top >= offset && top < offset + height) {
    //             navLinks.forEach(link => {
    //                 link.classList.remove('active');
    //                 document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
    //             });
    //         }
    //     });

    //     // Sticky navbar
    //     let header = document.querySelector('header');
    //     header.classList.toggle('sticky', window.scrollY > 100);
    // };

    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home_content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home_content h1, .about-img', { origin: 'top' });
});
