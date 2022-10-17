// core version + navigation, pagination modules:
import Swiper,  { Navigation, Pagination, Autoplay } from "swiper";

// Инициализация слайдера изображений

let init = false;
let swiper;

function swiperCard() {
    if (window.innerWidth <= 959) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiper-clients", { // ищем слайдер превью по селектору
                // задаем параметры
                modules: [Navigation, Pagination, Autoplay],
                direction: "vertical", // вертикальная прокрутка
                slidesPerView: 1, // показывать по 1 изображению
                spaceBetween: 30, // расстояние между слайдами
                mousewheel: true, // можно прокручивать изображения колёсиком мыши
                navigation: { // задаем кнопки навигации
                    nextEl: ".slider__next", // кнопка Next
                    prevEl: ".slider__prev" // кнопка Prev
                },
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                grabCursor: true, // менять иконку курсора
                breakpoints: { // условия для разных размеров окна браузера
                    // 0: { // при 0px и выше
                    //     direction: "horizontal", // горизонтальная прокрутка
                    // },
                    // 768: { // при 768px и выше
                    //     direction: "vertical", // вертикальная прокрутка
                    // }
                }
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

