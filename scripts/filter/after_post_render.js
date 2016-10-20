'use strict';

var cheerio;

function afterPostRenderFilter(data){
    var cheerio = require('cheerio');
    var $ = cheerio.load(data.content);
    if($('p img').length > 0) {
        $('p img').each(function (index, item) {
            $(item).addClass("ui centered image").wrap('<a class="magnific-img" href="' + $(item).attr('src') + '"></a>');
        });
    }
    $('ol, ul').each(function (index, item) {
        var parents = $(item).parent();
        if(parents.length > 0) {
            if(parents[0].tagName != 'li') {
                $(item).addClass("ui list");
            }
        } else {
            $(item).addClass("ui list");
        }
    });
    return data.content = $.html();
}

module.exports = afterPostRenderFilter;
