
// function to find searched city and current weather
function searchCity(city) {
  var forecastURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=44558b94b80d15a7785e0eb77b5845ac";

  $.ajax({
    url: forecastURL,
    method: "GET",
  }).then(function (responce) {
    console.log(responce);
    //  pulling the weather info then appending it to the HTML

    var cityName = $("<h2>").text(responce.name);
    var country = $("<h3>").text(responce.sys.country);
    var temp = $("<p>").text("Temperature: " + responce.main.temp + "°F");
    var humid = $("<p>").text("Humidity: " + responce.main.humidity + "%");
    var wind = $("<p>").text("Wind Speed: " + responce.wind.speed + "MPH");

    $("#city-name").empty();
    $("#city-name").append(cityName, country, temp, humid, wind);

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=44558b94b80d15a7785e0eb77b5845ac",
      method: "GET",
    }).then(function (responce5) {
      console.log(responce5);

    var temp1 = $("<p>").text("Temp: " + responce5.list[0].main.temp + "°F");
    var humid1 = $("<p>").text("Humidity: " + responce5.list[0].main.humidity + "%");
    var wind1 = $("<p>").text("Wind Speed: " + responce5.list[0].wind.speed + "MPH");
    var day1 = $("<h1>").text("Day 1");

    var temp2 = $("<p>").text("Temp: " + responce5.list[1].main.temp + "°F");
    var humid2 = $("<p>").text("Humidity: " + responce5.list[1].main.humidity + "%");
    var wind2 = $("<p>").text("Wind Speed: " + responce5.list[1].wind.speed + "MPH");
    var day2= $("<h1>").text("Day 2");

    var temp3 = $("<p>").text("Temp: " + responce5.list[2].main.temp + "°F");
    var humid3 = $("<p>").text("Humidity: " + responce5.list[2].main.humidity + "%");
    var wind3 = $("<p>").text("Wind Speed: " + responce5.list[0].wind.speed + "MPH");
    var day3 = $("<h1>").text("Day 3");

    var temp4 = $("<p>").text("Temp: " + responce5.list[3].main.temp + "°F");
    var humid4 = $("<p>").text("Humidity: " + responce5.list[3].main.humidity + "%");
    var wind4 = $("<p>").text("Wind Speed: " + responce5.list[3].wind.speed + "MPH");
    var day4 = $("<h1>").text("Day 4");

    var temp5 = $("<p>").text("Temp: " + responce5.list[4].main.temp + "°F");
    var humid5 = $("<p>").text("Humidity: " + responce5.list[4].main.humidity + "%");
    var wind5 = $("<p>").text("Wind Speed: " + responce5.list[4].wind.speed + "MPH");
    var day5 = $("<h1>").text("Day 5");
// this allows the output to only show one city at a time
    $("#day1").empty();
    $("#day1").append(day1, temp1, humid1, wind1);

    $("#day2").empty();
    $("#day2").append(day2, temp2, humid2, wind2);

    $("#day3").empty();
    $("#day3").append(day3, temp3, humid3, wind3);

    $("#day4").empty();
    $("#day4").append(day4, temp4, humid4, wind4);

    $("#day5").empty();
    $("#day5").append(day5, temp5, humid5, wind5);

    });
  });
}

// preventDefault prevents from submitting form
$("#search").on("click", function (event) {
  event.preventDefault();
  var inputCity = $("#searchInput").val();
  console.log(inputCity);
  searchCity(inputCity);
});

document.querySelector("#temp").addEventListener("click", function (event) {
  event.preventDefault();
  var modal = document.querySelector("#weather"); // assuming you have only 1
  var html = document.querySelector("html");
  modal.classList.add("is-active");
  html.classList.add("is-clipped");
  
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
    //OK button will close modal
    modal.querySelector('#ok').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
   }) 
  });