$(function () {
    $("#content").css("min-height", $(window).height() - 40 -2 - 30);
    $('pre').addClass('prettyprint');
    $.scrollUp({
        scrollDistance: 100,
        scrollText: ''
    });
})