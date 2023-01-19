# Franks-Crazy-Weather-Dashboard-
<h1>Weather Dashboard using 3rd Party APIs<h1>

<h2><strong>Description</strong></h2>

<p>For this challenge, we had to create a weather dashboard from scratch and used some pieces of Bootstrap to create the HTML content. Additionally, we used a 3rd Party API from Open Weather which provides the weather forecast and icons.</p> 
  
<p>The 3rd Party API had documentation on how to use their API however, it was confusing since the API would contain objects and arrays within them. I struggled a bit to understand the information received. For this submition, the weather forecast time stamp is shown but its not for 5 days but withint he next 3 hours. I will work on undestanding the API a bit more in order to fix it and show the correct weather for the next 5 days.</p>
 
<h2><strong>Programming Logic</strong></h2>
<p>The dashboard skeleton was created with bits of bootstrap however it was moslty based from the mock up. The aside section contains the form to search for the city as well as the button to search. Upon searching a city, a new button is created with the name of the city and is useful to view the history. For this section, we were supposed to use local storage but I was not able to complete this section but will fix for later on.</p>
  
<p>From the center section, the user will be able to find the current weather showing the temperature, humidity, wind speed and the weather icon. Right below, the user will be able to find 5 additional forecasts with the same format however, for the next 3 hours approximately. This is something I will fix later on to show the following 5 days</p>


<h2><strong>What did I learn?</strong></h2>
<p>During this challenge, I learned how to use and understand APIs a bit better since there is a lot of information that we recieve and need to break it down to understand the pieces we want to use. For this specific API, I later understood that the information for the 5 weather API is sent in sections of every 3 hours and later on will break it down to show the next 5 day forecast. </p>

<h2><strong>Screenshots and links</strong></h2>
<p>How the webpage should look when opening:</p>
![image](https://user-images.githubusercontent.com/112662397/213325087-dbacb46d-18a0-41a9-af63-3ff1fc812fc3.png)

<p>When searching for a city:</p>
![image](https://user-images.githubusercontent.com/112662397/213325325-e15a146f-7820-4133-a1ed-3b6c722077ff.png)

<p>Searching for a second city the history is populated on the left side:</p>
![image](https://user-images.githubusercontent.com/112662397/213325470-34e5d59a-6339-4dfe-bd47-e6781c96a0a2.png)

<p>When selecting a city from the history, the weather is shown again:</p>
![image](https://user-images.githubusercontent.com/112662397/213325565-98a533d5-8cf9-4681-8f00-e92f6c309f67.png)

<p>Link to github pages:</p>
https://monteonfrank.github.io/Franks-Crazy-Weather-Dashboard-/


