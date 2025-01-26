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