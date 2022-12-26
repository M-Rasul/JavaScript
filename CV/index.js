'use strict';
const header = document.querySelector('.header');
const nameEl = document.querySelector('.name');
const makeFixed = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}
const nameObserver = new IntersectionObserver(makeFixed, {
    root: null,
    threshold: 0
})
nameObserver.observe(nameEl);