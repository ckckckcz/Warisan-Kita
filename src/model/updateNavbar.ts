document.addEventListener('DOMContentLoaded', () => {
    const isHomePage = window.location.pathname === '/';
    const isBlogPage = window.location.pathname === '/blog';

    const navLinks = document.querySelectorAll('#mega-menu-icons a') as NodeListOf<HTMLAnchorElement>;
    const warisanKitaTitle = document.getElementById('warisanKitaTitle') as HTMLSpanElement;

    navLinks.forEach((link) => {
        if (isBlogPage) {
            link.classList.remove('text-white');
            link.classList.add('text-gray-900');
            link.classList.remove('hover:text-gray-900');
            link.classList.add('hover:text-gray-600');
        } else {
            link.classList.remove('text-gray-900');
            link.classList.add('text-white');
            link.classList.remove('hover:text-gray-600');
            link.classList.add('hover:text-gray-900');
        }
    });

    if (warisanKitaTitle) {
        if (isHomePage) {
            warisanKitaTitle.classList.remove('text-gray-900');
            warisanKitaTitle.classList.add('text-white');
        } else {
            warisanKitaTitle.classList.remove('text-white');
            warisanKitaTitle.classList.add('text-gray-900');
        }
    }
});