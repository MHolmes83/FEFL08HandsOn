$(document).ready(function() {
    $("header").hover(function() {
        $(this).css("color", "darkred");
    }, function() {
        $(this).css("color", "darkblue")
    });
});

$(document).ready(function() {
    $("p").click(function() {
        $(this).text("jQuery is a fast JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, bu an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compress it.")
    });
});

$(document).ready(function() {
    $("li").dblclick(function() {
        $(this).hide();
    });
});

$(document).ready(function() {
    $(".name").keyup(function() {
        $(this).css("color", "red")
    });
});