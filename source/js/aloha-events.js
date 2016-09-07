$(function () {
    $("#content").css("min-height", $(window).height() - 40 -2 - 30);
    $('pre').addClass('prettyprint');
    $.scrollUp({
        scrollDistance: 100,
        scrollText: ''
    });
    $("#menu-icon").on("click ", function () {
        $('.body #menu-sidebar')
            .sidebar({
                context: $('.body .bottom.segment')
            })
            .sidebar('attach events', '.body #menu-icon')
        ;
    });
    $("#right-menu-icon").on("click ", function () {
        $('.body #right-menu-sidebar')
            .sidebar({
                context: $('.body .bottom.segment')
            })
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('attach events', '.body #right-menu-icon')
        ;
    });
    $("#menu-icon").click();
    $("#right-menu-icon").click();
})