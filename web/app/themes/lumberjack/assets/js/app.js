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

        if (windowWidth > 768 ) {
            $('#overlay').removeClass("overlay-active");
            $(".responsive-navigation").css("display", "none");
            $(".menu-close").css("display", "none");
            $(".menu-menu-icon").css("display", "flex");
            $(".menu-close-icon").css("display", "none");
        }
    })
})
