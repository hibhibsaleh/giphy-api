$( document ).ready(function() {
    console.log("ready!");
});

function clickMe() {
    $("#giphs").empty();

    let searchString = $("#search");

    var xhr = $.get(`https://api.giphy.com/v1/gifs/search?api_key=hQHXRV9XSqmRfngSq9yn2kxVMtdihy9A&q=${searchString.val()}&offset=0&rating=PG-13&lang=en&fmt=json&sort=relevant`);

    xhr.done(function(response) {
        let allTheGiphs = response.data

        console.log(typeof(response.data));

        console.log(response);

        for (i in allTheGiphs) {
            $("#giphs").append(`<div class="col">
                    <img src='${allTheGiphs[i].images.original.url}'/>
                </div>`);
        }
    });
}