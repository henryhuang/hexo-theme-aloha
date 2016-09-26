hexo.extend.filter.register('after_post_render', function(data){
    var cheerio = require('cheerio');
    var $ = cheerio.load(data.content);
    if($('p img').length > 0) {
        $('p img').each(function (index, item) {
            $(item).addClass("ui centered medium fluid image").wrap('<a class="magnific-img" href="' + $(item).attr('src') + '"></a>');
        })
    }
    return data.content = $.html();
});