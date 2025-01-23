document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
    `;

    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(hamburger, nav);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});