document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu'); // Знаходимо бургер-меню
    const nav = document.querySelector('nav'); // Знаходимо меню навігації

    // Додаємо обробник події "клік" на бургер-меню
    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active'); // Перемикаємо клас active у меню
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const developmentsSection = document.querySelector(".developments");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    developmentsSection.classList.add("visible");
                } else {
                    developmentsSection.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.5, // Виконується, коли 50% секції видно
        }
    );

    observer.observe(developmentsSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const developmentsSection = document.querySelector(".developments");
    const developmentsItems = document.querySelectorAll(".developments-item");

    // Observer для секції developments
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    developmentsSection.classList.add("visible");

                    // Додаємо клас для появи блоків з затримкою
                    developmentsItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add("visible");
                        }, index * 900); // Затримка 300мс для кожного блоку
                    });
                } else {
                    // При виході з області видимості видаляємо класи
                    developmentsSection.classList.remove("visible");
                    developmentsItems.forEach((item) => {
                        item.classList.remove("visible");
                    });
                }
            });
        },
        {
            threshold: 0.5, // Виконується, коли 50% секції видно
        }
    );

    sectionObserver.observe(developmentsSection);
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1000); // Таймер для більш плавного переходу
});







