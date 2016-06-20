//takes a string of comma separated terms to be searched for on tastekid
var response = function (data) {
    console.log(data);
    for (var item in data.Similar.Results) {
        var itemResult = data.Similar.Results[item];
        var itemTemplate = $(".hidden .results").clone();
        itemTemplate.find("#name").text(itemResult.Name);
        itemTemplate.find("#teaser").text(itemResult.wTeaser);
        itemTemplate.find("#wikiLink").attr("href", itemResult.wUrl);
        itemTemplate.find("#tubeLink").attr("href", itemResult.yUrl);
        $(".mediaItems").append(itemTemplate);


    }
}

var getSuggestions = function(tag, type){

    //the parameters we need to pass in to our request to tastekid's API
    var request = {
        q: tag,
        type: type,
        info: 1,
        limit: 20,
        k: "228223-colinaul-K66I5429"
    };

    $.ajax({
        url: "https://www.tastekid.com/api/similar?callback=response&q=" + tag,
        data: request,
        dataType: "jsonp",
        type: "GET"
    })

};

$(document).ready(function() {
    $(".stats-getter").submit(function(){
        var tag = $("#term").val();
        getSuggestions(tag);
        return false;
    });


});

