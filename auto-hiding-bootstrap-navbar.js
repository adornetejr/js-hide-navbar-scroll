
$(document).ready(function () {
    var scrollPos = $(window).scrollTop(); //Current scroll's position of the window (at the beginning would be 0)
    var navPos = $("nav").offset().top; //Current nav's position (at the beginnig would be wherever you set the nav)
    var navShowing = true; //Indicates whether the nav is currently shown or hidden.
    var navOffset = 150; //Amount of pixels from its current position the nav will be moved to (adjust to size of navbar)
    var navMoveSpeed = 400; //Duration (in ms) of the nav's movement

    $(window).scroll(function () {
        var newScroll = $(this).scrollTop();
        if (newScroll > scrollPos) {
            //Scroll down
            if (navShowing) {
                var newNavPos = navPos -= navOffset;
                $("nav").animate({ top: newNavPos }, navMoveSpeed);
                navShowing = false;
            }
        }
        else {
            //Scroll up
            if (!navShowing) {
                var newNavPos = navPos += navOffset;
                $("nav").animate({ top: newNavPos }, navMoveSpeed);
                navShowing = true;
            }
        }
        scrollPos = newScroll;
    });
});
