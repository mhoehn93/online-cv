function toggleMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');

    burger.classList.toggle('active');

    if (nav.style.height === '0px' || !nav.style.height) {
        nav.style.display = 'flex';
        nav.style.height = `${nav.scrollHeight}px`; // expand to full height
    } else {
        nav.style.height = '0px'; // Collapse
        setTimeout(() => {nav.style.display = 'none'}, 400);
    }
}

function scrollToAnchor(target) {
    const targetElement = document.getElementById(`${target}`);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 52;
    console.log(targetPosition);
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    toggleMenu();
}

window.onload = function() {
    const elements = document.querySelectorAll("body");
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("fade-in");
        }, index * 100); // Delay each element by 100ms
    });
}