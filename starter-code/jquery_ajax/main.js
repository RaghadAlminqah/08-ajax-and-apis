/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/
// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

'use strict';
(function() {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";

var appid = 'ef0e2336d0426d942f50eb10b4c3fb18';

$.ajax({
  url: weatherUrl,
  type: 'GET',
  data: {
    q : userinput,
    appid: appid,
  },
  success: function(response){
    console.log(response)
  }

})
var $userinput = $('#Userinput');
var $button = $('#Userinputbutton');
  $button.on('click', function(event) {
    event.preventDefault();
    var userInput = $Userinput.val();

})})();

//    var userinput = 'r2'

//    var starwarzURL= 'https://swapi.co/api/people/?search=r2'

//    $.ajax({
// url: starwarzURL,
// type: 'GET',
// Data : {
//   search: userinput
// },
// success: function(response){
// console.log(response)}
//    });

  

  // $.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', function(response){
  //   console.log(response.data)
  // })

 
