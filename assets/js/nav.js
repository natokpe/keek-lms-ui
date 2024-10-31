import $ from 'jquery';

$(document).ready(function() {
    "use strict";

    $('.navbar-nav-toggle, .navbar-nav-toggle-icon').each(function (i, el) {
        $(this).on('click', function (e) {
            $('body').toggleClass('navbar-nav-active');
        });
    });

    $('.navbar-notif-toggle').each(function (i, el) {
        $(this).on('click', function (e) {
            $('body').toggleClass('navbar-notif-active');
        });
    });

    $(window).on('scroll mousemove focus', function(e) {
        let $scr = $(window).scrollTop();

        if ($scr > 0) {
            $('body').addClass('page-scroll');
        } else {
            $('body').removeClass('page-scroll');
        }

        if ($scr >= 100) {
            $('body').addClass('page-scroll-100');
        } else {
            $('body').removeClass('page-scroll-100');
        }
    });
});
