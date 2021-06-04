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
    // banner slider
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

})


// AUTOMATIC DATE UPDATE FOR FOOTER

const footerYear = document.getElementById("year");
const date = new Date();
const year = date.getFullYear();

footerYear.innerText = year;

