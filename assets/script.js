console.log("Nish");

var apiKey = "c2ff3ffb2778e006abb8189a5bc672dc";

var city = document.getElementById("search-input");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
  .then((response) => response.json())
  .then(
    function(data) {
        console.log(data);
        console.log(data.coord);

        var longitude = data.coord.lon;
        var latitude = data.coord.lat;
        console.log(longitude);
        console.log(`latitude is: ${latitude}`)
    }
  );


//    ` <--- this thingy allows you to introduce variables inside a string. Cleaner way to concatenate data types strings numbers etc

// fetch is asychronise - JS reads line after line 

// promise = fetch
document.getElementById("search-button").addEventListener("click", searchField(city.value));

 function searchField (value) {
    console.log(value);
 }

 // Google - capturing data from an input field on button click / create variable for that data / provide into the url string like we did for the apikey, replace london with whatever data you're getting from the input field 

//https://openweathermap.org/current#geocoding