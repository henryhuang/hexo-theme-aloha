'use strict';

var cheerio;

function tocHelper(str) {

    if (!cheerio) cheerio = require('cheerio');

    var $ = cheerio.load(str);
    var headings = $('h1, h2, h3, h4, h5, h6');

    if (!headings.length) return '';

    var listNumber = false;
    var result = '<ol class="ui ordered list">';
    var lastNumber = [0, 0, 0, 0, 0, 0];
    var firstLevel = 0;
    var lastLevel = 0;
    var i = 0;

    headings.each(function() {
        var level = +this.name[1];
        var id = $(this).attr('id');
        var text = $(this).text();

        lastNumber[level - 1]++;

        for (i = level; i <= 5; i++) {
            lastNumber[i] = 0;
        }

        if (firstLevel) {
            for (i = level; i < lastLevel; i++) {
                result += '</li></ol>';
            }

            if (level > lastLevel) {
                result += '<ol>';
            } else {
                result += '</li>';
            }
        } else {
            firstLevel = level;
        }

        result += '<li>';
        result += '<a href="#' + id + '">';

        if (listNumber) {
            result += '<span>';

            for (i = firstLevel - 1; i < level; i++) {
                result += lastNumber[i] + '.';
            }

            result += '</span> ';
        }

        result += '<span>' + text + '</span></a>';

        lastLevel = level;
    });

    for (i = firstLevel - 1; i < lastLevel; i++) {
        result += '</li></ol>';
    }

    return result;
}

module.exports = tocHelper;
