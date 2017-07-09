$(function () {
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
    $("#article-toc").sticky({ context: '#article-content' });
})