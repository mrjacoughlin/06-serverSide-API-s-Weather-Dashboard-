$(document).ready(function () {
  $("#search-button-city").on("click", function () {
    var searchTerm = $("#search-term").val();
    $("#search-term").val("");
    searchWeather(searchTerm);
  });
  function searchWeather(searchTerm) {
    $.ajax({
      type: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        searchTerm +
        "&appid=edd897a328ccf6ebff12cd58fd111ba2&",
      dataType: "json",
    });
  }
});
