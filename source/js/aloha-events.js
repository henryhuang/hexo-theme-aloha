$(function () {
    // $("#content").css("min-height", $("#menu-sidebar").height() - 41);
    $('pre').addClass('prettyprint');
    // $.scrollUp({
    //     scrollDistance: 100,
    //     scrollText: ''
    // });
    $("#menu-icon").on("click", function () {
        $('#menu-sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
    });
    $("#right-menu-icon").on("click", function () {
        $('#right-menu-sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
        ;
    });
})