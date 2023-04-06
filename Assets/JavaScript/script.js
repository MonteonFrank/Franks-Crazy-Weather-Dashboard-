//Global Variables
var city ="";
var latitude = "";
var longitude = "";
var requestURL = "";
var today = dayjs();
 
// Initialize an empty array for the city history
var cityHistory = [];

//Waits for the page to fully load before executing JS
$(document).ready(function () {


    if (localStorage.getItem('city') !== null) {

        // Retrieve the array of cities from localStorage
        cityHistory = JSON.parse(localStorage.getItem('city'));

        // Iterate through the array of cities and create buttons for each
        for (var i = 0; i < cityHistory.length; i++) {
            var cityName = cityHistory[i];
            var addButton = $('<p><input class="buttonhistory" type="button" value="' + cityName +'"/></p>');
            $("#buttonlist").append(addButton);
        }
    }
      
    $("#buttonlist").on("click", ".buttonhistory", function() {
        var city = $(this).val();
        getlocation(city);
    });
    

    //Obtain the city name from the form and stores it in the city value
    //Creates a button with the city name and adds it to the side of the HTML page
    //Calls the API function
    //Upon clicking on the button, the page is 
    $('#SubmitButton').on("click", function(){

        city = $(".form-control").val();
        
        cityHistory.push(city),

        console.log(cityHistory)

        // Save the city name to local storage
        localStorage.setItem('city', JSON.stringify(cityHistory));

        getlocation(city);
        
        var addbutton = $('<p><input class= "buttonhistory" type="button" value="' + city +'"/></p>');
        $("#buttonlist").append(addbutton);
        $(".buttonhistory").on("click", function(){
        
        })
        
    })

    //API functions works with the city value
    //API for geolocation is called to obtain the latitude and longitude coordnates and uses the city variable
    function getlocation(city){

        fetch ("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=d21b12879c795a0cfa44c139988b84a4")
            
            .then(function(response){  
                return response.json();
            })
                .then(function(data){

                    for(var i =0; i<data.length ; i++){
                        latitude = data[i].lat
                        longitude = data[i].lon

                        //Once the latitude and longitude are obtained, we call the second API to obtain the current weather using these variables
                        var weather = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&cnt=5&appid=d21b12879c795a0cfa44c139988b84a4";
           
                            
                            fetch(weather)
                            
                                .then(function (response2) {
                                    
                                    return response2.json();
                                })
                                   
                                    .then(function (data2) {
                                        
                                        //Show Labels
                                        $('#citylabel').show();
                                        $('#showtime').show();
                                        $('#temperaturelabel').show();
                                        $('#humiditylabel').show();
                                        $('#windlabel').show();
                                        
                                        //Show API Results for current weather
                                        console.log(today);
                                        $('#city').text(city);
                                        $('#timenow').text(today.format("MMM D, YYYY h:mm A"));
                                        $("#temp").text(data2.main.temp + " C");
                                        $("#humid").text(data2.main.humidity + " %");
                                        $('#wind').text(data2.wind.speed + ' km/h');
                                        
                                        
                                        //Show Icon for current weather
                                        var icon = data2.weather[0].icon;
                                        $('#weathericon').attr("src", "http://openweathermap.org/img/wn/"+icon+"@2x.png");
                                    
                                        
                                        
                                });

                    //Obtain the 5 day weather forecast
                    var fivedayweather = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&units=metric&cnt=5&appid=d21b12879c795a0cfa44c139988b84a4'
                            
                            fetch (fivedayweather)

                                .then(function(response3){

                                    return response3.json();

                                })

                                    .then(function(data3){

                                        console.log(data3);
                                        
                                        for (var i = 0 ; i<5; i++){
                                            var day = data3.list[i];
                                            var icon = day.weather[0].icon;
                                        
                                        $("#col" + (i+1)).show();
                                        $("#day" + i + "time").text(day.dt_txt);
                                        $("#day" + i + "temp").text("Temp: " + day.main.temp + " C");
                                        $("#day" + i + "humid").text("Hum: " + day.main.humidity + " %");
                                        $("#day" + i + "wind").text("Wind: " + day.wind.speed + " km/h");
                                        $("#day" + i + "icon").attr("src", "http://openweathermap.org/img/wn/"+icon+"@2x.png");
                                        $("#day" + i + "time").show();
                                        $("#day" + i + "temp").show();
                                        $("#day" + i + "wind").show();
                                        $("#day" + i + "icon").show();
                                        }
                                    })
                                
                        }
                    })
    }
});