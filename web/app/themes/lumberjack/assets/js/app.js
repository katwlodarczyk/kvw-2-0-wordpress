// MENU
$(document).ready(function () {

    $(".responsive-button").click(function () {
        $(".menu-icon").toggle();
        $(".menu").toggle();
        $(".responsive-navigation").toggle();
        $('#overlay').toggleClass('overlay-active');
    });

    // close offscreen when screen size increases
    let $window = $(window);
    $window.resize(function () {

        let windowWidth = $window.width();

        if (windowWidth > 1024 ) {
            $('#overlay').removeClass("overlay-active");
            $(".responsive-navigation").css("display", "none");
            $(".menu-close").css("display", "none");
            $(".menu-menu-icon").css("display", "flex");
            $(".menu-close-icon").css("display", "none");
        }
    })

    // SLICK.JS SLIDER
    // carousel
    $('.carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 650,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        autoplay: true
    });

    //carouselWithPreview
    $('.carousel-with-preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        asNavFor: '.carousel-with-preview-nav',
        initialSlide: 0,
        swipe: true,
        infinite: true,
        speed: 650,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        autoplay: true,
        responsive: [
            {   breakpoint: 480,
                settings: {
                    dots: false,
                }
        }
        ]
    });
    $('.carousel-with-preview-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.carousel-with-preview',
        dots: false,
        arrows: true,
        focusOnSelect: false,
        infinite: true,
        initialSlide: 0,
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
        },
            {   breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
        }
        ]
    });

})


// AUTOMATIC DATE UPDATE FOR FOOTER

const footerYear = document.getElementById("year");
const date = new Date();
const year = date.getFullYear();

footerYear.innerText = year;

