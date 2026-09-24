document.addEventListener('DOMContentLoaded', function() {
    const navInit = () => {
        //изменение цвета фона меню
        const navbarCollapsible = document.body.querySelector('#mainNav');

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }

        const links = document.querySelectorAll('.nav-link'); //ищем все навигационные ссылки
        const sections = document.querySelectorAll('section'); //ищем все секции

        sections.forEach(section => { //для каждой секции
            if (window.scrollY >= (section.offsetTop - 100)) { //проверяем, если стр прокручена больше, чем расстояние секции от начала стр
                console.log(window.scrollY + " >= " + section.offsetTop + " " + section.id); //отладка, удалить
                links.forEach(link => { //для каждой ссылки
                    link.classList.remove('active') //удаляем активный класс
                    if (link.href.split('#').pop() === section.id) { //проверяем, если href ссылки без # === id екции
                        link.classList.add('active') //добавляем ссылке активный класс
                    }
                })
            }
        })
    }



    navInit();
    window.addEventListener('scroll', () => {
        navInit(); //запускаем функцию при скролле станицы

    })
    window.addEventListener('resize', () => {
        navInit() ////запускаем функцию при ресайзе станицы
    })
})