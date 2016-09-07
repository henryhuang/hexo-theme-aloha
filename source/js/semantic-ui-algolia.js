function semanticUiAlgolia() {

    var applicationID = algolia.applicationID;
    var apiKey = algolia.apiKey;
    var index = algolia.indexName;

    var client = algoliasearch(applicationID, apiKey);
    var helper = algoliasearchHelper(client, index);
    helper.setQueryParameter('restrictSearchableAttributes', 'title,tags.name');
    helper.setQueryParameter('typoTolerance', 'true');
    helper.setQueryParameter('hitsPerPage', '10');

    helper.on('result', function (content) {
        renderHits(content);
        console.log(content);
    });

    function renderHits(content) {
        $('#search-results').html(function () {
            return $.map(content.hits, function (hit) {
                return renderHit(hit)
            });
        });
    }

    function renderHit(hit) {
        var result = '';
        result = result + '<div class="item"><div class="content"><a class="header" href="/' + hit.path + '">';
        result = result + hit._highlightResult.title.value;
        result = result + '</a><div class="description search-result-tags">';
        result = result + renderTags(hit._highlightResult.tags, hit.tags);
        result = result + '</div></div></div>';
        return result;
    }

    function renderTags(tags, tagsRaw) {
        var result = '<i class="tags icon"></i>';

        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            var tagRaw = tagsRaw[i];
            var string = tag.name.value;
            if (string.indexOf('<span class="highlight">') != -1) {
                var temp = string.replace('<span class="highlight">', '').replace('</span>', '');
                result = result + '<a class="ui mini blue label" href="' + tagRaw.path + '">' + temp + '</a>';
            } else {
                result = result + '<a class="ui mini label" href="' + tagRaw.path + '">' + string + '</a>';
            }
        }

        return result;
    }

    function reset() {
        $('#search-results').empty();
        $('#search-box').val('');
    }

    $('#search-box').on('keyup', function () {

        if ($(this).val() == '') {
            reset();
        } else {
            helper.setQuery($(this).val())
                .search();
        }

    });

    $('#search-input').on('focus click keyup keypress', function () {
        $('#search-modal')
            .modal({
                inverted: true,
                observeChanges: true,
                onVisible: function () {
                    $("#search-input").blur();
                    $("#search-input").val('');
                },
                onHidden: reset
            }).modal('show');

    })

}

if(algoliaEnabled) {
    semanticUiAlgolia();
}