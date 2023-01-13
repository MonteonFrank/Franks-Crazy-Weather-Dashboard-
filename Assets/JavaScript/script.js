var city ="";
var requestURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + 'limit=1&appid=d21b12879c795a0cfa44c139988b84a4';
var latitude = "";
var longitude = "";
var cityname = "";
 
$(document).ready(function () {
function getlocation(){
fetch (requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(var i =0; i<data.length ; i++){

            latitude = data[i].lat
            longitude = data[i].lon

            console.log((data[i].name));
            console.log(data[i].lat);
            console.log(data[i].lon);

            var weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=d21b12879c795a0cfa44c139988b84a4";
           
            console.log(weather);

                fetch(weather)
                    .then(function (response2) {
                          return response2.json();
                    })
                            .then(function (data2) {
                        
                                 console.log(data2.main); 
                                 console.log(data2.wind);    
                                 console.log(data2.weather); 

                             });
            }
    })
}



$('#SubmitButton').on("click", function(){
    city = $(".form-control").val();
    console.log(city);
    getlocation();
    
})

});