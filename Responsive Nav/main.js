const hamburger = document.getElementById('hamburger');
const list = document.getElementsByClassName('nav-link')[0];
let counter = 1;

function toggleClass() {
        list.classList.toggle('clip-path-nav');
        counter*=-1;
}

hamburger.addEventListener('click', toggleClass);

