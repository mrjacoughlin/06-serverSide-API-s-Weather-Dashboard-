// $(document).ready(function () {
// $("#search-button").on("click", function () {
// var searchVal = $("#search-value").val()

var apiKey = "b0c053302397a21466e0caac313fe730";
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=london&appid=b0c053302397a21466e0caac313fe730";
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(queryURL);
  console.log(response);
});
