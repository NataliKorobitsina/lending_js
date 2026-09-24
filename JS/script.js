document.addEventListener('DOMContentLoaded', function() {
    const navInit = () => {
        //изменение цвета фона меню
        const navbarCollapsible = document.body.querySelector('#mainNav');

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    }

    

    navInit();
    window.addEventListener('scroll', () => {
        navInit(); //запускаем функцию при скролле станицы

    })
    window.addEventListener('resize', () => {
        navInit() ////запускаем функцию при ресайзе станицы
    })
})