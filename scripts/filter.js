hexo.extend.filter.register('after_post_render', function(data){
    var cheerio = require('cheerio');
    var $ = cheerio.load(data.content);
    if($('p img').length > 0) {
        $('p img').each(function (index, item) {
            $(item).addClass("ui centered image").wrap('<a class="magnific-img" href="' + $(item).attr('src') + '"></a>');
        });
    }
    $('ol').each(function (index, item) {
        $(item).addClass("ui list");
        $(item).children("li").each(function (index, item) {
            $(item).addClass("item");
        });
    });
    return data.content = $.html();
});