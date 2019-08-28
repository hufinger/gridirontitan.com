const navSlide = () => {
    const mobile_menu = document.querySelector('.mobile_menu');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    mobile_menu.addEventListener('click', () => {
        nav.classList.toggle('nav_active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index/5 + 1.22}s';
            }
        });
        mobile_menu.classList.toggle('toggle');
    });
}

navSlide();