(function ($) {
    "use strict"; // Start of use strict
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });
})(jQuery); // End of use strict
$(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);
        if (scrollTop >= 200) {
            $('.navbar').addClass('navbar-scrolled');
            $('.btn-danger').css("padding", "5px");
            $('.btn-danger').css("margin-top", "10px");
            $('.logo-stryve').css("width", "100px");
        } else if (scrollTop < 200) {
            $('.navbar').removeClass('navbar-scrolled');
            $('.btn-danger').css("padding", "15px");
            $('.btn-danger').css("margin-top", "0px");
            $('.logo-stryve').css("width", "140px");
        }
    });
});
$(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);
        if (scrollTop >= 400) {
            $('.return-to-top').addClass('animated');
            $('.return-to-top').addClass('fadeIn');
            $('.return-to-top').removeClass('fadeOut');
            $('.return-to-top').css("display", "block");
        } else if (scrollTop < 400) {
            $('.return-to-top').addClass('animated');
            $('.return-to-top').removeClass('fadeIn');
            $('.return-to-top').addClass('fadeOut');
        }
    });
});


$(document).ready(function () {
    var $eachInput = $('.contact-section input.input-text');
    $eachInput.focus(function () {
        var $this = $(this);
        $this.closest('.display-block').addClass('label-active');
        if ($this.val() != " ") {
            $this.closest('.display-block').addClass('label-active');
        } else {
            $this.closest('.display-block').removeClass('label-active');
        }
    });
    var $eachInput = $('.contact-section .input-text-message');
    $eachInput.focus(function () {
        var $this = $(this);
        $this.closest('.display-block').addClass('label-active');
        if ($this.val() != " ") {
            $this.closest('.display-block').addClass('label-active');
        } else {
            $this.closest('.display-block').removeClass('label-active');
        }
    });
})
