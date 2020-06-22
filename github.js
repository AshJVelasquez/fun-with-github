let firstPart = "https://api.github.com/search/users?q=";
let limits = "&page1&per_page=10"
var terms = "";

$(document).ready(function () {
    $("#search").click(function () {
        terms = $("#user_query").val();
        var link = firstPart+terms+limits;
        searchResults(link);
    });

var searchResults = function (link) {
    $("#results").html("");
    var html = "<h2>Search Results for " + terms + "</h2><p>"+link+"</p>";

    $.ajax({
        url: link,
        dataType: "jsonp",
        success : function (returndata) {
            $.each(returndata.data.items, function (i, item) {
                html += "<li>" +
                    "<h3><a href='" + this.url + "'>Link to GitHub Page</a></h3>" +
                    "<ul>" +
                    "<li><img class='avatar' src='" + this.avatar_url + "'/></li>" +
                    "<li>" + "Username: " + this.login + "</li>" +
                    "</ul>" +
                    "</li>";
            });
            $("#results").append(html);
        }
    });
}
});