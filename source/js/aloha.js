$(function () {
    $("#content").css("min-height", $(window).height() - 40 -2 - 30);
    $('pre').addClass('prettyprint');
    // prettyprint();
    // hljs.initHighlightingOnLoad();

    prettyPrint();


    // $('.ui.search')
    //     .search({
    //         type          : 'category',
    //         minCharacters : 3,
    //         apiSettings   : {
    //             onResponse: function(githubResponse) {
    //                 var
    //                     response = {
    //                         results : {}
    //                     }
    //                     ;
    //                 // translate GitHub API response to work with search
    //                 $.each(githubResponse.items, function(index, item) {
    //                     var
    //                         language   = item.language || 'Unknown',
    //                         maxResults = 8
    //                         ;
    //                     if(index >= maxResults) {
    //                         return false;
    //                     }
    //                     // create new language category
    //                     if(response.results[language] === undefined) {
    //                         response.results[language] = {
    //                             name    : language,
    //                             results : []
    //                         };
    //                     }
    //                     // add result to category
    //                     response.results[language].results.push({
    //                         title       : item.name,
    //                         description : item.description,
    //                         url         : item.html_url
    //                     });
    //                 });
    //                 return response;
    //             },
    //             url: '//api.github.com/search/repositories?q={query}'
    //         }
    //     })
    // ;
})