const $body = document.querySelector('#page-top');
const $about = document.querySelector('#about');
const $experience = document.querySelector('#experience');
const $education = document.querySelector('#education');
const $skills = document.querySelector('#skills');
const $interests = document.querySelector('#interests');
const $links = document.querySelectorAll('.nav-link');
const $navToggler = document.querySelector('.nav-toggler');
const $sideNav = document.querySelector('#sideNav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= $about.offsetTop && window.pageYOffset < $experience.offsetTop) {
        activateLink($links, 'about');
    } else if (window.pageYOffset >= $experience.offsetTop && window.pageYOffset < $education.offsetTop) {
        activateLink($links, 'experience');
    } else if (window.pageYOffset >= $education.offsetTop && window.pageYOffset < $skills.offsetTop) {
        activateLink($links, 'education');
    } else if (window.pageYOffset >= $skills.offsetTop && window.pageYOffset < $interests.offsetTop) {
        activateLink($links, 'skills');
    } else {
        activateLink($links, 'interests');
    }
});

function activateLink(elements, name) {
    elements.forEach(elmnt => {
        elmnt.classList.remove('active-nav-item');

        if (elmnt.classList.contains(`${name}`)) elmnt.classList.add('active-nav-item');
    });
}

$navToggler.addEventListener('click', (e) => {
    $sideNav.classList.toggle('show-nav');
    $navToggler.classList.toggle('nav-toggler-effects');
});