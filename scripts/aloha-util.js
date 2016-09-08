hexo.extend.helper.register("resourceURL", function(cdn, configURL) {

    if(configURL.startsWith('cdn')) {
        return cdn + configURL.substring(3, configURL.length)
    } else {
        return configURL.substring(5, configURL.length);
    }

});