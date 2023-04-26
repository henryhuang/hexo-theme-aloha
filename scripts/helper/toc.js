'use strict';

let cheerio;

function tocHelper(str) {
  if (!cheerio) cheerio = require('cheerio');

  const $ = cheerio.load(str);
  const headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return '';

  const listNumber = true;
  let result = '<ul class="ui list">';
  const lastNumber = [0, 0, 0, 0, 0, 0];
  let firstLevel = 0;
  let lastLevel = 0;
  let i = 0;

  const style = '<style type="text/css">' +
    '.ui.list li > a > span:first-child {' +
    '  display: inline-block;' +
    '  width: 5em;' +
    '}' +
    '</style>';
  $('head').append(style);

  headings.each(function() {
    const level = +this.name[1];
    const id = $(this).attr('id');
    const text = $(this).text();

    lastNumber[level - 1]++;

    for (i = level; i <= 5; i++) {
      lastNumber[i] = 0;
    }

    if (firstLevel) {
      for (i = level; i < lastLevel; i++) {
        result += '</li></ul>';
      }

      if (level > lastLevel) {
        result += '<ul>';
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

      result += '&nbsp;&nbsp;&nbsp;&nbsp;</span> ';
    }

    result += '<span>' + text + '</span></a>';

    lastLevel = level;
  });

  for (i = firstLevel - 1; i < lastLevel; i++) {
    result += '</li></ul>';
  }

  return result;
}

module.exports = tocHelper;
