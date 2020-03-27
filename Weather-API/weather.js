/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for weather API based on form inputs
 */

function buildForcastQueryURL() {
    // get entered city
    city = $("#search-city")
    .val()
    .trim();
    // append city to know url
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?APPID=eb6f2438211074890815b99640f46ae6&q=" + city;
    // return built url
    return queryURL
}

function buildCurrentWeatherQueryURL() {}

$(document).ready(function() {
    // bind search on click event here
    $("#search-city").click (function(event){

        var city = ("#input-city").val().trim();

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?APPID=eb6f2438211074890815b99640f46ae6&q=" + city,
            method: "GET"
          })
        

    })
});

function updateForcast(weather) {
    // pull days wanted out of returned weather Object
    for (let i = 0; i < 5; i++) {
        let date = new Date(weather.list[i].dt);
        date.toDateString();
        // get element by id 
        var temp = weather.list[i].main.temp;
        var far = (temp-273.15)*(9/5)+32;
        $(`#card${i}-temp`).text(far.toFixed(1));


        
    }
    // get UI element for given Day
    // update values in UI elements with weather data
}

function updateCurrentWeather(weather) {
    // pull right now data for weather
    // get element to display current weather data
    // update values in current weather element with values from weather object.

}

// bind this function to the search button on click
function displaySearchHistory() {    
    $.ajax({})
    .then(
        function (response) {
            updateForcast(updateCurrentWeather(response))
        })

    // creates an ajax for a specific city forcast
    $.ajax({
        url: buildForcastQueryURL(),
        method: "GET"
      })
      .then(function(response) {
        updateForcast(response);
      });
}

$(document).ready(() => {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?APPID=eb6f2438211074890815b99640f46ae6&q=London",
        method: "GET"
      })
      .then(function(response) {
        updateUI(response);
      });
})

// function displaySearchHistory() {
//     console.log("test");
//     var city = $(this).attr("data-name");
//     var queryURL = "http://api.openweathermap.org/data/2.5/forecast?APPID=eb6f2438211074890815b99640f46ae6&q=" + city;

    
//     // creates an ajax for a specific city
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
      
//       .then(function(response) {

//         // YOUR CODE GOES HERE!!!
//         console.log(response);

//       });
// }

$("#search-city").on("click", function(event){

    event.preventDefault();

   var city = $("#city").val().trim();
})

function renderForCast() {
    $().empty();

    for(var i = 0; i < 5; i++) {

        //var 

        var forecast = $("<div></div>").text();

    }

    renderForCast();
}