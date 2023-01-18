//Global Variables
var city ="";
var latitude = "";
var longitude = "";
var requestURL = "";
 

//Waits for the page to fully load before executing JS
$(document).ready(function () {

    //Obtain the city name from the form and stores it in the city value
    //Creates a button with the city name and adds it to the side of the HTML page
    //Calls the API function
    $('#SubmitButton').on("click", function(){

        city = $(".form-control").val();
        getlocation(city);

        
        var addbutton = $('<p><input class= "buttonhistory" type="button" value="' + city +'"/></p>');
        $("#buttonlist").append(addbutton);



        $(".buttonhistory").on("click", function(){
        
            city = $(this).val();
            getlocation(city);

    })


        
    })

    //API functions works with the city value
    //API for geolocation is called to obtain the latitude and longitude coordnates and uses the city variable
    function getlocation(city){

        fetch ("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=d21b12879c795a0cfa44c139988b84a4")
            
            .then(function(response){
                
                return response.json();
            })
                .then(function(data){
                    
                    for(var i =0; i<data.length ; i++){

                    latitude = data[i].lat
                    longitude = data[i].lon

                    //Once the latitude and longitude are obtained, we call the second API to obtain the current weather using these variables
                    var weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&cnt=5&appid=d21b12879c795a0cfa44c139988b84a4";
           
                            
                            fetch(weather)
                            
                                .then(function (response2) {
                                    
                                    return response2.json();
                                })
                                   
                                    .then(function (data2) {
                                        
                                        //Show Labels
                                        $('#citylabel').show();
                                        $('#temperaturelabel').show();
                                        $('#humiditylabel').show();
                                        $('#windlabel').show();
                                        
                                        //Show API Results for current weather
                                        $('#city').text(city);
                                        $("#temp").text(data2.main.temp + " C");
                                        $("#humid").text(data2.main.humidity + " %");
                                        $('#wind').text(data2.wind.speed + ' km/h');
                                        
                                        
                                        //Show Icon for current weather
                                        var icon = data2.weather[0].icon;
                                        $('#weathericon').attr("src", "http://openweathermap.org/img/wn/"+icon+"@2x.png");
                                    
                                        
                                        
                                });

                    //Obtain the 5 day weather forecast
                    var fivedayweather = 'http://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&units=metric&cnt=5&appid=d21b12879c795a0cfa44c139988b84a4'
                            
                            fetch (fivedayweather)

                                .then(function(response3){

                                    return response3.json();

                                })

                                    .then(function(data3){
                                        
                                        
                                        //Obtain the weather icons
                                        var icon1 = data3.list[0].weather[0].icon;
                                        var icon2 = data3.list[1].weather[0].icon;
                                        var icon3 = data3.list[2].weather[0].icon;
                                        var icon4 = data3.list[3].weather[0].icon;
                                        var icon5 = data3.list[4].weather[0].icon;
                                        
                                        //Show columns in the webpage 
                                        $("#col1").show();
                                        $('#day0time').show();
                                        $('#day0temp').show();
                                        $('#day0humid').show();
                                        $('#day0wind').show();
                                        $('#day0icon').show();
                                        

                                        //Show API results per day and icons
                                        $('#day0time').text(data3.list[0].dt_txt);
                                        $('#day0temp').text('Temp: ' + data3.list[0].main.temp + ' C'); 
                                        $('#day0humid').text('Hum: ' + data3.list[0].main.humidity + ' %');
                                        $('#day0wind').text('Wind: ' + data3.list[0].wind.speed + ' km/h');
                                        $('#day0icon').attr("src", "http://openweathermap.org/img/wn/"+icon1+"@2x.png");
                                        
                                        $("#col2").show();
                                        $('#day1time').show();
                                        $('#day1temp').show();
                                        $('#day1humid').show();
                                        $('#day1wind').show();
                                        $('#day1icon').show();

                                        $('#day1time').text(data3.list[1].dt_txt);
                                        $('#day1temp').text('Temp: ' + data3.list[1].main.temp + ' C'); 
                                        $('#day1humid').text('Hum: ' + data3.list[1].main.humidity + ' %');
                                        $('#day1wind').text('Wind: ' + data3.list[1].wind.speed + ' km/h');
                                        $('#day1icon').attr("src", "http://openweathermap.org/img/wn/"+icon2+"@2x.png");
                                        
                                        $("#col3").show();
                                        $('#day2time').show();
                                        $('#day2temp').show();
                                        $('#day2humid').show();
                                        $('#day2wind').show();
                                        $('#day2icon').show();

                                        $('#day2time').text(data3.list[2].dt_txt);
                                        $('#day2temp').text('Temp: ' + data3.list[2].main.temp + ' C'); 
                                        $('#day2humid').text('Hum: ' + data3.list[2].main.humidity + ' %');
                                        $('#day2wind').text('Wind: ' + data3.list[2].wind.speed + ' km/h');
                                        $('#day2icon').attr("src", "http://openweathermap.org/img/wn/"+icon3+"@2x.png");

                                        $("#col4").show();
                                        $('#day3time').show();
                                        $('#day3temp').show();
                                        $('#day3humid').show();
                                        $('#day3wind').show();
                                        $('#day3icon').show();
                                        
                                        $('#day3time').text(data3.list[3].dt_txt);
                                        $('#day3temp').text('Temp: ' + data3.list[3].main.temp + ' C'); 
                                        $('#day3humid').text('Hum: ' + data3.list[3].main.humidity + ' %');
                                        $('#day3wind').text('Wind: ' + data3.list[3].wind.speed + ' km/h');
                                        $('#day3icon').attr("src", "http://openweathermap.org/img/wn/"+icon4+"@2x.png");
                                        
                                        $("#col5").show();
                                        $('#day4time').show();
                                        $('#day4temp').show();
                                        $('#day4humid').show();
                                        $('#day4wind').show();
                                        $('#day4icon').show();

                                        $('#day4time').text(data3.list[4].dt_txt);
                                        $('#day4temp').text('Temp: ' + data3.list[4].main.temp + ' C'); 
                                        $('#day4humid').text('Hum: ' + data3.list[4].main.humidity + ' %');
                                        $('#day4wind').text('Wind: ' + data3.list[4].wind.speed + ' km/h');
                                        $('#day4icon').attr("src", "http://openweathermap.org/img/wn/"+icon5+"@2x.png");

                                    })
                                
                        }
                    })
    }




});