//Global Variables
var city ="";
var latitude = "";
var longitude = "";
var cityname = "";
var requestURL = "";
 

//Waits for the page to fully load before executing JS
$(document).ready(function () {

    //Obtain the city name from the form and stores it in the city value
    //Creates a button with the city name and adds it to the side of the HTML page
    //Calls the API function
    $('#SubmitButton').on("click", function(){

        city = $(".form-control").val();

        var addbutton = $('<p><input class= "buttonhistory" type="button" value="' + city +'"/></p>');

        $("#buttonlist").append(addbutton);

        getlocation(city);

        $('.buttonhistory').on("click", function(){
            alert("History Button clicked");
            city2 = $('').text()
            console.log(city2);
      })
        
    })

    //From the button created from history, start the API call using the city saved as the text in the button




    //API functions works with the city value
    //API for geolocation is called to obtain the latitude and longitude coordnates and uses the city
    function getlocation(city){

        fetch ("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=d21b12879c795a0cfa44c139988b84a4")
            
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

                    //Once the latitude and longitude are obtained, we call the second API to obtain the weather using these variables
                    var weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&cnt=5&appid=d21b12879c795a0cfa44c139988b84a4";
           
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



});