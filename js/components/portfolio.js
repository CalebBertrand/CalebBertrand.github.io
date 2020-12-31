import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

export const setupPortfolio = function() {
    $('#portfolio').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEasing: 'easeOutExpo',
        dots: true,
        swipe: true,
        pauseOnDotsHover: true,
        arrows: false
    });

    $('.slick-dots').width($('.slick-dots li').length * 45)
}